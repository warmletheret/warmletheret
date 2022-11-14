/*
 * @Author: HopeNotDead 869132116@qq.com
 * @Date: 2022-11-13 22:47:46
 * @LastEditors: HopeNotDead 869132116@qq.com
 * @LastEditTime: 2022-11-14 16:40:47
 * @FilePath: \warmletheret\src\assets\js\flexable.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
;(function flexible(window, document) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1 // adjust body font size
  console.log('document.body.style.fontSize', document.body.style.fontSize)

  function setBodyFontSize() {
    if (docEl.clientWidth < 800) {
      if (document.body) {
        document.body.style.fontSize = 12 * dpr + 'px'
      } else {
        document.addEventListener('DOMContentLoaded', setBodyFontSize)
      }
    }
  }
  setBodyFontSize() // set 1rem = viewWidth / 10

  function setRemUnit() {
    console.log('document.body.style.fontSize1', document.body.style.fontSize)
    console.log(' docEl.style.fontSize1', docEl.style.fontSize)
    if (docEl.clientWidth < 800) {
      var rem = docEl.clientWidth / 10
      docEl.style.fontSize = rem + 'px'
      console.log(' docEl.style.fontSize2', docEl.style.fontSize)
    } else {
      docEl.style.fontSize = '16px'
      // document.body.style.fontSize = '16px'
    }
  }

  setRemUnit() // reset rem unit on page resize

  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  }) // detect 0.5px supports

  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
})(window, document)
