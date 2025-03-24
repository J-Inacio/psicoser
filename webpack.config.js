const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const isDev = process.env.NODE_ENV === "development";

module.exports = {
	entry: "./src/js/index.js",
	output: {
		filename: "main.min.js",
		path: path.resolve(__dirname, "./dist"),
		publicPath: "/",
	},
	mode: "production",
	devServer: {
		static: {
			directory: path.resolve(__dirname, "./dist"),
		},
		open: false,
		hot: true,
		liveReload: true
	},
	module: {
		rules: [
			// ========== CSS ==========
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},

			// ========== JavaScript ==========
			{
				test: /\.js$/,
				use: ["babel-loader"],
			},

			// ========== Imagens e Ícones ==========
			{
				test: /\.(png|jpe?g|gif|svg|webp|mp4|mov)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/[name].[hash][ext]",
				},
				use: [
					{
						loader: "image-webpack-loader", // Otimização de imagens
						options: {
							mozjpeg: { quality: 80 }, // Comprime JPEG
							webp: { quality: 75 }, // Converte para WebP
						},
					},
				],
			},
			// ========== Fontes ==========
			{
				test: /\.(woff|woff2|ttf|eot|otf)$/i,
				type: "asset/resource",
				generator: {
				  filename: "fonts/[name][ext]", // Salva em /dist/fonts/
				},
			  },
			

			// ========== Vídeos ==========
			{
				test: /\.(mp4|webm|mov)$/i,
				type: "asset/resource", // Webpack 5+ (substitui file-loader)
			},

			// ========== HTML ==========
			{
				test: /\.html$/i,
				use: "html-loader", // Processa assets no HTML
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "main.min.css",
		}),
		// Gera HTML com os scripts injetados
		new HtmlWebpackPlugin({
			filename: "index.html", // Nome do output
			port: 8080,
			template: "src/index.html",
			minify: true,
		}),
	],
};
