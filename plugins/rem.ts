export default defineNuxtPlugin(() => {
  if (process.client) {
    // 屏幕适应
    (function (win, doc) {
      if (!win.addEventListener) return
      function setFont() {
        let screenWidth = document.querySelector('html')!.offsetWidth
        const baseSize = 37.5
        const pageWidth = 750
        let fontSize = (baseSize * screenWidth) / pageWidth
        // if (fontSize > 50){
        //   fontSize = 50
        // }
        // if (screenWidth > 640){
        //   screenWidth = 640
        //   fontSize = 16
        // }
        document.querySelector('html')!.style.fontSize = `${fontSize}px`
      }
      setFont()
      setTimeout(() => {
        setFont()
      }, 300)
      doc.addEventListener('DOMContentLoaded', setFont, false)
      win.addEventListener('resize', setFont, false)
      win.addEventListener('load', setFont, false)
    })(window, document)
  }
})