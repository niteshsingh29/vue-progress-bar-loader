# vue-progress-bar-loader
This library helps you to quickly show a progress bar loading screen on your Vue application.
## Demo

Demo link :- 
https://jam.dev/c/01172b92-cd75-4df4-8701-0c8a7b2a3741
## Installation

```sh
npm install vue-progress-bar-loader
```

## Usage
Wrap the ProgressBar component around your loading content within your Vue component's DOM.

```sh
<script>
import ProgressBar from '../node_modules/vue-progress-bar-loader/src/components/progress-bar.vue'
</script>

<template>
  <main>
    <progress-bar />
  </main>
</template>
```


## Options

#### Bar Props

| Prop Name | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `duration` | `Number` | **Default** :  [5000ms] duration of animation|
| `height` | `String` | **Default** :  7px |
| `width` | `String` | **Default** :  60% |
| `backgroundColor` | `String` | **Default** :  green (You can pass hex values too) |
| `borderRadius` | `String` | **Default** :  10px |
| `loading` | `Boolean` | **Default** :  true |


#### Text Props

| Prop Name | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `messages`      | `Array` | **Default** ["text1", "text2", "text3"], **Max** - only 3 text|
| `textSize` | `String` | **Default** :  30px |
| `textColor` | `String` | **Default** :  black |
| `textFontFamily` | `String` | **Default** :  sans-serif |
    
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

- 🚀 [niteshsingh29](https://github.com/niteshsingh29) 


