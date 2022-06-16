<template>
  <div class="xtx-carousel" @mouseleave="enterFn" @mouseenter="leaveFn">
    <ul class="carousel-body">
      <li
        class="carousel-item"
        :class="{ fade: indexid === index }"
        v-for="(item, index) in list"
        :key="item.id"
      >
        <img :src="item.imgUrl" alt="" />
      </li>
    </ul>
    <a href="javascript:;" class="carousel-btn prev" @click="lastPage">
      <img class="icon_left" src="@/assets/icon/arrow-left-bold.png" />
    </a>
    <a href="javascript:;" class="carousel-btn next" @click="nextPage">
      <img class="icon_right" src="@/assets/icon/arrow-right-bold.png" />
    </a>
    <div class="carousel-indicator">
      <span
        @click="indexid = i - 1"
        v-for="i in list.length"
        :key="i"
        :class="{ active: indexid === i - 1 }"
      ></span>
    </div>
  </div>
</template>

<script>
import { ref, watch, onUnmounted } from 'vue'
export default {
  name: 'Carousel',
  props: {
    // 图片数据
    list: {
      type: Object,
      default: () => {},
    },
    // 轮播图每张切换的事件
    duration: {
      type: Number,
      default: 2,
    },
    // 是否开启轮播图
    autoplay: {
      type: Boolean,
      default: true,
    },
    // 点击翻几张
    page: {
      type: Number,
      default: 1,
    },
  },
  setup(props) {
    // 索引
    const indexid = ref(0)
    // 轮播
    const timer = ref(null)
    const TimeFn = () => {
      clearInterval(timer)
      // 每次执行前都清除上一次的定时器
      timer.value = setInterval(() => {
        indexid.value++
        // 如果超出界限就重新回填
        if (indexid.value > props.list.length - 1) {
          indexid.value = 0
        }
      }, props.duration * 1000)
    }
    // 点击+下一站图片
    const nextPage = () => {
      indexid.value += props.page
      if (indexid.value > props.list.length - 1) {
        indexid.value = 0
      }
    }
    // 点击+上一张图片
    const lastPage = () => {
      indexid.value -= props.page
      if (indexid.value < 0) {
        indexid.value = props.list.length - 1
      }
    }
    // 清除定时器
    const leaveFn = () => {
      // console.log('清除定时器')
      clearInterval(timer.value)
      // console.log(timer)
    }

    // 组件消耗，清理定时器
    onUnmounted(() => {
      clearInterval(timer.value)
    })
    // 开启定时器
    const enterFn = () => {
      if (props.list.length > 1 && props.autoplay) {
        // console.log('开启定时器')
        TimeFn()
      }
    }
    enterFn()
    watch(
      () => props.list,
      () => {
        if (props.list.length > 1 && props.autoplay) {
          TimeFn()
        }
      },
    )
    return { indexid, leaveFn, enterFn, nextPage, lastPage }
  },
}
</script>
<style scoped lang="less">
.xtx-carousel {
  width: 404px;
  height: 518px;
  background-color: white;
  // width: 100%;
  // height: 100%;
  position: relative;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
      list-style: none;
      margin: 0;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 8px;
        height: 8px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #c8ae88;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      .icon_left {
        width: 30px;
        height: 30px;
        margin-left: -5px;
      }
      .icon_right {
        width: 30px;
        height: 30px;
        margin-left: 5px;
      }
      &.prev {
        left: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &.next {
        right: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
