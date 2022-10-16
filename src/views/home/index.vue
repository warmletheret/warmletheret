<!--
 * @Author       : YH000354
 * @Date         : 2022-04-01 18:18:07
 * @LastEditors: HopeNotDead 869132116@qq.com
 * @LastEditTime: 2022-10-17 00:40:42
 * @FilePath     : \warmletheret_website\src\views\home\index.vue
-->
<template>
  <div class="home_page">
    <header>
      <div class="stockist" @click="leftSideSwitch = true">STOCKIST</div>
      <div class="logo">
        <img src="@/assets/image/Logo.svg" />
      </div>
      <div class="wl_info">W.L INFO</div>
    </header>
    <div class="main">
      <img src="@/assets/image/home_show.gif" />
    </div>
    <div class="left_side" :style="leftSideSwitch ? 'left:0' : 'left:-630px'">
      <div class="side_title" @click="leftSideSwitch = false">
        <span>X</span>
        <span>STOCKIST</span>
      </div>
      <!--上海 -->
      <div class="province_item">
        <div class="province_title">SHANGHAI</div>
        <div class="store_item">
          <div class="store_name">PLAZA 66</div>
          <div class="store_address">
            <span>ADDRESS: </span>
            <span>Room.4001, 40/F, Plaza 66, No.1266 Nanjing West Rd.</span>
          </div>
          <div class="store_address">
            <span>HOURS: </span>
            <span>10:00 - 22:00</span>
          </div>
        </div>
        <div class="store_item">
          <div class="store_name">PLAZA 66</div>
          <div class="store_address">
            <span>ADDRESS: </span>
            <span>Room.4001, 40/F, Plaza 66, No.1266 Nanjing West Rd.</span>
          </div>
          <div class="store_address">
            <span>HOURS: </span>
            <span>10:00 - 22:00</span>
          </div>
        </div>
        <div class="store_item">
          <div class="store_name">PLAZA 66</div>
          <div class="store_address">
            <span>ADDRESS: </span>
            <span>Room.4001, 40/F, Plaza 66, No.1266 Nanjing West Rd.</span>
          </div>
          <div class="store_address">
            <span>HOURS: </span>
            <span>10:00 - 22:00</span>
          </div>
        </div>
        <div class="store_item">
          <div class="store_name">PLAZA 66</div>
          <div class="store_address">
            <span>ADDRESS: </span>
            <span>Room.4001, 40/F, Plaza 66, No.1266 Nanjing West Rd.</span>
          </div>
          <div class="store_address">
            <span>HOURS: </span>
            <span>10:00 - 22:00</span>
          </div>
        </div>
      </div>
      <!--北京 -->
      <div class="province_item">
        <div class="province_title">BEIJING</div>
        <div class="store_item">
          <div class="store_name">PLAZA 66</div>
          <div class="store_address">
            <span>ADDRESS: </span>
            <span>Room.4001, 40/F, Plaza 66, No.1266 Nanjing West Rd.</span>
          </div>
          <div class="store_address">
            <span>HOURS: </span>
            <span>10:00 - 22:00</span>
          </div>
        </div>
        <div class="store_item">
          <div class="store_name">PLAZA 66</div>
          <div class="store_address">
            <span>ADDRESS: </span>
            <span>Room.4001, 40/F, Plaza 66, No.1266 Nanjing West Rd.</span>
          </div>
          <div class="store_address">
            <span>HOURS: </span>
            <span>10:00 - 22:00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      leftSideSwitch: false
    }
  }
}
</script>

<style lang="less" scoped>
.home_page {
  ::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
  }
  position: relative;
  height: 100%;
  width: 100%;
  font-size: 16px;
  background-color: #fbfbfb;
  header {
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // align-items: center;
    padding: 32px 30px 0;
    .stockist {
      padding-top: 2px;
      color: #b5b5b5;
    }
    .logo {
      z-index: 2;
      height: 284px;
      img {
        height: 284px;
        max-height: 284px;
      }
    }
    .wl_info {
      padding-top: 2px;
      color: #b5b5b5;
    }
  }
  .main {
    z-index: 0;
    margin-top: -16px;
    display: flex;
    justify-content: center;
    img {
      width: 720px;
      height: 720px;
    }
  }
  .left_side {
    position: absolute;
    // left: -630px;
    // left: 0px;
    top: 0;
    width: 570px;
    max-height: 100%;
    background-color: #e9eae0;
    padding: 34px 30px;
    overflow-y: scroll;
    transition: all 0.5s ease-in-out;
    .side_title {
      :nth-child(1) {
        margin-right: 20px;
      }
      padding-bottom: 45px;
    }
    .province_item {
      .province_title {
        font-size: 34px;
        margin-bottom: 22px;
      }
      .store_item {
        margin-bottom: 40px;
        .store_name {
          font-size: 18px;
          margin-bottom: 8px;
        }
        .store_address {
          font-size: 18px;
          margin-bottom: 8px;
          :nth-child(1) {
            color: #949aaf;
          }
        }
        // .store_hours {
        //   font-size: 18px;
        //   margin-bottom: 8px;
        //   :nth-child(1) {
        //     color: #949aaf;
        //   }
        // }
      }
    }
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
