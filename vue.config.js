const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [".js", ".json", ".vue"],
      alias: {
        "@components": path.resolve(__dirname, "src/components")
      }
    }
  }
};
