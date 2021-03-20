const path = require("path");
const { mdsvex } = require("mdsvex");
const svelte = require("svelte-preprocess");

module.exports = {
  extensions: [".svelte", ".svx"],
  preprocess: [
    svelte({
      scss: true,
      defaults: {
        script: "ts",
        style: "scss",
      },
    }),
    mdsvex(
      {
        layout: path.join(__dirname, "src", "layouts", "MdsvexLayout.svelte"),
      },
      svelte.typescript()
    ),
  ],
};
