const path = require('path');

module.exports = {
    /**
     * Entry point for webpack to process the project.
     *  */ 
    entry: path.resolve(__dirname, 'src', 'main.tsx'),
    /**
     * Options for resolving module requests.
     * This config does not apply to resolving of loaders.
     */
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    /**
     * Configuration regarding modules.
     */
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    /**
     * Options about how webpack emits results.
     */
    output: {
        filename: 'main.js',
        /**
         * The output directory as **absolute path** (required).
         */
        path: path.join(__dirname, 'public'),
        publicPath: '/'
    },
    /**
     * webpack dev server config.
     */
    devServer: {
        port: 8080,
        open: true
    }
}