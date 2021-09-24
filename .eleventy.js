const env        = process.env.NODE_ENV === `prod`;
const pluginSass = require("eleventy-plugin-sass");
const htmlmin    = require("html-minifier");
const markdownIt = require("markdown-it");

let mdOptions = {
    html: true,
    linkify: true
};

let sassPluginOptions = {
    outputDir: 'dist/css',
    remap: true
};

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/img');

    eleventyConfig.addPlugin(pluginSass, sassPluginOptions);

    eleventyConfig.setLibrary("md", markdownIt(mdOptions));

    eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
        if( outputPath && outputPath.endsWith(".html") ) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });

            return minified;
        }
    
        return content;
    });

    return {
        dir: {
            input: "src",
            output: "dist"
        },
        passthroughFileCopy: true,
        pathPrefix: env ? `/web-ethics-commitment/` : `/`
    }
};