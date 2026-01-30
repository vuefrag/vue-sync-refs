'use strict';

const vue = require('vue');

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
  return vue.watch(
    source,
    (newValue) => targetsArray.forEach((target) => target.value = newValue),
    { flush, deep, immediate }
  );
}

exports.syncRefs = syncRefs;
