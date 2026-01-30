import type { Ref, WatchSource } from 'vue'
// Inlined from @vueuse/shared/utils
interface ConfigurableFlushSync {
  flush?: WatchOptions['flush']
}

import { watch } from 'vue'
// Inlined from @vueuse/shared/utils
function toArray<T>(value: T | readonly T[]): readonly T[]
function toArray<T>(value: T | T[]): T[]
function toArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value]
}


export interface SyncRefsOptions extends ConfigurableFlushSync {
  /**
   * Watch deeply
   *
   * @default false
   */
  deep?: boolean
  /**
   * Sync values immediately
   *
   * @default true
   */
  immediate?: boolean
}

/**
 * Keep target ref(s) in sync with the source ref
 *
 * @param source source ref
 * @param targets
 */
export function syncRefs<T>(
  source: WatchSource<T>,
  targets: Ref<T> | Ref<T>[],
  options: SyncRefsOptions = {},
) {
  const {
    flush = 'sync',
    deep = false,
    immediate = true,
  } = options

  const targetsArray = toArray(targets)

  return watch(
    source,
    newValue => targetsArray.forEach(target => target.value = newValue),
    { flush, deep, immediate },
  )
}
