const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Punto de entrada
  output: {
    filename: "bundle.js", // Nombre del archivo de salida
    path: path.resolve("dist"), // Ruta de salida
    publicPath: "/" // Ruta base para todos los assets
  },
  resolve: {
    extensions: [".js", ".jsx"] // Extensiones de archivos que webpack resolverá automáticamente
  },
  devServer: {
    port: 3000, // Puerto del servidor de desarrollo
    open: true // Abre automáticamente el navegador
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Regla para archivos JS y JSX
        exclude: /node_modules/, // Excluir archivos en node_modules
        use: "babel-loader" // Utilizar babel para transpilar
      },
      {
        test: /\.html$/, // Regla para archivos HTML
        use: "html-loader" // Utilizar html-loader para procesar HTML
      },
      /* Choose only one of the following two: if you're using
        plain CSS, use the first one, and if you're using a
        preprocessor, in this case SASS, use the second one */
      {
        test: /\.css$/, // Regla para archivos CSS
        use: ["style-loader", "css-loader"] // Utilizar style-loader y css-loader
      },
      {
        test: /\.scss$/, // Regla para archivos SCSS
        use: ["style-loader", "css-loader", "sass-loader"] // Utilizar style-loader, css-loader y sass-loader
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html", // Archivo de plantilla HTML
      filename: "./index.html" // Nombre del archivo HTML de salida
    })
  ]
};
