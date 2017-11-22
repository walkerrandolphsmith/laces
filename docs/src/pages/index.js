import React from 'react'
import Link from 'gatsby-link'
import enhanceWithClickOutside from 'react-click-outside';

const Logo = () => (
    <h1>
        <svg
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 100 125"
            fill="white"
            style={{
                width: '50px',
                height: '50px',
                marginTop: '10px'
            }}
        >
            <path
                d="M47.832,44.766c-1.437-0.761-3.217-0.212-3.977,1.224l-1.289,2.435c-3.593-2.528-5.71-5.491-7.922-8.623  c-2.484-3.517-5.054-7.152-9.744-10.5c-3.761-2.684-7.74-4.102-11.51-4.102c-3.739,0-7.178,1.384-9.684,3.897  c-2.4,2.411-3.718,5.6-3.706,8.983c0.033,9.913,9.689,15.916,26.65,16.794c-1.416,0.744-2.727,1.622-3.875,2.649  c-3.511,3.137-5.433,7.357-5.555,12.202c-0.042,1.623,1.241,2.974,2.866,3.017c0.026,0,0.05,0,0.076,0  c1.59,0,2.899-1.269,2.939-2.867c0.082-3.227,1.292-5.906,3.594-7.965c2.626-2.347,6.614-3.724,10.735-3.786l-0.195,0.369  c-0.76,1.435-0.212,3.216,1.224,3.976c0.438,0.231,0.909,0.344,1.373,0.344c1.056,0,2.076-0.569,2.603-1.567l6.62-12.504  C49.815,47.307,49.268,45.525,47.832,44.766z M5.884,38.06c-0.005-1.808,0.701-3.516,1.99-4.809  c1.394-1.398,3.353-2.167,5.516-2.167c2.537,0,5.335,1.038,8.091,3.006c3.88,2.768,6.055,5.848,8.358,9.105  c1.377,1.95,2.78,3.936,4.551,5.858c-1.116,0.04-2.216,0.062-3.298,0.062C25.187,49.115,5.919,48.317,5.884,38.06z"/><path d="M91.722,30.088c-1.719-0.629-3.427-0.945-5.08-0.945c-7.079,0-11.883,5.553-16.527,10.924  c-4.061,4.691-7.918,9.138-13.022,10.165l0.789-1.49c0.76-1.435,0.213-3.216-1.224-3.976c-1.436-0.761-3.218-0.212-3.977,1.224  l-6.619,12.504c-0.761,1.435-0.213,3.216,1.224,3.976c0.438,0.231,0.909,0.344,1.373,0.344c1.056,0,2.076-0.569,2.603-1.567  l1.124-2.125c0.223,0.233,0.479,0.44,0.782,0.595c0.247,0.125,6.067,3.188,6.813,12.381c0.125,1.54,1.412,2.705,2.929,2.705  c0.079,0,0.159-0.003,0.24-0.011c1.62-0.131,2.827-1.55,2.694-3.169c-0.602-7.436-3.835-11.984-6.487-14.526  c3.855,0.695,9.604,1.491,15.758,1.491c0.001,0,0,0,0.001,0c5.88,0,10.717-0.755,14.373-2.243  c6.597-2.689,10.623-8.265,10.508-14.553C99.898,36.4,96.727,31.915,91.722,30.088z M87.269,50.893  c-2.948,1.2-7.036,1.81-12.153,1.81c-2.927,0-5.928-0.207-8.757-0.525c3.105-2.365,5.74-5.41,8.205-8.262  c4.126-4.77,7.689-8.888,12.078-8.888c0.976,0,1.977,0.19,3.061,0.586c2.709,0.989,4.358,3.338,4.411,6.284  C94.169,44.876,92.399,48.802,87.269,50.893z"
        />
        </svg>
        <Link to="/">@laces/laces</Link>
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

const Method = (props) => {
    const { name, description, source, npm, feedback, example, returns, params } = props;

    return (
        <div
            className="method">
            <header>
                <h3 className="signature" id={name}>{name}</h3>
                <ul className="links">
                    <a href={source} target="_blank">source</a>
                    <a href={npm} target="_blank">npm</a>
                    <a href={feedback} target="_blank">docs</a>
                </ul>
            </header>
            <p>{description}</p>
            <h3>Arguments</h3>
            <ul>
                {params.map(
                    (param, i) => (
                        <li key={i}>
                            {
                                param.default
                                    ? <code>[{param.name}={param.default}]</code>
                                    : <code>{param.name}</code>
                            }
                            <em> ({param.type})</em>
                            : {param.description}
                        </li>
                    )
                )}
            </ul>
            <h3>Returns</h3>
            <p>
                <em>({returns.type})</em>
                : {returns.description}
            </p>
            <h3>Examples</h3>
            <div className="gatsby-highlight">
                <pre className="language-js">
                    <code dangerouslySetInnerHTML={{__html: example }} />
                </pre>
            </div>
        </div>
    )
};

class SmartIndexPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        const root = props.data.allDocumentationJs; //allMarkdownRemark;
        const methods = generateMethods(root.edges);
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
        this.removeHash = this.removeHash.bind(this);
    }

    componentDidMount() {
        this.focus();
        this.content = document.getElementsByClassName('content')[0];
        this.aside = document.getElementsByTagName('aside')[0];

        window.addEventListener('keydown', this.onWindowKeyDown);

        ((window.gitter = {}).chat = {}).options = {
            room: 'laces-io/laces',
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

        window.onpopstate = history.onpushstate = (e) => {
            const path = location.hash.split('#')[1];
            if(path) {
                const elm = document.getElementById(path);
                this.content.scrollTop = elm.offsetTop - 50;
            } else {
                this.content.scrollTop = 0;
                this.aside.scrollTop = 0;
            }
        }
    }

    removeHash () {
        let loc = window.location;
        if ('pushState' in history) {
            history.pushState("", document.title, loc.pathname + loc.search);
        } else {
            loc.hash = "";
        }
        this.content.scrollTop = 0;
        this.aside.scrollTop = 0;
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
            //updateHash(this.state.groups[0].items[0]);
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
        this.removeHash();
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
                            <a href="https://www.github.com/walkerrandolphsmith/laces/releases" target="_blank">v0.0.1</a>
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
                            (method, i) => <Method key={i} {...method} />
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

const groups = [
    {
        header: 'Query',
        items: [
            'endsWith',
            'isAlpha',
            'isAlphaNumeric',
            'isBetween',
            'isBlank',
            'isEmpty',
            'isInteger',
            'isMatch',
            'isNaturalNumber',
            'isNumeric',
            'isReal',
            'startsWith',
        ]
    },
    {
        header: 'Manipulations',
        items: [
            'camalize',
            'capitalize',
            'charAt',
            'chompLeft',
            'chompRight',
            'clamp',
            'collapse',
            'escapeHtml',
            'escapeRegex',
            'latinise',
            'padLeft',
            'padRight',
            'remove',
            'removeFirst',
            'repeat',
            'replace',
            'reverse',
            'slugify',
            'template',
            'takeFirst',
            'takeLast',
            'takeWhile',
            'toCamelCase',
            'toKebabCase',
            'toLowerCase',
            'toSnakeCase',
            'toSpaceCase',
            'toUpperCase',
            'trim',
            'trimLeft',
            'trimRight',
        ]
    },
    {
        header: 'Unwrap',
        items: [
            'split',
            'toChars',
            'toCodePoints',
            'toLines',
            'toWords',
        ]
    },
    {
        header: 'Wrap',
        items: [
            'chain'
        ]
    },
];

const methods = groups
    .reduce(
        (names, group) => names.concat(group.items), []
    )
    .map(
        name => ({
            name: name,
        })
    )
    .map(method => ({
        ...method,
        source: `https://www.github.com/walkerrandolphsmith/laces/blob/master/packages/${method.name}/index.js`,
        npm: `https://www.npmjs.com/package/@laces/${method.name}`,
        feedback: `https://www.github.com/walkerrandolphsmith/laces/blob/master/packages/${method.name}/README.md`,
    }))
    .reduce(
        (map, method) => ({ ...map, [method.name]: method }),{}
    );

export const generateMethods = (edges) => {
    edges.forEach(({ node }) => {
        if(node.name && node.name !== 'index' && node.name !== 'Chain') {
            const {
                name,
                description,
                returns,
                params,
                examples
            } = node;

            methods[name] = {
                ...methods[name],
                name: name,
                description: description.internal.content,
                returns: {
                    name: returns[0].title,
                    type: returns[0].type.name,
                    description: returns[0].description.internal.content
                },
                params: params.map(param => ({
                    name: param.name,
                    type: param.type.name,
                    default: param.default,
                    description: param.description.internal.content
                })),
                example: examples
                    .map(example => example.highlighted)
                    .reduce((all, example) => all + '\n\n' + example, '')
                    .slice(2)
            };
        }
    });

    return Object
        .keys(methods)
        .reduce(
            (list, key) => list.concat(
                {
                    name: key,
                    ...methods[key]
                }
            ),
            []
        );
};

const generateQuickStart = (edges) => {
    const edge = edges.find(edge => edge.node.id.includes('laces/docs'))

    return edge.node.html.replace(/<h1>(.*)<\/h1>/, () => '<h1>Hello World</h1>')
};

export const pageQuery = graphql`
query data {
  allMarkdownRemark {
    edges {
      node {
        id,
       html
      }
    }
  }
  allDocumentationJs {
    edges {
      node {
        name
        description {
          internal {
            content
          }
        }
        examples {
          highlighted,
        }
        returns {
          title
          type {
            name
          }
          description {
            internal {
              content
            }
          }
        }
        params {
          name
          default
          type {
            name
          }
          description {
            internal {
              content
            }
          }
        }
      }
    }
  }
}`;