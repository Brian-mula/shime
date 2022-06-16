<template>
  <div>
    <input
      :value="props.modelValue"
      @input="updateValue($event.target.value)"
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
      type="text"
      placeholder="Mulati"
    />
  </div>
</template>

<script setup>

const props = defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

function updateValue(value) {
  emit('update:modelValue', value)
}
</script>

<style lang="scss" scoped></style>
