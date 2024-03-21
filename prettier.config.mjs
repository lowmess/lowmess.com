/** @type {import("prettier").Config} */
const config = {
	// printWidth: 80,
	// tabWidth: 2,
	useTabs: true,
	// semi: true,
	// singleQuote: false,
	// quoteProps: "as-needed",
	// jsxSingleQuote: false,
	// trailingComma: "all",
	// bracketSpacing: true,
	// jsxBracketSameLine: false,
	// arrowParens: "always",
	proseWrap: "never",
	// htmlWhitespaceSensitivity: "css",
	// vueIndentScriptAndStyle: false,
	// endOfLine: "lf",
	// embeddedLanguageFormatting: "auto",
	// singleAttributePerLine: false,

	plugins: ["prettier-plugin-astro"],
};

export default config;
