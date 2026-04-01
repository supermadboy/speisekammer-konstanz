module.exports = {
  plugins: [
    require("postcss-preset-env")({
      overrideBrowserslist: "last 2 versions",
    }),
  ],
};
