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

const muckWithMarkup = (string, method) => {
    const name = string.slice(4, string.indexOf('('));
    const text = string.slice(4, string.indexOf('</h2>'));

    const links = `<ul class="links">
        <a href=${method.source}>source</a>
        <a href=${method.npm}>npm package</a>
        <a href=${method.feedback}>edit doc</a>
    </ul>`;

    const signature = `<h2 class="signature" id=${name}>${text}</h2>`;
    string = string.replace(/<h2>.*<\/h2>/, signature + links);
    string = string.replace('</h2>', '</h2><div class="description">');
    string = string.replace('<h3>Arguments</h3>', '</div><h3>Arguments</h3>');
    string = string.replace('<h3>Example</h3>', '<h3>Example</h3><div class="example">');
    string += '</div>';
    return string;
};

export const generateMethods = (edges) => {
    edges.map(edge => {
        const { frontmatter, html } = edge.node;
        const id = frontmatter.title;


        methods[id]['content'] = muckWithMarkup(html, methods[id]);
    });

    return Object.keys(methods).reduce((list, key) => list.concat({ name: key, ...methods[key] }), []);
};