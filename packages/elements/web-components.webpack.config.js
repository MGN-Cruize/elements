const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/web-components/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'web-components.min.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css']
  }
}; 