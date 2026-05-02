<template>
  <input
    :id="id"
    type="text"
    :class="$attrs.class"
    :placeholder="placeholder"
    :alt="alt"
    :value="inputValue"
    @input="handleInput"
  >
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  placeholder: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const inputValue = computed(() => props.modelValue.join(', '))

const handleInput = (event) => {
  const tags = event.target.value
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean)

  emit('update:modelValue', tags)
}
</script>
