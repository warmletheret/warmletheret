export function debounce(fn: Function, wait = 50) {
  // 通过闭包缓存一个定时器 id
  let timer: any = null
  // 将 debounce 处理结果当作函数返回
  // 触发事件回调时执行这个返回函数
  return function (...args: any) {
    // this保存给context
    const context = this
    // 如果已经设定过定时器就清空上一次的定时器
    if (timer) clearTimeout(timer)

    // 开始设定一个新的定时器，定时器结束后执行传入的函数 fn
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}
// export function debounce(func: any, delay = 50) {
//   let timer: any = null
//   return function (...args) {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//       func.apply(this, args)
//     }, delay)
//   }
// }
