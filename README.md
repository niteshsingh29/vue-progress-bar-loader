# vue-progress-bar-loader

## Installation

```sh
npm i vue-progress-bar-loader
```

## Usage
Wrap the ProgressBar component around your loading content within your Vue component's DOM.

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import ProgressBar from '../node_modules/vue-progress-bar-loader/src/components/progress-bar.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <TheWelcome />
    <progress-bar />
  </main>
</template>

## Options
You can pass available props according to your choice modification.
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
    
  ## NITESH SINGH
