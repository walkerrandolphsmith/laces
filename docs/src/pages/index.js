import React from 'react'
import { groups, generateMethods } from './../metadata';


const Item = ({ text }) => {
    const href = `#${text}`;
    return (
        <li className="function"><a className="internal" href={href}>{text}</a></li>
    )
};

const Group = ({ header, items, className, toggle }) => (
    <div className={className}>
        <i className="expander" onClick={toggle} />
        <h2>{header}</h2>
        <ul className="functions">
            {items.map(
                (item, i) => (<Item key={i} text={item} />)
            )}
        </ul>
    </div>
);

class SmartGroup extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { isExpanded: true };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ isExpanded: !this.state.isExpanded })
    }

    render() {
        const className = `group ${this.state.isExpanded ? 'expanded' : ''}`;
        return <Group
            {...this.props}
            toggle={this.toggle}
            className={className}
        />
    }
}

const List = (props) => {
    return props.hasResult ? (
        <div className="list">
            {props.groups.map(
                (group, i) => (<SmartGroup key={i} {...group} />)
            )}
        </div>
    ) :(
        <span>Sorry no results</span>
    )
};


class SmartIndexPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        const methods = generateMethods(props.data.allMarkdownRemark.edges);
        this.state = {
            filter: '',
            groups: groups,
            methods,
            hasResult: true
        };
        this.onChange = this.onChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.clear = this.clear.bind(this);
        this.focus = this.focus.bind(this);
    }

    componentDidMount() {
        this.focus();
    }

    focus() {
        setTimeout(() => this.textInput.focus(), 0)
    }

    onChange(event) {
        const value = event.target.value;

        const filteredGroups = groups
            .map(group => ({
                ...group,
                items: group.items.filter(item => item.startsWith(value))
            }))
            .filter(group => group.items.length > 0);

        const hasResult = filteredGroups.length > 0;

        const alreadyNoResult = !this.state.hasResult;

        this.setState({
            filter: !hasResult && alreadyNoResult ? this.state.filter : value,
            groups: filteredGroups,
            hasResult
        });
    }

    onKeyDown(event) {
        if(!this.state.hasResult) return;

        const isEnter = event.which === 13 || event.keyCode === 13;

        if(isEnter) {
            const fn = this.state.groups[0].items[0];
            window.location = `/#${fn}`;
            this.focus();
        }
    }

    clear() {
        this.setState({
            filter: '',
            groups: groups,
            hasResult: true
        });
    }

    render() {
        return (
            <main>
                <aside>
                    <div className="search">
                        <i className="search-icon" />
                        <input
                            ref={(input) => { this.textInput = input; }}
                            autoFocus
                            placeholder="Search..."
                            value={this.state.filter}
                            onChange={this.onChange}
                            onKeyDown={this.onKeyDown}
                        />
                        <i className="cancel-icon" onClick={this.clear} />
                    </div>
                    <List {...this.state} />
                </aside>
                <div className="content">
                    {this.state.methods.map(
                        (method, i) => (<div
                            key={i}
                            className="method"
                            dangerouslySetInnerHTML={{__html: method.content }}
                        />)
                    )}
                </div>
            </main>
        )
    }
}

export default SmartIndexPage;

export const pageQuery = graphql`
query data {
  allMarkdownRemark {
    edges {
      node {
        html
        frontmatter {
          title
        }
      }
    }
  }
}
`;