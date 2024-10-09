<template>
  <div class="slider">
    <div class="slider__container">
      <ul
        ref="sliderItems"
        class="slider-items"
        :style="sliderItemsStyle"
      >
        <template v-for="item in items">

        </template>
      </ul>

      <div
        class="slider-control slider-control_left"
        @click="$emit('change-index', index - 1)"
      >
        <img src="../assets/arrow-left.png" alt="arrow" />
      </div>
      <div
        class="slider-control slider-control_right"
        @click="$emit('change-index', index + 1)"
      >
        <img src="../assets/arrow-left.png" alt="arrow" />
      </div>

      <div class="slider-count">

      </div>
    </div>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Carousel extends Vue{
  @Prop()
  items;

  @Prop()
  index;

  get sliderItemsStyle() {
    return '';
  }
}
</script>

<style scoped>
.slider__container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 450px;
  width: 800px;
  overflow: hidden;
  border-radius: 8px;
}
.slider-control {
  filter: invert(1) drop-shadow(0 0 2px rgba(0, 0, 0, .5));
  width: 50px;
  height: 50px;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
}
.slider-control img {
  width: 100%;
  height: 100%;
}
.slider-control_left {
  left: 8px;
}
.slider-control_right {
  right: 8px;
}
.slider-control_right img {
  transform: rotateY(180deg);
}
.slider-control, .slider-count {
  position: absolute;
  z-index: 5;
}
.slider-count {
  display: inline-block;
  bottom: 8px;
  right: 16px;
  padding: 8px;
  font-size: 20px;
  color: #fff;
  background: rgba(0, 0, 0, .4);
  border-radius: 8px;
  z-index: 5;
}
.slider-items {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  transition: all ease-in-out 0.3s;
}
.slider-items li, .slider-items img {
  min-width: 100%;
  height: 100%;
}

</style>
