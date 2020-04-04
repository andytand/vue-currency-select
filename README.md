# vue-currency-select

vue-currency-select is a reusable dropdown component for selecting currency, built with Vue 2. This project
heavily referencing [transferwise/tw-currency-select](https://github.com/transferwise/tw-currency-select),
with several differences in styles and framework used.

> Note: This package will be updated with Vue 3 after Vue 3 is on stable channel, with Vue 2 backward compatibility

## Install
```
npm install vue-currency-select
# or
yarn add vue-currency-select
```

## Setup
You can use this component as Vue plugin or component itself:

With plugin
```javascript
import vCurrencySelect from 'vue-currency-select';

Vue.use(vCurrencySelect);
```

With component
```html
// e.g., in MyComponent.vue,

<script>
import vCurrencySelect from 'vue-currency-select';

export default {
  components: {
    vCurrencySelect
  }
}
</script>
```

Either you load it as individual component or plugin, you can use this component as html tag:

```html
<v-currency-select></v-currency-select>
```

## Usage
By default, vue-currency-select provides a default currency set of **43 countries**. There are some
optional props that you can use to customize more of its behavior, like `v-model`, label and so on:

|  Prop Name   | Type   |  Description  | Example value |
| ------------ | ------ | ------------- | ------------- |
|   `label`    | `String` | Label for `<select>` element. `<label>` will not render if this prop is not provided | 'Select currency:' |
|   `options`  | `Array`  | Options array for `<v-select />`. If not provided, vue-currency-select will use its default options with 43 countries currency | [{ currency: 'MYR', country: 'MY' }, ...] |
|   `value`    | `String` | Value of selected currency. To be used with `v-model` | 'MYR' |
| `selectedOptionId` | `String` | HTML `id` attr for selected option input. Most likely you won't use it, this prop exists just to be compatible with vanilla js project, so you can use DOM operation to directly query selected option | 'option-id' |

## Example
With `vue`, default `options` and `v-model` two-way data binding (recommended)

```html
<template>
  <v-currency-select
    label="Select currency:"
    v-model="selectedCurrency"
    @input-"selectChanged"
  ></v-currency-select>
</template>

<script>
export default {
  data() {
    return {
      selectedCurrency: ''
    };
  },
  methods: {
    // do something after selectedCurrency changed
    selectChanged() {
      console.log(this.selectedCurrency);
    }
  }
}
</script>
```

With partial `vue`, vanilla js and default `options`

```html
<v-currency-select
  label="Select currency:"
  selected-option-id="selectedOptionId"
></v-currency-select>

<script>
  const selectedOption = document.querySelector('#selectedOptionId');
  console.log(selectedOption.innerText); // output selected option value
</script>
```

With partial `vue`, `JQuery` and default `options`
```html
<v-currency-select
  label="Select currency:"
  selected-option-id="selectedOptionId"
></v-currency-select>

<script>
  console.log($('#selectedOptionId').text()); // output selected option value
</script>
```

With custom `options` (not recommended)
```vue
<script>
// first you have to create an options array that meet this component requirement
const customOptions = [
  {
    currency: 'EXP',
    country: 'EX'
  },
  // ... and so on
];
</script>

<v-currency-select
  label="Select currency:"
  options="customOptions"
>
</v-currency-select>
```

Unless you have a good reason to use custom `options`, it's way better to stick with default `options`,
which is sufficient for most use case.

## Local development setup
To develop vue-currency-select, run the following commands:

> Please note that vue-currency-select uses the following version of `npm` & `node`:  
>- `npm` >= 6.13.4
>- `node` >= 12.16.1

```
npm install
# or
yarn install
```

### Compiles and hot-reloads for development
```
npm run serve
# or
yarn serve
```

### Compiles and minifies for production
```
npm run build
# or
yarn build
```

### Lints and fixes files
```
npm run lint
# or
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Packages
The main `npm` packages used in this project are the following:
- [vue.js v2](https://vuejs.org/)
- [vue-select](https://www.npmjs.com/package/vue-select)
- [currency-flags](https://www.npmjs.com/package/currency-flags)

## License

MIT © 2020 [Andy Tan](https://github.com/andytan0727) 
