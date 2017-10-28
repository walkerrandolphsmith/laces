import React from 'react'
import Group from './../components/Group';
import Method from './../components/Method';

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
];

const methods = [
    {
        signature: "toLowerCase(string)",
        source: "http://www.github.com/quillio/stringy",
        npm: "http://www.github.com/quillio/stringy",
        feedback: "http://www.github.com/quillio/stringy",
        description: "Converts each symbol of a string to its lowercase alternative",
        example: "toLowerCase('Hello World'); // => hello world",
    },
    {
        signature: "toLowerCase(string)",
        source: "http://www.github.com/quillio/stringy",
        npm: "http://www.github.com/quillio/stringy",
        feedback: "http://www.github.com/quillio/stringy",
        description: "Converts each symbol of a string to its lowercase alternative",
        example: "toLowerCase('Hello World'); // => hello world",
    },
    {
        signature: "toLowerCase(string)",
        source: "http://www.github.com/quillio/stringy",
        npm: "http://www.github.com/quillio/stringy",
        feedback: "http://www.github.com/quillio/stringy",
        description: "Converts each symbol of a string to its lowercase alternative",
        example: "toLowerCase('Hello World'); // => hello world",
    },
    {
        signature: "toLowerCase(string)",
        source: "http://www.github.com/quillio/stringy",
        npm: "http://www.github.com/quillio/stringy",
        feedback: "http://www.github.com/quillio/stringy",
        description: "Converts each symbol of a string to its lowercase alternative",
        example: "toLowerCase('Hello World'); // => hello world",
    },
    {
        signature: "toLowerCase(string)",
        source: "http://www.github.com/quillio/stringy",
        npm: "http://www.github.com/quillio/stringy",
        feedback: "http://www.github.com/quillio/stringy",
        description: "Converts each symbol of a string to its lowercase alternative",
        example: "toLowerCase('Hello World'); // => hello world",
    },
    {
        signature: "toLowerCase(string)",
        source: "http://www.github.com/quillio/stringy",
        npm: "http://www.github.com/quillio/stringy",
        feedback: "http://www.github.com/quillio/stringy",
        description: "Converts each symbol of a string to its lowercase alternative",
        example: "toLowerCase('Hello World'); // => hello world",
    },
    {
        signature: "toLowerCase(string)",
        source: "http://www.github.com/quillio/stringy",
        npm: "http://www.github.com/quillio/stringy",
        feedback: "http://www.github.com/quillio/stringy",
        description: "Converts each symbol of a string to its lowercase alternative",
        example: "toLowerCase('Hello World'); // => hello world",
    },
    {
        signature: "toLowerCase(string)",
        source: "http://www.github.com/quillio/stringy",
        npm: "http://www.github.com/quillio/stringy",
        feedback: "http://www.github.com/quillio/stringy",
        description: "Converts each symbol of a string to its lowercase alternative",
        example: "toLowerCase('Hello World'); // => hello world",
    },
    {
        signature: "toLowerCase(string)",
        source: "http://www.github.com/quillio/stringy",
        npm: "http://www.github.com/quillio/stringy",
        feedback: "http://www.github.com/quillio/stringy",
        description: "Converts each symbol of a string to its lowercase alternative",
        example: "toLowerCase('Hello World'); // => hello world",
    }
];

const IndexPage = () => (
  <main>
      <aside>
          <div className="list">
              {groups.map(
                  (group, i) => (<Group key={i} {...group} />)
              )}
          </div>
      </aside>
      <div className="content">
          {methods.map(
              (method, i) => (<Method key={i} {...method} />)
          )}
      </div>
  </main>
);

export default IndexPage
