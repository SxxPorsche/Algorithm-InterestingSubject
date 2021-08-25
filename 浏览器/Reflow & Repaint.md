回流：当渲染树中元素尺寸、结构或者某些属性发生变化时，浏览器重新渲染部分或全部页面的情况叫回流。
下列元素改变引发回流:

  getBoundingClientRect()
  scrollTo()
  scrollIntoView()
  clientTop、clientLeft、clientWidth、clientHeight
  offsetTop、offsetLeft、offsetWidth、offsetHeight
  scrollTop、scrollLeft、scrollWidth、scrollHeight
  getComputedStyle()
  
  可以使用GPU加速的CSS3属性，这些并不会触发reflow，因为是在单独图层处理
  CSS transform
  CSS opacity
  CSS filter


重绘：当页面中元素样式变化不会改变它在文档流中的位置时，
即不会使元素的几何属性发生变化，浏览器会将新样式赋给它并重新绘制页面(比如color、backgroundColor)

避免方法:
  减少table布局使用
  减少css表达式的使用(如calc())
  减少DOM操作，用documentFragment代替
  将元素设为display:none;操作结束后把它显示回来，因为display:none不会引发回流重绘
  避免频繁读取会引发回流重绘的元素，如果需要最好是缓存起来
  对复杂动画元素使用绝对定位，使它脱离文档流
  减少使用行内样式
