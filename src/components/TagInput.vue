<template>
  <input
    :id="id"
    type="text"
    :class="$attrs.class"
    :placeholder="placeholder"
    :alt="alt"
    :value="inputText"
    @input="handleInput"
  >
</template>

<script setup>
import { ref, watch } from 'vue'

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

const parseTags = (value) => value
  .split(',')
  .map((tag) => tag.trim())
  .filter(Boolean)

const tagsMatch = (first, second) => (
  first.length === second.length && first.every((tag, index) => tag === second[index])
)

const inputText = ref(props.modelValue.join(', '))

watch(
  () => props.modelValue,
  (tags) => {
    if (!tagsMatch(parseTags(inputText.value), tags)) {
      inputText.value = tags.join(', ')
    }
  }
)

const handleInput = (event) => {
  inputText.value = event.target.value
  emit('update:modelValue', parseTags(inputText.value))
}
</script>
