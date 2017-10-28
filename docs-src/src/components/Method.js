import React from 'react';
import Link from 'gatsby-link'

const Signature = ({ text }) => (
    <div className="signature">
        {text}
    </div>
);

const Links = ({ source, npm, feedback }) => (
    <ul className="links">
        <Link to={source}>source</Link>
        <Link to={npm}>npm package</Link>
        <Link to={feedback}>edit doc</Link>
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
        <Signature text={props.signature} />
        <Links {...props} />
        <Description text={props.description} />
        <Example text={props.example} />
    </div>
);

export default Method;