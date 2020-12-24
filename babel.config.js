module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',

    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-async-generator-functions',
    '@babel/plugin-proposal-optional-chaining',
  ],
  env: {
    test: {
      presets: [
        '@babel/preset-react',
        '@babel/preset-env',
        '@babel/preset-typescript',
      ],
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-async-generator-functions',
        '@babel/plugin-proposal-optional-chaining',
      ],
    },
  },
};
