export const groups = [
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


export const methods = groups
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
        source: `https://www.github.com/quillio/stringy/blob/master/packages/${method.name}/index.js`,
        npm: `https://www.npmjs.com/package/@quillio/stringy-${method.name}`,
        feedback: `https://www.github.com/quillio/stringy/blob/master/packages/${method.name}/README.md`,
    }))
    .reduce(
        (map, method) => ({ ...map, [method.name]: method }),{}
    );

export const generateMethods = (edges) => {
    edges.map(edge => {
        const { frontmatter, html } = edge.node;
        const id = frontmatter.title;

        methods[id]['content'] = html.replace(/<h2>.*<\/h2>/, '')
    });

    return Object.keys(methods).reduce((list, key) => list.concat({ name: key, ...methods[key] }), []);
};