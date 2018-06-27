const path = require('path');

module.exports = env => {
  const tutorial = env.TUTORIAL

  return ({
    entry: {
      parent: `./src/${tutorial}/components/parent.js`,
      child: `./src/${tutorial}/components/child.js`
    },
    output: {
      path: path.resolve(__dirname, `./src/${tutorial}/dist`),
      filename: '[name].js'
    }
  })
};