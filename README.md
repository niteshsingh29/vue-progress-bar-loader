# vue-progress-bar-loader
This library helps you to quickly show a progress bar loading screen on your Vue application.

## Installation

```sh
npm install vue-progress-bar-loader
```

## Usage
Wrap the ProgressBar component around your loading content within your Vue component's DOM.

```sh
<script setup>
import TheWelcome from './components/TheWelcome.vue'
import ProgressBar from '../node_modules/vue-progress-bar-loader/src/components/progress-bar.vue'
</script>

<template>
  <header />

  <main>
    <TheWelcome />
    <progress-bar />
  </main>
</template>
```

## Options
You can pass available props according to your choice modification.

```sh
    props: {
        height: {
            type: String,
        },
        width: {
            type: String,
        },
        backgroundColor: {
            type: String,
        },
        borderRadius: {
            type: String,
        },
        loading: {
            type: Boolean,
        },
    },
```
    
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Thanks for Reading
