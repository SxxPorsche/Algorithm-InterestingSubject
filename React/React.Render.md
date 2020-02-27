# ReactDOM.render

### 1. 创建元素
```
// jsx
ReactDOM.render(
    <C />,
    document.getElementById('app')
)
// 转义后
ReactDOM.render(
  React.createElement(C, null), 
  document.getElementById('app')
);
```
元素树：
```
{
  $$typeof: Symbol(react.element)
  key: null
  props: {  // props有children属性, 描述子组件, 同样是元素
    children: [
      "文本",
      // 子元素
      {$$typeof: Symbol(react.element), type: "i", key: null, ref: null, props: {…}, …},
      {$$typeof: Symbol(react.element), type: class Children, props: {…}, …}
    ]
    className: 'container'
  }  
  ref: null
  type: 'div' // 标签类型
  _owner: null
  _store: {validated: false}
  _self: null
  _source: null
}
```

## 2. 创建对应类型的React组件
创建出来的元素被当作参数和指定的 DOM container 一起传进ReactDOM.render
接下来会调用一些内部方法, 接着调用了 instantiateReactComponent 生成组件

这个函数根据element的类型实例化对应的component. 当element的类型为:
    string： 说明是文本, 创建ReactDOMTextComponent;
    ReactElement： 说明是react元素, 进一步判断element.type的类型, 当为:
        string： DOM原生节点, 创建ReactDOMComponent
        函数或类： React组件, 创建ReactCompositeComponent

## 3. 开启批量更新以应对可能的setState
在调用 instantiateReactComponent 拿到组件实例后, 
React 接着调用了 batchingStrategy.batchedUpdates
并将组件实例当作参数执行批量更新(首次渲染为批量插入)
