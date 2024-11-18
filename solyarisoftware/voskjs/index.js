/**
 * index.js
 * voskJs package entry point
 */
const voskJs = require("./voskjs.js");
const audioutils = require("./lib/audioutils.js");

const publicFuntions = {
  ...voskJs,
  ...audioutils,
};

module.exports = publicFuntions;

// debug
if (require.main === module) {
  console.log(publicFuntions);
}
