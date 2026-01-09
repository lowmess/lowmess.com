/**
 * The Alabaster theme. Converted from the definition at the following permalink:
 *
 * @link https://github.com/tonsky/vscode-theme-alabaster/blob/7e8e48c0f33022cd3cf5fec0114c307d63663e39/theme/alabaster-color-theme.json
 */
export const alabasterTheme = {
	$schema: "vscode://schemas/color-theme",
	name: "Alabaster",
	tokenColors: [
		{
			name: "Comments",
			scope: ["comment", "punctuation.definition.comment"],
			settings: {
				foreground: "#AA3731",
			},
		},
		{
			name: "Strings",
			scope: ["string", "string.regexp", "constant.other.symbol"],
			settings: {
				foreground: "#448C27",
			},
		},
		{
			name: "Strings: Escape Sequences",
			scope: "constant.character.escape",
			settings: {
				foreground: "#777777",
			},
		},
		{
			name: "Numbers, Characters",
			scope: [
				"constant.numeric",
				"constant.character",
				"constant.keyword",
				"constant",
			],
			settings: {
				foreground: "#7A3E9D",
			},
		},
		{
			name: "Global definitions",
			scope: "entity.name",
			settings: {
				foreground: "#325CC0",
			},
		},
		{
			name: "Punctuation",
			scope: "punctuation",
			settings: {
				foreground: "#777777",
			},
		},
		{
			name: "Invalid",
			scope: "invalid",
			settings: {
				background: "#96000014",
				foreground: "#660000",
			},
		},
		{
			name: "Extra: Diff Range",
			scope: ["meta.diff.range", "meta.diff.index", "meta.separator"],
			settings: {
				background: "#DDDDFF",
				foreground: "#434343",
			},
		},
		{
			name: "Extra: Diff From",
			scope: "meta.diff.header.from-file",
			settings: {
				background: "#FFDDDD",
				foreground: "#434343",
			},
		},
		{
			name: "Extra: Diff To",
			scope: "meta.diff.header.to-file",
			settings: {
				background: "#DDFFDD",
				foreground: "#434343",
			},
		},
	],
	colors: {
		"editor.background": "#F7F7F7",
		"editor.foreground": "#000",
		"editor.lineHighlightBackground": "#F0F0F0",
		"editor.selectionBackground": "#BFDBFE",
		"editor.selectionHighlightBackground": "#CFCFCF81",
		"panel.background": "#F0F0F0",
		"sideBar.background": "#F0F0F0",
		"editorGroupHeader.tabsBackground": "#F0F0F0",
		"activityBar.background": "#F0F0F0",
		"activityBar.foreground": "#007ACC",
		"editorLineNumber.foreground": "#9DA39A",
		"editorCursor.foreground": "#007ACC",
		"editor.findMatchBackground": "#FFBC5D",
		"editor.findMatchHighlightBackground": "#FFD86381",
		"statusBar.background": "#DDDDDD",
		"statusBar.foreground": "#474747",
		"statusBar.debuggingBackground": "#FFBC5D",
		"statusBar.debuggingForeground": "#000",
		"statusBar.noFolderBackground": "#7A3E9D",
		"statusBar.noFolderForeground": "#fff",

		"list.activeSelectionBackground": "#DDDDDD",
		"list.activeSelectionForeground": "#000000",
		"list.inactiveSelectionBackground": "#E6E6E6",
		"list.focusHighlightForeground": "#007ACC",
		focusBorder: "#CCCCCC",

		"quickInputList.focusForeground": "#000000",
		"quickInputList.focusBackground": "#DDDDDD",

		"editorSuggestWidget.selectedBackground": "#DDDDDD",
		"editorSuggestWidget.focusHighlightForeground": "#000000",
		"editorSuggestWidget.highlightForeground": "#000000",
		"editorSuggestWidget.selectedForeground": "#000000",

		"terminal.ansiWhite": "#BBBBBB",
		"terminal.ansiBlack": "#000000",
		"terminal.ansiBlue": "#325CC0",
		"terminal.ansiCyan": "#0083B2",
		"terminal.ansiGreen": "#448C27",
		"terminal.ansiMagenta": "#7A3E9D",
		"terminal.ansiRed": "#AA3731",
		"terminal.ansiYellow": "#CB9000",
		"terminal.ansiBrightWhite": "#FFFFFF",
		"terminal.ansiBrightBlack": "#777777",
		"terminal.ansiBrightBlue": "#007ACC",
		"terminal.ansiBrightCyan": "#00AACB",
		"terminal.ansiBrightGreen": "#60CB00",
		"terminal.ansiBrightMagenta": "#E64CE6",
		"terminal.ansiBrightRed": "#F05050",
		"terminal.ansiBrightYellow": "#FFBC5D",
	},
};

