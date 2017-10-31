<template>
  <div id="app">
    
  </div>
</template>


<script>
export default {
  name: 'app2',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
          message: 'Hello Vue.js!'

    }
  },

  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
  

}
</script>
