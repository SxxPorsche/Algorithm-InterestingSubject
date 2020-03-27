BFC

一、BFC的概念？
BFC（块级格式上下文）：它是页面中的一块渲染区域，有自己的渲染规则，
决定了其子元素如何布局，以及和其他元素之间的关系和作用


二、BFC的原理？

内部的Box会在垂直方向，一个接一个地放置
Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反
BFC的区域不会与float box重叠
BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素
计算BFC的高度时，浮动元素也参与计算

三、如何创建BFC？

根元素，即HTML元素
float的值不为none
overflow的值不为visible
display的值为inline-block、table、table-cell、table-caption
position的值为absolute或fixed
弹性元素（display为 flex 或 inline-flex元素的直接子元素）
网格元素（display为 grid 或 inline-grid 元素的直接子元素）

四、BFC的使用场景？

去除边距重叠现象
清除浮动（让父元素的高度包含子浮动元素）
避免某元素被浮动元素覆盖
避免多列布局由于宽度计算四舍五入而自动换行
