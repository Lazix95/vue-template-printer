# vue-template-printer
Vue.js plugin for printing Vue templates

This Plugin is in development, please do not use it yet.

## Features
Vue-template-printer allows you to print Vue Components without opening new tab or rendering them anywhere.

This plugin currently works on Vue 2.x, version for Vue 3.x will be released soon!!

Just import component that you want to be printed and pass it as a first parameter, the second parameter 
is object of props that will be passed to your component.

```js
const props = {
  title: 'My Title',
  text: 'Example Text'
}

this.$print(myComponent, props);
```

## Quick start

    -Install package: `npm i vue-template-printer` or `yarn add vue-template-printer`


```js
import Printer from 'vue-template-printer';
Vue.use(Printer);
```




