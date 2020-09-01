const commonjs = require('@rollup/plugin-commonjs')
const nodePolyfills = require('rollup-plugin-node-polyfills');

module.exports = {
  extends: "@snowpack/app-scripts-react",
  scripts: {},
  plugins: [],
  devOptions: {
    open: 'none'
  },
  buildOptions: {
    baseUrl: `${process.env.PUBLIC_URL}/`,
  },
  installOptions: {
    // sourceMap: false,
    rollup: {
      plugins: [nodePolyfills(), commonjs()] // nodePolyfills must be before commonjs or we get an infinite recursion
    }
  }
}
