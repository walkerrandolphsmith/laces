import React from 'react';

const Group = ({ header, items, className, toggle }) => (
    <div className={className}>
        <i className="expander" onClick={toggle} />
        <h2>{header}</h2>
        <ul className="functions">
            {items.map(
                (item, i) => (<li key={i} className="function">{item}</li>)
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

export default SmartGroup;