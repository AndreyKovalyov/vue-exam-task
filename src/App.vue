<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background: #e1e1e1;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
.task {
  max-width: 900px;
  margin: 0 auto;
}
.task > * + * {
  margin-top: 20px;
}
.task-requirements > * + * {
  margin-top: 5px;
}
</style>
