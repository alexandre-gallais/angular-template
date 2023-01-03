// # Eslint *.ts rules	'
module.exports = {
  extends: [
      'eslint:recommended',
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "plugin:@typescript-eslint/strict"
  ],
  rules: {
  // ## Eslint rules
  // ### Eslint rules: eslint:recommended + not fix
  //'constructor-super': [2],
  //'for-direction': [2],
  //'getter-return': [2],
  //'no-async-promise-executor': [2],
  //'no-class-assign': [2],
  //'no-compare-neg-zero': [2],
  //'no-cond-assign': [2],
  //'no-const-assign': [2],
  //'no-constant-condition': [2],
  //'no-control-regex': [2],
  //'no-debugger': [2],
  //'no-dupe-args': [2],
  //'no-dupe-class-members': [2],
  //'no-dupe-else-if': [2],
  //'no-dupe-keys': [2],
  //'no-duplicate-case': [2],
  //'no-empty-character-class': [2],
  //'no-empty-pattern': [2],
  //'no-ex-assign': [2],
  //'no-fallthrough': [2],
  //'no-func-assign': [2],
  //'no-import-assign': [2],
  //'no-inner-declarations': [2],
  //'no-invalid-regexp': [2],
  //'no-irregular-whitespace': [2],
  //'no-loss-of-precision': [2],
  //'no-misleading-character-class': [2],
  //'no-new-symbol': [2],
  //'no-obj-calls': [2],
  //'no-prototype-builtins': [2],
  //'no-self-assign': [2],
  //'no-setter-return': [2],
  //'no-sparse-arrays': [2],
  //'no-this-before-super': [2],
  //'no-undef': [2],
  //'no-unexpected-multiline': [2],
  //'no-unreachable': [2],
  //'no-unsafe-finally': [2],
  //'no-unsafe-negation': [2],
  //'no-unsafe-optional-chaining': [2],
  //'no-unused-vars': [1],
  //'no-useless-backreference': [2],
  //'use-isnan': [2],
  //'valid-typeof': [2],
  //'no-case-declarations': [2],
  //'no-delete-var': [2],
  //'no-empty': [2],
  //'no-global-assign': [2],
  //'no-nonoctal-decimal-escape': [2],
  //'no-octal': [2],
  //'no-redeclare': [2],
  //'no-shadow-restricted-names': [2],
  //'no-useless-catch': [2],
  //'no-useless-escape': [2],
  //'no-with': [2],
  //'require-yield': [2],
  //'no-mixed-spaces-and-tabs': [2],

  // ### Eslint rules: eslint:recommended + fix
  //'no-extra-boolean-cast': [2],
  //'no-extra-semi': [2],
  //'no-regex-spaces': [2],
  //'no-unused-labels': [2],



      // ### Eslint rules: not eslint:recommended + not fix
      'array-callback-return': [2, { checkForEach: true }],
      'no-await-in-loop': [2],
      'no-constant-binary-expression': [2],
      //'no-constructor-return': [2],
      'no-duplicate-imports': [2],
      'no-new-native-nonconstructor': [2],
      'no-promise-executor-return': [2],
      'no-self-compare': [2],
      //'no-template-curly-in-string': [2],
      'no-unmodified-loop-condition': [2],
      'no-unreachable-loop': [2],
      'no-unused-private-class-members': [1],
      'no-use-before-define': [2],
      'require-atomic-updates': [2],
      //'accessor-pairs': [2],
      'block-scoped-var': [2],
      'camelcase': [2, { properties: 'always', allow: ['type_*'] }],
      //'class-methods-use-this': [2],
      //'complexity': [2],
      'consistent-return': [2],
      'consistent-this': [2],
      'default-case': [2],
      'default-case-last': [2],
      'default-param-last': [2],
      'func-name-matching': [2],
      'func-names': [2],
      'func-style': [2],
      'grouped-accessor-pairs': [2, 'getBeforeSet'],
      'guard-for-in': [2],
      // TODO: 'id-denylist': [2],
      // TODO: 'id-length': [2],
      // TODO: 'id-match': [2],
      'init-declarations': [2, 'always'],
      // TODO: 'max-classes-per-file': [2],
      // TODO: 'max-depth': [2],
      // TODO: 'max-lines': [2],
      // TODO: 'max-lines-per-function': [2],
      // TODO: 'max-nested-callbacks': [2],
      // TODO: 'max-params': [2],
      // TODO: 'max-statements': [2],
      'new-cap': [2],
      //'no-alert': [2],
      'no-array-constructor': [2],
      'no-bitwise': [2],
      'no-caller': [2],
      'no-console': [1],
      //'no-continue': [2],
      'no-empty-function': [1],
      'no-empty-static-block': [1],
      'no-eq-null': [2],
      'no-eval': [2],
      'no-extend-native': [2],
      //'no-implicit-globals': [2],
      'no-implied-eval': [2],
      // TODO: 'no-inline-comments': [2],
      //'no-invalid-this': [2],
      'no-iterator': [2],
      'no-label-var': [2],
      'no-labels': [2],
      'no-lone-blocks': [2],
      'no-loop-func': [2],
      'no-magic-numbers': [1, { ignore: [0] }],
      'no-mixed-operators': [2],
      'no-multi-assign': [2],
      'no-multi-str': [2],
      //'no-negated-condition': [2],
      'no-nested-ternary': [2],
      'no-new': [2],
      'no-new-func': [2],
      'no-new-object': [2],
      'no-new-wrappers': [2],
      'no-octal-escape': [2],
      'no-param-reassign': [2],
      'no-plusplus': [2],
      'no-proto': [2],
      // TODO: 'no-restricted-exports': [2],
      // TODO: 'no-restricted-globals': [2],
      // TODO: 'no-restricted-imports': [2],
      // TODO: 'no-restricted-properties': [2],
      // TODO: 'no-restricted-syntax': [2],
      'no-return-assign': [2],
      'no-return-await': [2],
      'no-script-url': [2],
      'no-sequences': [2],
      'no-shadow': [1],
      //'no-ternary': [2],
      'no-throw-literal': [2],
      //'no-undefined': [2],
      'no-underscore-dangle': [2],
      'no-unused-expressions': [2],
      'no-useless-call': [2],
      'no-useless-concat': [2],
      'no-useless-constructor': [2],
      'no-void': [2],
      'no-warning-comments': [1],
      'prefer-named-capture-group': [2],
      'prefer-promise-reject-errors': [2],
      'prefer-regex-literals': [2],
      'prefer-rest-params': [2],
      'prefer-spread': [2],
      'radix': [2],
      'require-await': [2],
      'require-unicode-regexp': [2],
      //'sort-keys': [2],
      'symbol-description': [2],
      //'vars-on-top': [2],
      //'line-comment-position': [2],
      // TODO: 'max-len': [2],
      // TODO: 'max-statements-per-line': [2],
      //'no-tabs': [2],

      // ### Eslint rules: not eslint:recommended + fix
      //'arrow-body-style': [2],
      //'capitalized-comments': [2],
      'curly': [2],
      'dot-notation': [2],
      'eqeqeq': [2],
      'logical-assignment-operators': [2, "always"],
      //'multiline-comment-style': [2],
      'no-confusing-arrow': [2],
      'no-div-regex': [2],
      'no-else-return': [2],
      'no-extra-bind': [2],
      'no-extra-label': [2],
      'no-floating-decimal': [2],
      'no-implicit-coercion': [2],
      'no-lonely-if': [2],
      'no-undef-init': [2],
      'no-unneeded-ternary': [2],
      'no-useless-computed-key': [2],
      'no-useless-rename': [2],
      'no-useless-return': [2],
      'no-var': [2],
      'object-shorthand': [2, "never"],
      'one-var': [2, "never"],
      'one-var-declaration-per-line': [2],
      'operator-assignment': [2, "always"],
      'prefer-arrow-callback': [2],
      'prefer-const': [1],
      'prefer-destructuring': [2],
      'prefer-exponentiation-operator': [2],
      'prefer-numeric-literals': [2],
      'prefer-object-has-own': [2],
      'prefer-object-spread': [2],
      'prefer-template': [2],
      'quote-props': [2, "as-needed"],
      //'sort-imports': [2],
      //'sort-vars': [2],
      'spaced-comment': [2],
      'strict': [2],
      'yoda': [2],
      'array-bracket-newline': [2, { "multiline": true, "minItems": 2 }],
      'array-bracket-spacing': [2, "never"],
      'array-element-newline': [2, { "multiline": true, "minItems": 2 }],
      'arrow-parens': [2, "always"],
      'arrow-spacing': [2],
      'block-spacing': [2],
      'brace-style': [2, "allman"],
      'comma-dangle': [2],
      'comma-spacing': [2],
      'comma-style': [2],
      'computed-property-spacing': [2],
      'dot-location': [2, "property"],
      'eol-last': [2],
      'func-call-spacing': [2],
      'function-call-argument-newline': [2, "consistent"],
      'function-paren-newline': [2, "multiline"],
      'generator-star-spacing': [2],
      'implicit-arrow-linebreak': [2],
      'indent': [2, "tab"],
      'jsx-quotes': [2, "prefer-double"],
      'key-spacing': [2, { "align": "colon" }],
      'keyword-spacing': [2],
      'linebreak-style': [2],
      //'lines-around-comment': [2],
      //'lines-between-class-members': [2],
      //'multiline-ternary': [2],
      'new-parens': [2],
      //'newline-per-chained-call': [2],
      //'no-extra-parens': [2],
      //'no-multi-spaces': [2],
      //'no-multiple-empty-lines': [2],
      'no-trailing-spaces': [2],
      'no-whitespace-before-property': [2],
      'nonblock-statement-body-position': [2],
      'object-curly-newline': [2, { "minProperties": 2 }],
      'object-curly-spacing': [2, "always"],
      'object-property-newline': [2],
      'operator-linebreak': [2, "before"],
      'padded-blocks': [2, "never"],
      // TODO: 'padding-line-between-statements': [2],
      'quotes': [2, "single", { "avoidEscape": true }],
      'rest-spread-spacing': [2],
      'semi': [2],
      'semi-spacing': [2],
      'semi-style': [2],
      'space-before-blocks': [2],
      'space-before-function-paren': [2, "never"],
      'space-in-parens': [2],
      'space-infix-ops': [2],
      'space-unary-ops': [2],
      'switch-colon-spacing': [2],
      'template-curly-spacing': [2],
      'template-tag-spacing': [2],
      //'unicode-bom': [2],
      'wrap-iife': [2, "inside"],
      'wrap-regex': [2],
      'yield-star-spacing': [2],


      // ## Typescript rules
      "@typescript-eslint/explicit-function-return-type": [2],
      "@typescript-eslint/explicit-member-accessibility": [2],
      "@typescript-eslint/explicit-module-boundary-types": [2],
      "@typescript-eslint/member-delimiter-style": [2, {
        multiline: {
          delimiter:'comma',
          requireLast:false
        },
        singleline: {
          delimiter:'comma',
          requireLast:false
        }
      }],
      "@typescript-eslint/method-signature-style": [2],
      "@typescript-eslint/no-redundant-type-constituents": [2],
      "@typescript-eslint/no-require-imports": [2],
      "@typescript-eslint/no-useless-empty-export": [2],

      'brace-style': [0, "allman"],
      "@typescript-eslint/brace-style": [2, "allman"],
      'comma-dangle': [0],
      "@typescript-eslint/comma-dangle": [2],
      'comma-spacing': [0],
      "@typescript-eslint/comma-spacing": [2],
      "default-param-last": [0],
      "@typescript-eslint/default-param-last": [2],
      "func-call-spacing": [0],
      "@typescript-eslint/func-call-spacing": [2],
      "init-declarations": [0, 'always'],
      "@typescript-eslint/init-declarations": [2, 'always'],
      "keyword-spacing": [0],
      "@typescript-eslint/keyword-spacing": [2],
      "no-dupe-class-members": [0],
      "@typescript-eslint/no-dupe-class-members": [2],
      "no-duplicate-imports": [0],
      "@typescript-eslint/no-duplicate-imports": [2],
      "no-loop-func": [0],
      "@typescript-eslint/no-loop-func": [2],
      'no-magic-numbers': [0, { ignore: [0] }],
      "@typescript-eslint/no-magic-numbers": [1, { ignore: [0] }],
      "no-redeclare": [0],
      "@typescript-eslint/no-redeclare": [2],
      "no-shadow": [0],
      "@typescript-eslint/no-shadow": [1],
      "no-unused-expressions": [0],
      "@typescript-eslint/no-unused-expressions": [2],
      "no-use-before-define": [0],
      "@typescript-eslint/no-use-before-define": [2],
      'object-curly-spacing': [0, "always"],
      "@typescript-eslint/object-curly-spacing": [2, "always"],
      'quotes': [0, "single", { "avoidEscape": true }],
      "@typescript-eslint/quotes": [2, "single", { "avoidEscape": true }],
      "no-return-await": [0],
      "@typescript-eslint/return-await": [2],
      "semi": [0],
      "@typescript-eslint/semi": [2],
      "space-before-blocks": [0],
      "@typescript-eslint/space-before-blocks": [2],
      "space-before-function-paren": [0, "never"],
      "@typescript-eslint/space-before-function-paren": [2, "never"],
      "space-infix-ops": [0],
      "@typescript-eslint/space-infix-ops": [2],
      "dot-notation": [0],
      "@typescript-eslint/dot-notation": [2],
      "no-array-constructor": [0],
      "@typescript-eslint/no-array-constructor": [2],
      "no-empty-function": [0],
      "@typescript-eslint/no-empty-function": [1],
      "no-extra-semi": [0],
      "@typescript-eslint/no-extra-semi": [2],
      "no-implied-eval": [0],
      "@typescript-eslint/no-implied-eval": [2],
      "no-loss-of-precision": [0],
      "@typescript-eslint/no-loss-of-precision": [2],
      "no-throw-literal": [0],
      "@typescript-eslint/no-throw-literal": [2],
      "no-unused-vars": [0],
      "@typescript-eslint/no-unused-vars": [1],
      "no-useless-constructor": [0],
      "@typescript-eslint/no-useless-constructor": [2],
      "require-await": [0],
      "@typescript-eslint/require-await": [2],

      "@typescript-eslint/no-floating-promises": [0],
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": [0],
  }
};
