<!--
 * @Author       : YH000354
 * @Date         : 2022-04-01 18:18:07
 * @LastEditors  : YH000354
 * @LastEditTime : 2022-06-15 15:17:36
 * @FilePath     : \warmletheret_website\src\views\home\index.vue
-->
<template>
  <div class="home_page">
    <!-- 方案1 -->
    <!-- test -->
    <div class="background_image">
      <img
        src="@/assets/image/home_jewelry/items_Slides_A_04.png"
        id="jewelry_A04"
      />

      <img
        src="@/assets/image/home_jewelry/items_Slides_A_02.png"
        id="jewelry_A02"
      />
      <img
        src="@/assets/image/home_jewelry/items_Slides_A_08.png"
        id="jewelry_A08"
      />

      <img
        src="@/assets/image/home_jewelry/items_Slides_A_12.png"
        id="jewelry_A12"
      />

      <img
        src="@/assets/image/home_jewelry/items_Slides_A_14.png"
        id="jewelry_A14"
      />
      <img
        src="@/assets/image/home_jewelry/items_Slides_B_02.png"
        id="jewelry_B02"
      />
      <img
        src="@/assets/image/home_jewelry/items_Slides_B_05.png"
        id="jewelry_B05"
      />
      <img
        src="@/assets/image/home_jewelry/items_Slides_B_06.png"
        id="jewelry_B06"
        @mouseenter="mouseenterShow"
        @mousemove="mouseenterMove"
        @mouseleave="mouseenterHide"
      />
      <img
        src="@/assets/image/home_jewelry/items_Slides_B_08.png"
        id="jewelry_B08"
      />
      <img
        src="@/assets/image/home_jewelry/items_Slides_B_11.png"
        id="jewelry_B11"
      />
      <img
        src="@/assets/image/home_jewelry/items_Slides_B_13.png"
        id="jewelry_B13"
      />
      <img
        src="@/assets/image/home_jewelry/items_Slides_B_14.png"
        id="jewelry_B14"
      />
      <img
        src="@/assets/image/home_jewelry/items_Slides_B_17.png"
        id="jewelry_B17"
      />
      <img
        src="@/assets/image/home_jewelry/items_Slides_B_20.png"
        id="jewelry_B20"
      />
      <img
        src="@/assets/image/home_jewelry/items_Slides_B_23.png"
        id="jewelry_B23"
      />
      <img
        src="@/assets/image/home_jewelry/items_Slides_B_26.png"
        id="jewelry_B26"
      />
      <img
        src="@/assets/image/home_jewelry/items_Slides_B_27.png"
        id="jewelry_B27"
      />
    </div>
    <div
      ref="hoverShow"
      class="hover_show"
      v-if="hoverSwtich"
      :style="`left:${hoverShowX + 10}px;top:${hoverShowY + 10}px`"
    >
      <Swiper :list="list"></Swiper>
    </div>
  </div>
</template>

<script setup>
import Swiper from '../../../src/components/swiper/swiper.vue'
import { onMounted, ref, reactive, nextTick } from 'vue'
//获取dom

let hoverShow = ref(null)
let hoverShowX = ref(0)
let hoverShowY = ref(0)
let hoverSwtich = ref(false)
let list = ref([
  {
    imgUrl: new URL(
      '../../assets/image/hover_image/A04/A04_1.png',
      import.meta.url,
    ).href,
  },
  {
    imgUrl: new URL(
      '../../assets/image/hover_image/A04/A04_2.png',
      import.meta.url,
    ).href,
  },
  {
    imgUrl: new URL(
      '../../assets/image/hover_image/A04/A04_3.png',
      import.meta.url,
    ).href,
  },
])
function mouseenterShow(e) {
  hoverSwtich.value = true
}
function mouseenterMove(e) {
  let { x, y } = e
  hoverShowX.value = x
  hoverShowY.value = y
}
function mouseenterHide(e) {
  hoverSwtich.value = false
}
// 狗子函数mounted
console.log('hoverShow', hoverShow)
// return { hoverSwtich }
</script>

<style lang="less" scoped>
.home_page {
  height: 100%;
  width: 100%;
  .background_image {
    background: url('../../assets/image/WarmLetheret_Background.png') 100% 100%
      no-repeat;
    // background: url('../../assets/image/00_website_PC_Design.png') 100% 100%
    //   no-repeat;
    background-size: contain;
    height: 1080px;
    // height: 100vh;
    position: relative;
    overflow: hidden;
    img {
      cursor: pointer;
    }
    #jewelry_A02 {
      position: absolute;
      top: 1px;
      right: 370px;
    }
    #jewelry_A04 {
      position: absolute;
      top: 62px;
      left: 0px;
    }
    #jewelry_A08 {
      position: absolute;
      right: 1270px;
      bottom: 500px;
    }
    #jewelry_A12 {
      position: absolute;
      right: 0;
      bottom: 0;
    }
    #jewelry_A14 {
      position: absolute;
      right: 543px;
      bottom: 0;
    }
    #jewelry_B02 {
      position: absolute;
      top: 0px;
      left: 453px;
    }
    #jewelry_B05 {
      position: absolute;
      right: 0px;
      bottom: 636px;
    }
    #jewelry_B06 {
      position: absolute;
      right: 890px;
      bottom: 542px;
    }
    #jewelry_B08 {
      position: absolute;
      right: 498px;
      bottom: 540px;
    }
    #jewelry_B11 {
      position: absolute;
      left: 61px;
      bottom: 492px;
    }
    #jewelry_B13 {
      position: absolute;
      right: 262px;
      bottom: 378px;
    }
    #jewelry_B14 {
      position: absolute;
      right: 29px;
      bottom: 413px;
    }
    #jewelry_B17 {
      position: absolute;
      right: 1137px;
      bottom: 379px;
    }
    #jewelry_B20 {
      position: absolute;
      right: 621px;
      bottom: 288px;
    }
    #jewelry_B23 {
      position: absolute;
      right: 1385px;
      bottom: 0px;
    }
    #jewelry_B26 {
      position: absolute;
      right: 1066px;
      bottom: 0px;
    }
    #jewelry_B27 {
      position: absolute;
      right: 350px;
      bottom: 186px;
    }
  }
  .hover_show {
    position: fixed;
    // border: 1px solid black;
    // top: 0;
    // left: 100px;
    // width: 300px;
    // height: 600px;
    // /deep/ img {
    //   width: 300px;
    //   height: 400px;
    // }
  }
}
</style>
