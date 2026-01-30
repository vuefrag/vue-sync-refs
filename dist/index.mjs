import { watch } from 'vue';

function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function syncRefs(source, targets, options = {}) {
  const {
    flush = "sync",
    deep = false,
    immediate = true
  } = options;
  const targetsArray = toArray(targets);
  return watch(
    source,
    (newValue) => targetsArray.forEach((target) => target.value = newValue),
    { flush, deep, immediate }
  );
}

export { syncRefs };
