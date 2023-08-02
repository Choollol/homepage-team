module.exports = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      '@babel/plugin-syntax-jsx'
      // Other plugins as needed
    ]
  };
  