const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                exclude: /\.module\.css$/i, // Исключаем файлы с .module.css
                use: [
                    'style-loader',
                    'css-loader', // Для обычных CSS файлов без модулей
                ],
            },
            {
                test: /\.module\.css$/i, // Обрабатываем только файлы с .module.css
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]', // Настройка имен классов
                                exportLocalsConvention: 'camelCase', // Включение camelCase
                            }
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i, // Для обычных Sass файлов
                exclude: /\.module\.(s[ac]ss)$/i, // Исключаем файлы с .module.scss и .module.sass
                use: [
                    'style-loader', // Добавляет стили в DOM
                    'css-loader',   // Переводит CSS в CommonJS
                    'sass-loader',  // Компилирует Sass в CSS
                ],
            },
            {
                test: /\.module\.(s[ac]ss)$/i, // Для Sass Modules (файлы с .module.scss и .module.sass)
                use: [
                    'style-loader', // Добавляет стили в DOM
                    {
                        loader: 'css-loader',
                        options: {
                            //modules: true,  Включаем CSS Modules только для .module.scss файлов
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]', // Настройка имен классов
                                exportLocalsConvention: 'camelCase', // Включение camelCase
                            }
                        },
                    },
                    'sass-loader',  // Компилирует Sass в CSS
                ],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: true,
        hot: true,
        port: 3000,
        historyApiFallback: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};
