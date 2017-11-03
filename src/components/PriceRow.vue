<template>
     <div class="price-row">
            <div class="price-label" v-bind:class="{'price-bold': bold }">{{ label }}</div>
            <div class="price-amount" v-bind:class="{'price-bold': bold }">{{ amount }} USD</div>
     </div>
 </template>

 <script>
export default {
  props: ["label", "amount", "bold"]
};
</script>

<style>
.price-row {
  float: none;
  clear: both;
  padding: 15px 0;
  font-family: "Courier New", Courier, monospace;
}
.price-label {
  float: left;
}
.price-amount {
  float: right;
}
.price-bold {
  font-weight: bold;
}

@media only screen and (max-width: 959px) {
  .price-row {
    float: none;
    clear: both;
    padding: 15px 0;
    font-family: "Courier New", Courier, monospace;
  }
  .price-label {
    float: left;
  }
  .price-amount {
    float: right;
  }
  .price-bold {
    font-weight: bold;
  }
}
</style>