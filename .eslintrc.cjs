/** @type {import("eslint").Config} */
module.exports = {
	env: { es6: true, node: true, browser: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:astro/recommended",
		"plugin:astro/jsx-a11y-recommended",
		"prettier",
	],
	plugins: ["@typescript-eslint"],
	overrides: [
		{
			// Define the configuration for `.astro` file.
			files: ["*.astro"],
			// Allows Astro components to be parsed.
			parser: "astro-eslint-parser",
			// Parse the script in `.astro` as TypeScript by adding the following configuration.
			// It's the setting you need when using TypeScript.
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
			// Parse TypeScript in client-side scripts.
			processor: "astro/client-side-ts",
		},
	],
};
