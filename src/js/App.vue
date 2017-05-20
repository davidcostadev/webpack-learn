<template>
  <div>
      <h1>{{message}}</h1>
  </div>
</template>

<script>
export default {
  data () {
      return {
          message : 'ola',
      }
  }
}
</script>

<style lang="scss">
    body {
        h1 {
            color: red
        }
    }
</style>
