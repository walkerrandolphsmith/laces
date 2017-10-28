import React from 'react'
import List from './../components/List';
import Method from './../components/Method';
import Search from './../components/Search';
import { groups, methods } from './../metadata';

class SmartIndexPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            filter: '',
            groups: groups,
            methods: methods,
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
                        (method, i) => (<Method key={i} {...method} />)
                    )}
                </div>
            </main>
        )
    }
}

export default SmartIndexPage
