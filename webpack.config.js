const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/js/index.js",
	output: {
		filename: "main.min.js",
		path: path.resolve(__dirname, "./dist"),
		publicPath: "/",
	},
	mode: "development",
	devServer: {
		static: {
			directory: path.resolve(__dirname, "./dist"),
		},
		open: false,
		hot: true,
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
			filename: "index.css",
		}),
		// Gera HTML com os scripts injetados
		new HtmlWebpackPlugin({
			// template: "./src/index.html", // Arquivo fonte HTML
			filename: "bundle.html", // Nome do output
			port: 8080,
			template: "src/index.html",
			minify: false,
		}),
	],
};
