<p align="center">
  <img src="https://raw.githubusercontent.com/vuefrag/vue-sync-refs/main/banner.svg" alt="vue-sync-refs" width="100%" />
</p>

<h1 align="center">vue-sync-refs</h1>

<p align="center">A Vue 3 composition API utility that synchronizes values between refs, keeping them in sync automatically. Changes to source propagate to targets with configurable options.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-sync-refs"><img src="https://img.shields.io/npm/v/vue-sync-refs.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-sync-refs"><img src="https://img.shields.io/npm/dm/vue-sync-refs.svg" alt="npm downloads" /></a>
</p>

## Installation

```bash
npm install vue-sync-refs
```

## Usage

```ts
import { syncRefs } from 'vue-sync-refs'
import { ref } from 'vue'

const source = ref('hello')
const target = ref('')

syncRefs(source, target)

console.log(target.value) // 'hello'

source.value = 'world'
setTimeout(() => {
  console.log(target.value) // 'world'
}, 100)
```

## License

MIT

Extracted from [VueUse](https://vueuse.org/) for standalone use.
