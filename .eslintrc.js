const {readGitignoreFiles} = require('eslint-gitignore')// eslint-disable-line

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
    },
    plugins: ['@typescript-eslint', 'mocha', 'chai-friendly', 'import', 'filename-rules'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:mocha/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'prettier/@typescript-eslint'
    ],
    env: {
        node: true,
        mocha: true,
        es6: true,
    },
    ignorePatterns: readGitignoreFiles({cwd: __dirname}),
    rules: {
        // plugin rules
        '@typescript-eslint/no-use-before-define': ['error', {functions: false}],
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'filename-rules/match': [2, {'.ts': 'camelCase', '.js': /.*/}],
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                'selector': 'interface',
                'format': ['PascalCase'],
                'custom': {
                    'regex': '^I[A-Z]',
                    'match': false
                }
            }
        ],
        'mocha/no-setup-in-describe': 'off',
        'mocha/no-skipped-tests': 'off',
        'mocha/no-hooks-for-single-case': 'off',
        'mocha/no-exclusive-tests': 'error',
        'mocha/no-pending-tests': 'off',
        'import/no-default-export': 'error',
        'import/no-unresolved': 'off',
        'import/namespace': 'off',
        // eslint rules
        eqeqeq: ['error', 'smart'],
        quotes: ['error', 'single', {avoidEscape: true}],
        'global-require': 'error',
        'accessor-pairs': 'error',
        'array-bracket-newline': ['error', 'consistent'],
        'array-bracket-spacing': ['error', 'never'],
        'arrow-spacing': [
            'error',
            {
                after: true,
                before: true,
            },
        ],
        'comma-spacing': [
            'error',
            {
                after: true,
                before: false,
            },
        ],
        'comma-style': ['error', 'last'],
        'dot-notation': 'error',
        indent: ['error', 4, {SwitchCase: 1}],
        'no-eq-null': 'error',
        'no-floating-decimal': 'error',
        'no-inline-comments': 'warn',
        'no-mixed-requires': 'error',
        'no-multi-assign': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': 'error',
        'no-param-reassign': 'error',
        'no-restricted-globals': 'error',
        'no-restricted-imports': 'error',
        'no-restricted-modules': 'error',
        'no-return-await': 'error',
        'no-spaced-func': 'error',
        'no-tabs': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'one-var-declaration-per-line': 'error',
        'unicode-bom': ['error', 'never'],
        'wrap-regex': 'error',
        'linebreak-style': ['error', 'unix']
    }
};
