<template>
    <pre class="error" >{{msg}}</pre>
</template>

<script>
export default {
  props: ["msg"]
};
</script>

<style>
.error {
  color: red;
}
</style>
