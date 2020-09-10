import merge from 'webpack-merge';
import baseConfig from './webpack.base';
import TerserPlugin from 'terser-webpack-plugin';

export default merge(baseConfig, {
  optimization: {
    minimize: true,
    minimizer:
      process.env.NODE_ENV === 'production' ? [new TerserPlugin()] : undefined,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
});
