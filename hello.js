const CleanCSS = require("clean-css");
const htmlMinify = require("html-minifier").minify;
const fs = require("fs");
const path = require("path");

if (!fs.existsSync(path.join(__dirname, "dist"))) {
	console.log("creating dist directory \n");
	fs.mkdirSync(path.join(__dirname, "dist"));
	console.log("directory created... \n");
}

let htmlOptions = {
	removeComments: true,
	removeCommentsFromCDATA: true,
	removeCDATASectionsFromCDATA: true,
	collapseWhitespace: true,
	collapseBooleanAttributes: true,
	removeAttributeQuotes: true,
	removeRedundantAttributes: true,
	useShortDoctype: true,
	removeEmptyAttributes: true,
	removeEmptyElements: false,
	removeOptionalTags: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	minifyJS: true,
	minifyCSS: true,
};
const htmlFile = fs.readFileSync("./index.html", "utf-8");
console.log("minifying htlml...");
let htmlOutput = htmlMinify(htmlFile, htmlOptions);
fs.writeFileSync("./dist/index.html", htmlOutput);
console.log("html minified...");

const cssFile = fs.readFileSync("./style.css", "utf-8");
let cssOptions = {
	level: {
		1: {
			cleanupCharsets: true, // controls `@charset` moving to the front of a stylesheet; defaults to `true`
			normalizeUrls: true, // controls URL normalization; defaults to `true`
			optimizeBackground: true, // controls `background` property optimizations; defaults to `true`
			optimizeBorderRadius: true, // controls `border-radius` property optimizations; defaults to `true`
			optimizeFilter: true, // controls `filter` property optimizations; defaults to `true`
			optimizeFont: true, // controls `font` property optimizations; defaults to `true`
			optimizeFontWeight: true, // controls `font-weight` property optimizations; defaults to `true`
			optimizeOutline: true, // controls `outline` property optimizations; defaults to `true`
			removeEmpty: true, // controls removing empty rules and nested blocks; defaults to `true`
			removeNegativePaddings: true, // controls removing negative paddings; defaults to `true`
			removeQuotes: true, // controls removing quotes when unnecessary; defaults to `true`
			removeWhitespace: true, // controls removing unused whitespace; defaults to `true`
			replaceMultipleZeros: true, // contols removing redundant zeros; defaults to `true`
			replaceTimeUnits: true, // controls replacing time units with shorter values; defaults to `true`
			replaceZeroUnits: true, // controls replacing zero values with units; defaults to `true`
			roundingPrecision: false, // rounds pixel values to `N` decimal places; `false` disables rounding; defaults to `false`
			selectorsSortingMethod: "standard", // denotes selector sorting method; can be `'natural'` or `'standard'`, `'none'`, or false (the last two since 4.1.0); defaults to `'standard'`
			specialComments: "all", // denotes a number of /*! ... */ comments preserved; defaults to `all`
			tidyAtRules: true, // controls at-rules (e.g. `@charset`, `@import`) optimizing; defaults to `true`
			tidyBlockScopes: true, // controls block scopes (e.g. `@media`) optimizing; defaults to `true`
			tidySelectors: true, // controls selectors optimizing; defaults to `true`
		},
		2: {
			mergeAdjacentRules: true, // controls adjacent rules merging; defaults to true
			mergeIntoShorthands: true, // controls merging properties into shorthands; defaults to true
			mergeMedia: true, // controls `@media` merging; defaults to true
			mergeNonAdjacentRules: true, // controls non-adjacent rule merging; defaults to true
			mergeSemantically: false, // controls semantic merging; defaults to false
			overrideProperties: true, // controls property overriding based on understandability; defaults to true
			removeEmpty: true, // controls removing empty rules and nested blocks; defaults to `true`
			reduceNonAdjacentRules: true, // controls non-adjacent rule reducing; defaults to true
			removeDuplicateFontRules: true, // controls duplicate `@font-face` removing; defaults to true
			removeDuplicateMediaBlocks: true, // controls duplicate `@media` removing; defaults to true
			removeDuplicateRules: true, // controls duplicate rules removing; defaults to true
			removeUnusedAtRules: false, // controls unused at rule removing; defaults to false (available since 4.1.0)
			restructureRules: false, // controls rule restructuring; defaults to false
			skipProperties: [], // controls which properties won't be optimized, defaults to `[]` which means all will be optimized (since 4.1.0)
		},
	},
};
console.log("minifying css...");
let cssOutput = new CleanCSS(cssOptions).minify(cssFile);
console.log("css minified...");

console.log(cssOutput);
fs.writeFileSync("./dist/style.css", cssOutput.styles);

console.log(" all files minified");
