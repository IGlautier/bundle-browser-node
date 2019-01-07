const path = require("path");

module.exports = {
  entry: "./src/example.js",
  target: "node",
  output: {
    filename: "example.js",
    path: path.resolve(__dirname, "lib"),
    library: "nqm-lprl-utils",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  externals: { // An example of including an external module
    "lodash": {
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "lodash",
      root: "_",
    },
  },
};
