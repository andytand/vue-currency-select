const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [".vue"],
      alias: {
        "@components": path.resolve(__dirname, "src/components")
      }
    }
  }
};
