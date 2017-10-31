<template>
  <div id="app">
    <Header />
    <Form />
  </div>
</template>


<script>
import Header from './components/Header.vue'
import Form from './components/Form.vue'
export default {
  name: 'app2',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
          message: 'Hello Vue.js!'

    }
  },
  components: {
    Header,
    Form
  }

  
  

}
</script>
