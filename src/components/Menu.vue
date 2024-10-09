<template>
  <div class="task">
    <ol>
      <li>
        <router-link to="/input-task">
          Задача 1
        </router-link>
      </li>
      <li>
        <router-link to="/slider-task">
          Задача 2
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.menu {
  display: flex;
}
</style>
