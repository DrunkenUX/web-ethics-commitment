const env        = process.env.NODE_ENV === `prod`;
const htmlmin    = require("html-minifier");
const markdownIt = require("markdown-it");

let options = {
    html: true,
    linkify: true
};

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/img');
    
    eleventyConfig.setLibrary("md", markdownIt(options));

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