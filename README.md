<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>reduce-first</h1>
  <a href="https://npmjs.com/package/reduce-first">
    <img alt="NPM" src="https://img.shields.io/npm/v/reduce-first.svg">
  </a>
  <a href="https://github.com/bconnorwhite/reduce-first">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/reduce-first.svg">
  </a>
</div>

<br />

<blockquote align="center">Return early from reduce.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/reduce-first">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/reduce-first?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->
<div align="center">
  <h1>reduce-first</h1>
  <a href="https://npmjs.com/package/reduce-first">
    <img alt="npm" src="https://img.shields.io/npm/v/reduce-first.svg">
  </a>
  <a href="https://github.com/bconnorwhite/reduce-first">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/bconnorwhite/reduce-first.svg">
  </a>
  <a href="https://github.com/bconnorwhite/reduce-first">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/reduce-first?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Return early from reduce.

`.find()` returns the element from an array, and `.reduce()` loops over every element. `reduceFirst` combines these to return a transformation of the first item that returns a value.

## Installation

```bash
yarn add reduce-first
```

```bash
npm install reduce-first
```

## API

```ts
import reduceFirst from "reduce-first";

const list = ["a", "b", "c", "d", "e"];

reduceFirst(list, (value, index, arr) => {
  if(value === "c") {
    return `found ${value}`;
  }
}); // "found c"

reduceFirst(list, (value, index, arr) => {
  if(value === "x") {
    return `found ${value}`;
  }
}); // undefined
```

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/reduce-first.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects
- [jest](https://www.npmjs.com/package/jest): Delightful JavaScript Testing.


<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/reduce-first.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--BEGIN FOOTER-->

<br />

<h2>Dev Dependencies</h2>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.


<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/reduce-first.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->
