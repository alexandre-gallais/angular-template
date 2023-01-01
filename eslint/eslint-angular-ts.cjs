// # Eslint *.ts rules	'
module.exports = {
    extends: [
        './eslint-ts.cjs',
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates"
    ],
    rules: {
		// ### Eslint rules: not eslint:recommended + not fix
    'new-cap': [2,
			{
				capIsNewExceptions: [
					'Attribute',
					'Component',
					'ContentChild',
					'ContentChildren',
					'Directive',
					'Host',
					'HostBinding',
					'HostListener',
					'Inject',
					'Injectable',
					'Input',
					'NgModule',
					'Optional',
					'Output',
					'Pipe',
					'Self',
					'SkipSelf',
					'ViewChild',
					'ViewChildren'
				]
			}
		],


    "@angular-eslint/directive-selector": [
      "error",
      {
      "type": "attribute",
      "prefix": "app",
      "style": "camelCase"
      }
    ],
    "@angular-eslint/component-selector": [
      "error",
      {
      "type": "element",
      "prefix": ["layout", "component"],
      "style": "kebab-case"
      }
    ],
    }
};
