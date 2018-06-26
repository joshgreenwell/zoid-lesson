const path = require('path');

module.exports = env => {
  const challenge = env.CHALLENGE

  return ({
    entry: {
      parent: `./src/${challenge}/components/parent.js`,
      child: `./src/${challenge}/components/child.js`
    },
    output: {
      path: path.resolve(__dirname, `./src/${challenge}/dist`),
      filename: '[name].js'
    }
  })
};