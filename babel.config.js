const presets = [
  '@babel/preset-typescript',
  [
    '@babel/preset-env',
    {
      modules: false
    }
  ],
  '@babel/preset-react'
];

const plugins = [
  'react-hot-loader/babel',
  '@babel/proposal-class-properties',
  '@babel/proposal-object-rest-spread',
  '@babel/plugin-transform-runtime',
  ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }]
];

module.exports = { presets, plugins };
