import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function(eleventyConfig) {
	// Order matters, put this at the top of your configuration file.
  eleventyConfig.setInputDirectory("views");
  eleventyConfig.addPassthroughCopy("views/assets");
  eleventyConfig.addPassthroughCopy({ "views/_meta": "/" });
  eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/feed.xml",
		collection: {
			name: "post", // iterate over `collections.posts`
			limit: 10,     // 0 means no limit
		},
    metadata: {
			language: "en",
			title: "Javier's LiquidJS Demo Blog",
			subtitle: "This is a longer description about your blog.",
			base: "https://jhonkaman-liquidjs-portfolio.netlify.app/",
			author: {
				name: "Javier Alvarado",
				email: "", // Optional
			}
		}
  });
};
