import React from 'react';

const Signature = ({ name, text }) => (
    <div className="signature" id={name}>{text}</div>
);

const Links = ({ source, npm, feedback }) => (
    <ul className="links">
        <a href={source}>source</a>
        <a href={npm}>npm package</a>
        <a href={feedback}>edit doc</a>
    </ul>
);

const Description = ({ text }) => (
    <p className="description">
        {text}
    </p>
);

const Example = ({ text }) => (
    <div className="example">
        {text}
    </div>
);

const Method = (props) => (
    <div className="method">
        <Signature name={props.name} text={props.signature} />
        <Links {...props} />
        <Description text={props.description} />
        <Example text={props.example} />
    </div>
);

export default Method;