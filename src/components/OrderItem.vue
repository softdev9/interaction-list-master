<template>
  <div>
    <h4>{{ order.title }}</h4>
    <p>{{ order.body }}</p>
  </div>
</template>

<script>

export default {
  name: "OrderItem",
  props: [
    'order'
  ],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