/**
 * The Rubber theme, a dark version of Alabaster that uses Plastic colors.
 * Converted from the definition at the following permalink:
 *
 * @link https://github.com/apust/vscode-rubber-theme/blob/15449acb4712ed67c7da75d7857d1da7097fbc9c/themes/rubber-color-theme.json
 */
export const rubberTheme = {
	$schema: "vscode://schemas/color-theme",
	name: "Rubber",
	type: "dark",
	tokenColors: [
		{
			name: "Comments",
			scope: ["comment", "punctuation.definition.comment"],
			settings: {
				foreground: "#E06C75",
			},
		},
		{
			name: "Strings",
			scope: ["string", "string.regexp", "constant.other.symbol"],
			settings: {
				foreground: "#98C379",
			},
		},
		{
			name: "Strings: Escape Sequences",
			scope: "constant.character.escape",
			settings: {
				foreground: "#737C8C",
			},
		},
		{
			name: "Numbers, Characters",
			scope: [
				"constant.numeric",
				"constant.character",
				"constant.keyword",
				"constant",
			],
			settings: {
				foreground: "#BF79C3",
			},
		},
		{
			name: "Global definitions",
			scope: "entity.name",
			settings: {
				foreground: "#61AFEF",
			},
		},
		{
			name: "Punctuation",
			scope: "punctuation",
			settings: {
				foreground: "#737C8C",
			},
		},
		{
			name: "Invalid",
			scope: "invalid",
			settings: {
				background: "#C62D4233",
				foreground: "#DF334A",
			},
		},
		{
			name: "Extra: Diff Range",
			scope: ["meta.diff.range", "meta.diff.index", "meta.separator"],
			settings: {
				background: "#61AFEF33",
				foreground: "#D2D6DB",
			},
		},
		{
			name: "Extra: Diff From",
			scope: "meta.diff.header.from-file",
			settings: {
				background: "#E06C7533",
				foreground: "#D2D6DB",
			},
		},
		{
			name: "Extra: Diff To",
			scope: "meta.diff.header.to-file",
			settings: {
				background: "#56B6C233",
				foreground: "#D2D6DB",
			},
		},
	],
	colors: {
		"editor.background": "#21252B",
		"editor.foreground": "#ABB2BF",
		"editor.lineHighlightBackground": "#A9B2C31A",
		"editor.selectionBackground": "#A9B2C31A",
		"editor.selectionHighlightBackground": "#A9B2C31A",
		"panel.background": "#181A1F",
		"sideBar.background": "#181A1F",
		"editorGroupHeader.tabsBackground": "#181A1F",
		"editorLineNumber.foreground": "#5F6672",
		"editorCursor.foreground": "#A9B2C3",
		"editor.findMatchBackground": "#d19a6680",
		"editor.findMatchHighlightBackground": "#D19A6640",
		"statusBar.background": "#21252B",
		"statusBar.foreground": "#A9B2C3",
		"statusBar.debuggingBackground": "#181A1F",
		"statusBar.debuggingForeground": "#A9B2C3",
		"statusBar.noFolderBackground": "#181A1F",
		"statusBar.noFolderForeground": "#A9B2C3",
		"titleBar.activeBackground": "#21252B",
		"titleBar.inactiveBackground": "#21252B",
		"activityBar.background": "#21252B",
		"activityBar.foreground": "#FFFFFF",
		"activityBarBadge.background": "#E06C75",
		"activityBarBadge.foreground": "#FFFFFF",
		"tab.activeForeground": "#D4D7D9",
		"tab.activeBackground": "#21252B",
		"tab.hoverBackground": "#A9B2C31A",
		"tab.inactiveBackground": "#181A1F",
		"tab.inactiveForeground": "#5F6672",

		"terminal.ansiBlack": "#21252B",
		"terminal.ansiBlue": "#61AFEF",
		"terminal.ansiCyan": "#56B6C2",
		"terminal.ansiGreen": "#98C379",
		"terminal.ansiMagenta": "#B57EDC",
		"terminal.ansiRed": "#E06C75",
		"terminal.ansiYellow": "#D19A66",
		"terminal.ansiWhite": "#A9B2C3",
		"terminal.ansiBrightBlack": "#5F6672",
		"terminal.ansiBrightBlue": "#007FFF",
		"terminal.ansiBrightCyan": "#08E8DE",
		"terminal.ansiBrightGreen": "#66FF00",
		"terminal.ansiBrightMagenta": "#8B00FF",
		"terminal.ansiBrightRed": "#E34234",
		"terminal.ansiBrightYellow": "#E5C07B",
		"terminal.ansiBrightWhite": "#D4D7D9",
	},
};
