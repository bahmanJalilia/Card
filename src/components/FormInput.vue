<template>
  
    <input class="input" v-bind:class="{'inline-input': inline, 'error-status': error }" :placeholder="placeholder" v-model="internalData" >

 </template>

 <script>
export default {
  props: ['placeholder', 'inline', 'data', 'error'],
  data: function() {
      return {
          internalData: '',
      }
  },
  watch: {
      'internalData': function(value, previous) {
        if(previous.length !== 3 && this.internalData.length === 2 && this.placeholder === "MM/YY") {
        this.internalData = this.internalData + '/'
      }
          this.$emit('changeData', this.internalData)
      }
  },
}

</script>

<style>
#card-number {
    width: 300px;
    height: 20px;
    padding: 0px 20px;
    border-radius: 5px;
}
.error-status {
    border: 1px solid red;
}


.inline-input {
    width: 48%;
}
.exp {
    margin-right: 2%;
}

</style>