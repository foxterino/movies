import merge from 'webpack-merge';
import baseConfig from './webpack.base';

const config = merge(baseConfig, {
  devServer: {
    contentBase: '../build/client',
    hot: true,
    historyApiFallback: true,
  },
});

export default (_env: any, argv: any) => {
  if (argv.hot) {
    config.output!.filename = '[name].[hash].js';
  }

  return config;
};
