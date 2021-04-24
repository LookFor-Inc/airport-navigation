module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'google'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'jsx-a11y'
  ],
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': './craco.config.js'
      }
    },
    'react': {
      'version': '999.999.999'
    }
  },
  'rules': {
    'max-len': ['error', {'code': 120}],
    'indent': [2, 2, {
      'SwitchCase': 1,
      'ignoredNodes': [
        'JSXAttribute'
      ]
    }],
    'react/jsx-indent-props': [2, 'first'],
    'react/self-closing-comp': ['error', {
      'component': true,
      'html': true
    }],
    'react-hooks/exhaustive-deps': 'off',
    'valid-jsdoc': [2, {
      'prefer': {
        'return': 'returns'
      }
    }],
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal'],
        'pathGroups': [
          {
            'pattern': 'react',
            'group': 'external',
            'position': 'before'
          }
        ],
        'pathGroupsExcludedImportTypes': ['react'],
        'newlines-between': 'never',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        }
      }
    ],
    'semi': [
      'error',
      'never'
    ],
    'comma-dangle': [
      'error', 'never'
    ],
    'arrow-parens': [
      'error', 'as-needed'
    ],
    'require-jsdoc': ['warn', {
      'require': {
        'FunctionDeclaration': true,
        'MethodDefinition': true,
        'ClassDeclaration': true,
        'ArrowFunctionExpression': true,
        'FunctionExpression': true
      }
    }],
    'import/no-unresolved': [2, {commonjs: true, amd: true}],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'linebreak-style': 0,
    'operator-linebreak': ['error', 'none', {
      'overrides': {
        '?': 'before',
        ':': 'before',
        '=': 'ignore',
        '&&': 'ignore',
        '||': 'ignore',
        '+': 'after'
      }
    }]
  }
}
