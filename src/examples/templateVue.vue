<template>
  <div>
   <h1> Vue Printer Template </h1>
    <div>{{ test }}</div>
  </div>
</template>

<script>
export default {
  name: 'template-example',
  props: {
    test: {
      type: String,
      default: ''
    }
  }
}
</script>
