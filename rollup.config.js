const typescript = require("@rollup/plugin-typescript");

module.exports = {
  input: 'src/index.ts',
  output: [{
    dir: 'dist',
    format: 'esm'
  }],
  plugins: [typescript()]
};