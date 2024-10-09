<template>
  <div class="task">
    <div>
      lastName:
      <input v-model="person.lastName" />
      <div class="error">ошибка</div>
    </div>

    <div class="task-requirements">
      <div>- Добавьте слежение за изменением фамилии</div>
      <div>- Слежение должно отрабатывать и при маунте компонента</div>
      <div>- Добавить computed переменную isEmpty, которая будет true, если в person.lastName пусто</div>
      <div>- Добавить условную отрисовку для .error при isEmpty = true</div>
      <div>- Добавить к .error класс notify и italic, если person.lastName = 'Sidorov'</div>
    </div>
    <ToMenu />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import ToMenu from "./ToMenu.vue";

@Component({
  components: {ToMenu}
})
export default class InputTask extends Vue{
  person = {
    firstName: '',
    lastName: 'Petrov',
  }
}
</script>

<style scoped>
.error {
  color: red;
}
.error.notify {
  color: cornflowerblue;
}
.error.italic {
  font-style: italic;
}
</style>
