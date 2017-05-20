<template>
  <div>
      <img src="~image/logo.png">
      <h1>{{message}}</h1>
  </div>
</template>

<script>
console.log('asd');
export default {
  data () {
      return {
          message : 'ola 4',
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
