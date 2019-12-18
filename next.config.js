const bsconfig = require('./bsconfig.json');
const withCSS = require('@zeit/next-css');
const withTM = require("next-transpile-modules");

// Add all dependencies built with es6 target here, otherwise
// Nexts' babel plugin doesn't load it properly
const es6NodeModules = ["wonka"];

const config = {
  target: 'serverless',
  pageExtensions: ["jsx", "js", "bs.js"],
  transpileModules: ["bs-platform"].concat(es6NodeModules).concat(bsconfig["bs-dependencies"])
};

module.exports = withTM(withCSS(config));
