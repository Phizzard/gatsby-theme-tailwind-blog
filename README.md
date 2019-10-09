# gatsby-theme-tailwind-blog

This is a fairly basic gatsby blog theme, similar in scope to the official gatsby blog theme but more opionated using tailwindcss and emotion for styling.

## Installation

1 - Install theme
```sh
npm install --save @phizzard/gatsby-theme-tailwind-blog
```
or
```sh
yarn add @phizzard/gatsby-theme-tailwind-blog
```

2 - Add theme to `gatsby-config.js`
```js
module.exports = {
  plugins: [
    ...
    {
      resolve: "@phizzard/gatsby-theme-tailwind-blog",
      options: {
        contentPath: "content/posts",
        assetsPath: "content/assets",
        basePath: "/",
      },
    },
    ...
  ],
}
```

3 - Init `tailwind.js` file
```sh
npx tailwind@1.0.0-alpha.10 init
```
```sh
yarn tailwind@01.0.0-alpha.10 init
```