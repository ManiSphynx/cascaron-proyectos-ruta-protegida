const { resolve } = require('path');
module.exports = {
  entry: {
    app: './src/infrastructure/app/index.ts',
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_module/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'node',
  mode: 'production',
};
