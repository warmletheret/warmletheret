const baseSize = 16
// 设置 rem 函数
function setRem() {
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
