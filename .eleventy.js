module.exports = function(eleventyConfig) {
    let markdownIt = require("markdown-it");
    let options = {
        html: true,
        linkify: true
    };

    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/img');
    eleventyConfig.setLibrary("md", markdownIt(options));

    return {
        dir: {
            input: "src",
            output: "dist"
        },
        passthroughFileCopy: true
    }
};