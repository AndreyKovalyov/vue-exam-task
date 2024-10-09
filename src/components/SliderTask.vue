<template>
  <div class="task">
    <div class="task-requirements">
      <div>
        1.  Carousel должна принимать:
        <br>
          - items - Array, required
        <br>
          - index - number, default 0
      </div>
      <div>2. Carousel должна выводить элементы в виде li</div>
      <div>3. Отрисовка элемента слайдера должна указываться в родительском элемента (SliderTask.vue)</div>
      <div>4. Размер ширины слайдера для прокрутки должен высчитываться динамически от размера контейнера</div>
      <div>4. Внизу должно отображаться общее количество слайдов и номер текущего</div>
      <div>5. При первом и последнем слайде должны скрываться соотв. стрелочки для пролистывания</div>
      <div>6. Добавлять index в query параметр страницы, и при открытии страницы проставлять активный индекс, если он есть в query</div>
      <div>7. Перенести хранение и изменение состояния в Vuex модуль SliderModule.js</div>
    </div>
    <ToMenu />
    <Carousel
      :items="items"
      :index="index"
      @change-index="onChangeIndex"
    >
      <!-- <img :src="item.src" :alt="item.name" /> -->
    </Carousel>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import ToMenu from "./ToMenu.vue";
import Carousel from "./Carousel.vue";

@Component({
  components: {
    ToMenu, Carousel
  }
})
export default class InputTask extends Vue {
  items = [
    {
      id: 1,
      name: '1',
      src: require('@/assets/1.jpg'),
    },
    {
      id: 2,
      name: '2',
      src: require('@/assets/2.jpg'),
    },
    {
      id: 3,
      name: '3',
      src: require('@/assets/3.jpg'),
    },
  ]
  index = 0;

  onChangeIndex() {

  }
}
</script>

<style scoped>

</style>
