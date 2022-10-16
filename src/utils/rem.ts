/*
 * @Author: HopeNotDead 869132116@qq.com
 * @Date: 2022-10-16 23:18:59
 * @LastEditors: HopeNotDead 869132116@qq.com
 * @LastEditTime: 2022-10-16 23:55:40
 * @FilePath: \warmletheret\src\utils\rem.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const baseSize = 16
// 设置 rem 函数
function setRem() {
   console.log('window:---',window)
  // 当前页⾯宽度相对于 1920宽的缩放⽐例，可根据⾃⼰需要修改。
  const scale = document.documentElement.clientWidth / 1920
  // 设置页⾯根节点字体⼤⼩（“Math.min(scale, 2)” 指最⾼放⼤⽐例为2，可根据实际业务需求调整）
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
// 初始化
setRem()
// 改变窗⼝⼤⼩时重新设置 rem
window.onresize = function () {
  setRem()
}
