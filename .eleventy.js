module.exports = function (eleventyConfig) {
    // Pass through any static assets, e.g., images
    eleventyConfig.addPassthroughCopy("src/assets");
  
    // Define influencers collection
    eleventyConfig.addCollection("influencers", function(collectionApi) {
      return require('./src/influencers.json');
    });
  
    return {
      dir: {
        input: "src",
        output: "_site"
      }
    };
  };
  