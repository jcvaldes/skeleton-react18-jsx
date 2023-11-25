
# Dependencias
```
npm i react react-dom
```

```
npm install -D @babel/core @babel/preset-env @babel/preset-react babel-loader babel-plugin-transform-class-properties css-loader html-loader html-webpack-plugin  sass-loader style-loader webpack webpack-cli webpack-dev-server
```

# .prettierrc

```
{
    "tabWidth": 2,
    "arrowParens": "avoid",
    "bracketSpacing": true,
    "endOfLine": "auto",
    "htmlWhitespaceSensitivity": "css",
    "jsxBracketSameLine": false,
    "jsxSingleQuote": false,
    "parser": "babel-ts",
    "printWidth": 80,
    "proseWrap": "preserve",
    "semi": true,
    "singleQuote": false,
    "trailingComma": "none",
    "useTabs": false
}
```

# .babelrc

```
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    "plugins": [
        "transform-class-properties"
    ]
}
```

# webpack.config.js

```
const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    port: 3000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      /* Choose only one of the following two: if you're using
        plain CSS, use the first one, and if you're using a
        preprocessor, in this case SASS, use the second one */
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};

```