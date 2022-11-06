/*
module.exports = {
  "stories": [
    "../src/!**!/!*.stories.mdx",
    "../src/!**!/!*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}*/

const path = require("path");
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
         name: '@storybook/addon-postcss',
         options: {
        postcssLoaderOptions: {
             implementation: require('postcss'),
               },
       },
   },
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (config) => {
    /**
     * Add support for alias-imports
     * @see https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
     */
    config.resolve.alias = {
        ...config.resolve?.alias,
        '@pages': path.resolve(__dirname, '../src/pages'),
        '@styles': path.resolve(__dirname, '../src/styles'),
        '@components': path.resolve(__dirname, '../src/components'),
        '@enums': path.resolve(__dirname, '../src/enums'),
        '@menus': path.resolve(__dirname, '../src/menus'),
        '@mocks': path.resolve(__dirname, '../src/mocks'),
        '@hooks': path.resolve(__dirname, '../src/hooks'),
        '@constants': path.resolve(__dirname, '../src/constants'),
        '@functions': path.resolve(__dirname, '../src/functions'),
        '@type': path.resolve(__dirname, '../src/type'),
        '@contexts': path.resolve(__dirname, '../src/contexts'),
        '@services': path.resolve(__dirname, '../src/services'),
    };


      /**
     * Fixes font import with /
     * @see https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
     */
    config.resolve.roots = [
      path.resolve(__dirname, '../public'),
      'node_modules',
    ];
  /*  config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [require("tailwindcss"), require("autoprefixer")],
            },
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });*/
    return config;
  },
};
