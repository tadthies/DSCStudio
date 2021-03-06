import webpack from 'webpack';
import path from 'path'; // Provided by Node

const projectRoot = path.join(__dirname, '..', '..');
const sourceRoot = path.join(projectRoot, 'src');
const scriptRoot = path.join(sourceRoot, 'scripts');
const hbsRoot = path.join(sourceRoot, 'handlebars');

export default {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    target: 'web',
    entry: path.join(scriptRoot, "app"),
    output: {
        path: path.join(projectRoot, 'modules/DscStudio/engine/scripts'),
        publicPath: '/scripts',
        filename: 'bundle.js',
        library: 'DscStudio',
        libraryTarget: 'var'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [scriptRoot],
                loaders: ['babel']
            },
            {
                test: /\.hbs$/,
                include: [hbsRoot],
                loaders: ['raw-loader']
            }    
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src/scripts'],
        fallback: path.join(__dirname, 'node_modules'),
        alias: {
            'handlebars': 'handlebars/dist/handlebars.min.js',
            'office-ui-fabric-js': 'office-ui-fabric-js/dist/js/fabric.min.js'
        }
    },
    resolveLoader: {
        fallback: path.join(__dirname, 'node_modules'),
        alias: {
            'hbs': 'handlebars-loader'
        }
    }
};

