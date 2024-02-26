/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	// parser: 'babel-parser',
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-prettier/skip-formatting',
		'plugin:storybook/recommended',
		'plugin:storybook/recommended',
		'plugin:storybook/recommended',
		'plugin:storybook/recommended',
		'plugin:storybook/recommended',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		// "no-console": "off",
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
			},
		],
	},
};
