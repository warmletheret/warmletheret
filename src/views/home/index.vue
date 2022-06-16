<!--
 * @Author       : YH000354
 * @Date         : 2022-04-01 18:18:07
 * @LastEditors  : YH000354
 * @LastEditTime : 2022-06-16 15:13:22
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
        @click="mouseenterShow"
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
    <transition name="bounce">
      <div
        ref="hoverShow"
        class="hover_show"
        v-show="hoverSwtich"
        :style="`left:${hoverShowX}px;top:${hoverShowY}px`"
      >
        <Swiper :list="list"></Swiper>
      </div>
    </transition>
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
  hoverSwtich.value = !hoverSwtich.value
  console.log('e', e)
  let { x, y, offsetWidth } = e.target
  hoverShowX.value = x + offsetWidth - 20
  hoverShowY.value = y
}
function mouseenterHide(e) {
  if (e.toElement.className === 'hover_show' || e.toElement.nodeName === 'IMG')
    return
  hoverSwtich.value = false
}
</script>

<style lang="less" scoped>
.home_page {
  height: 100%;
  width: 100%;
  // min-width: 1920px;
  // min-height: 1080px;
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

    #jewelry_A02 {
      position: absolute;
      top: 1px;
      right: 370px;
      width: 410px;
      height: 305px;
    }
    #jewelry_A04 {
      position: absolute;
      width: 454px;
      height: 301px;
      top: 63px;
      right: 1464px;
    }
    #jewelry_A08 {
      position: absolute;
      right: 1270px;
      bottom: 500px;
      width: 296px;
      height: 217px;
    }
    #jewelry_A12 {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 432px;
      height: 333px;
    }
    #jewelry_A14 {
      position: absolute;
      right: 543px;
      bottom: 0;
      width: 505px;
      height: 288px;
    }
    #jewelry_B02 {
      position: absolute;
      top: 0px;
      right: 1137px;
      width: 328px;
      height: 366px;
    }
    #jewelry_B05 {
      position: absolute;
      right: 0px;
      bottom: 636px;
      width: 498px;
      height: 251px;
    }
    #jewelry_B06 {
      position: absolute;
      right: 890px;
      bottom: 542px;
      width: 247px;
      height: 219px;
    }
    #jewelry_B08 {
      position: absolute;
      right: 498px;
      bottom: 540px;
      width: 282px;
      height: 222px;
    }
    #jewelry_B11 {
      position: absolute;
      right: 1587px;
      bottom: 492px;
      width: 271px;
      height: 192px;
    }
    #jewelry_B13 {
      position: absolute;
      right: 262px;
      bottom: 378px;
      width: 236px;
      height: 258px;
    }
    #jewelry_B14 {
      position: absolute;
      right: 29px;
      bottom: 413px;
      width: 233px;
      height: 224px;
    }
    #jewelry_B17 {
      position: absolute;
      right: 1137px;
      bottom: 379px;
      width: 203px;
      height: 212px;
    }
    #jewelry_B20 {
      position: absolute;
      right: 621px;
      bottom: 288px;
      width: 444px;
      height: 252px;
    }
    #jewelry_B23 {
      position: absolute;
      right: 1385px;
      bottom: 0px;
      width: 534px;
      height: 462px;
    }
    #jewelry_B26 {
      position: absolute;
      right: 1066px;
      bottom: 0px;
      width: 274px;
      height: 379px;
    }
    #jewelry_B27 {
      position: absolute;
      right: 350px;
      bottom: 186px;
      width: 273px;
      height: 192px;
    }
  }
  .hover_show {
    position: fixed;
    // border: 1px solid black;
    width: 504px;
    height: 518px;
    display: flex;
    flex-direction: row-reverse;
  }
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
