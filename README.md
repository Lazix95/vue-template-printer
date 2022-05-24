# vue-template-printer
Vue.js plugin for printing Vue templates

## Features
This plugin currently works on Vue 2. x, version for Vue 3. x will be released soon!!

Vue-template-printer allows you to print Vue Components without opening a new tab or rendering them anywhere.

Just import the component that you want to be printed and pass it as a first parameter, the second parameter
is an object of props that will be passed to your component.

The component that you want to print should be "Pure", meaning it should not contain any connection to store, API, router, etc.
All data you want to use in that component should be passed through props.

```js
import myComponent from './components/myComponent.vue'

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




