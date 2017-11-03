import React from 'react'
import { groups, generateMethods, generateQuickStart } from './../metadata';
import Link from 'gatsby-link'
import enhanceWithClickOutside from 'react-click-outside';

const Logo = () => (
    <h1>
        <svg
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 511.996 511.996"
            width="25px"
            height="25px"
        >
            <g>
                <path
                    d="M486.467,0.032h-0.119h-0.009c-0.026,0-0.051,0-0.077,0h-0.008h-0.017c-0.538,0-1.067,0.017-1.596,0.051    c-7.858,0.461-123.504,7.833-187.256,46.91c-13.754,8.43-18.088,24.547-20.921,52.294c-9.129-9.189-20.187-15.844-33.984-15.844    c-9.283,0-18.37,3.285-26.296,9.496c-23.745,18.617-103.939,85.638-138.887,166.497c-42.968,99.409-35.886,172.555-35.562,175.618    c0.085,0.802,0.444,1.51,0.606,2.287c-24.018,30.733-38.608,52.362-40.187,54.726c-3.925,5.87-2.338,13.822,3.549,17.747    c2.184,1.45,4.65,2.15,7.09,2.15c4.138,0,8.199-1.997,10.665-5.7c0.367-0.546,13.788-20.418,36.415-49.495    c0.29,0.085,0.529,0.282,0.819,0.358c1.928,0.512,12.448,3.037,30.358,3.037c49.76,0,152.991-19.3,285.206-148.537    C493.924,196.605,510.025,49.698,511.723,29.391c0.179-1.229,0.273-2.483,0.273-3.763C511.996,11.491,500.597,0.032,486.467,0.032    z M358.348,293.326C230.834,417.964,133.738,434.568,91.034,434.568c-5.307,0-9.437-0.282-13.02-0.623    c43.762-53.591,109.954-125.628,184.253-175.302c5.87-3.95,7.466-11.902,3.524-17.773c-3.95-5.87-11.885-7.423-17.747-3.524    C175.392,285.92,111.537,353.418,67.016,406.813c1.357-28.156,7.926-77.438,33.762-137.223    c32.67-75.595,110.586-140.363,131.183-156.515c3.592-2.816,7.099-4.044,10.495-4.044c22.653,0.008,40.724,54.384,50.118,54.384    c0.341,0,0.666-0.068,0.981-0.213c8.097-3.737,4.804-86.789,17.201-94.392c59.862-36.671,175.576-43.181,175.576-43.181    S476.732,177.604,358.348,293.326z"
                    fill="white"
                />
            </g>
        </svg>
        <Link to="/">@quillio/Stringy</Link>
    </h1>
);

const GitterLogo = () => (
    <svg
         version="1.1"
         viewBox="0 0 18 25"
         width="25px"
         height="25px"
         style={{ fill: 'white' }}
    >
        <rect x="15" y="5" width="2" height="10"></rect>
        <rect x="10" y="5" width="2" height="20"></rect>
        <rect x="5" y="5" width="2" height="20"></rect>
        <rect width="2" height="15"></rect>
    </svg>
);

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

class GitterAside extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    handleClickOutside() {
        this.props.closeGitterAside();
    }

    render() {
        return (
            <div className={this.props.className} />
        )
    }
}

const SmartGitterAside = enhanceWithClickOutside(GitterAside);


class SmartIndexPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        const methods = generateMethods(props.data.allMarkdownRemark.edges);
        const quickStart = generateQuickStart(props.data.allMarkdownRemark.edges);
        this.state = {
            filter: '',
            groups: groups,
            methods,
            quickStart,
            hasResult: true,
            isOpen: false,
        };
        this.onChange = this.onChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.clear = this.clear.bind(this);
        this.focus = this.focus.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
        this.openGitterAside = this.openGitterAside.bind(this);
        this.closeGitterAside = this.closeGitterAside.bind(this);
        this.onWindowKeyDown = this.onWindowKeyDown.bind(this);
    }

    componentDidMount() {
        this.focus();

        window.addEventListener('keydown', this.onWindowKeyDown);

        ((window.gitter = {}).chat = {}).options = {
            room: 'quillio-io/Lobby',
            activationElement: '.gitter-btn',
            showChatByDefault: false,
            targetElement: '.gitter-sidebar'
        };

        document
            .querySelector('.gitter-sidebar')
            .addEventListener('gitter-chat-toggle', (e) => {
                if(!e.detail.state) {
                    this.closeGitterAside()
                }
            });
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

    onWindowKeyDown(event) {
        const isF = event.keyCode === 70;
        if (isF && (event.ctrlKey || event.metaKey)) {
            this.focus();
        }

        if(event.keyCode === 27 && this.state.isOpen) {
            this.closeGitterAside()
        }
    }

    onKeyDown(event) {
        if(!this.state.hasResult) return;

        const isEnter = event.which === 13 || event.keyCode === 13;

        if(isEnter) {
            location.hash = this.state.groups[0].items[0];
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

    scrollToTop() {
        this.content.scrollTo(0, 0);
    }

    openGitterAside() {
        this.setState({ isOpen: true })
    }

    closeGitterAside() {
        this.setState({ isOpen: false })
    }

    render() {
        const gitterAsideClassName = 'gitter-sidebar ' + (this.state.isOpen ? 'open' : 'closed');
        return (
            <div>
                <header className="navigation">
                    <Logo />
                    <div className="links">
                        <span>
                            <a href="https://www.github.com/quillio/stringy/releases" target="_blank">v0.0.1</a>
                        </span>
                        <span>
                            <button
                                className="gitter-btn"
                                onClick={this.openGitterAside}
                            >
                                <GitterLogo />
                                <span>Gitter</span>
                            </button>
                        </span>
                    </div>
                </header>
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
                    <div className="content" ref={(content) => this.content = content}>
                        <div className="quick-start" dangerouslySetInnerHTML={{ __html: this.state.quickStart }} />
                        {this.state.methods.map(
                            (method, i) => (<div
                                key={i}
                                className="method">
                                    <header>
                                        <h3 className="signature" id={method.name}>{method.name}</h3>
                                        <ul className="links">
                                            <a href={method.source} target="_blank">source</a>
                                            <a href={method.npm} target="_blank">npm</a>
                                            <a href={method.feedback} target="_blank">docs</a>
                                        </ul>
                                    </header>
                                    <div dangerouslySetInnerHTML={{__html: method.content }} />
                            </div>)
                        )}
                    </div>
                    <button
                        className="top-of-page"
                        onClick={this.scrollToTop}
                    >
                        <i className="chevron" />
                    </button>
                    <SmartGitterAside
                        className={gitterAsideClassName}
                        closeGitterAside={this.closeGitterAside}
                    />
                </main>
            </div>
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