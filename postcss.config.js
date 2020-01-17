const tailwindcss = require('tailwindcss')
const cssnano = require('cssnano')({ preset: 'default' })
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./public/index.html', './src/**/*.vue', './src/**/*.js'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  whitelistPatterns: [
    /-(leave|enter|appear)(|-(to|from|active))$/,
    /^(?!(|.*?:)cursor-move).+-move$/,
    /^router-link(|-exact)-active$/
  ]
})

module.exports = {
  plugins: [
    tailwindcss,
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    cssnano
  ]
}
