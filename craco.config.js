const path = require('path')
const alias = require('./aliases')

const resolvedAliases = Object.fromEntries(
  Object.entries(alias())
    .map(([key, value]) => [key, path.resolve(__dirname, value)])
)

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ]
    }
  },
  webpack: {
    alias: resolvedAliases
  },
  resolve: {
    alias: resolvedAliases
  }
}
