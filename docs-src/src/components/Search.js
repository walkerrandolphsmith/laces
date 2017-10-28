import React from 'react';

const Search = (props) => {
    return (
        <div className="search">
            <i className="search-icon" />
            <input
                placeholder="Search..."
                value={props.value}
                onChange={props.onChange}
            />
            <i className="cancel-icon" onClick={props.clear} />
        </div>
    )
};

class SmartSearch extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { filter: '' };
        this.onChange = this.onChange.bind(this);
        this.clear = this.clear.bind(this);
    }

    onChange(event) {
        const value = event.target.value;
        this.setState({ filter: value });
    }

    clear() {
        this.setState({ filter: '' });
    }

    render() {
        return (
            <Search
                {...this.props}
                value={this.state.filter}
                onChange={this.onChange}
                clear={this.clear}
            />
        )
    }
}

export default SmartSearch;