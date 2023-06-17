module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        'standard',
        'standard-jsx',
        'standard-react'
    ],
    parser: '@babel/eslint-parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
        indent: ['error', 4],
        'react-refresh/only-export-components': 'warn',
        'no-tabs': 0,
        'react/jsx-indent': [2, 4, { checkAttributes: true, indentLogicalExpressions: true }],
        'react/jsx-indent-props': [2, 4],
        'jsx-quotes': ['error', 'prefer-double'],
        'react/prop-types': 'off',
        'react/no-unknown-property': ['error', { ignore: ['css'] }]
    }
}
