<template>
  <div style="margin-top: 10px;">
    <a 
        style="cursor: pointer;"
        @click="showOrder(user.id)"
    >
        {{ user.name }}
    </a>
  </div>
</template>

<script>

export default {
  name: "UserItem",
  props: [
    'user',
    'showOrder'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
