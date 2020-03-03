#### 1. cloneElement 与 createElement 各是什么，有什么区别
___
首参不一样
```
React.cloneElement(
  element,
  [props],
  [...children]
)

React.createElement(
  type,
  [props],
  [...children]
)
```

#### 2. react hooks 实现一个计数器的组件
___
知识点：effect内部依赖变化频繁的变量
```
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1); // 在这不依赖于外部的 `count` 变量，每次取最新值
    }, 1000);
    return () => clearInterval(id);
  }, []); // 我们的 effect 不适用组件作用域中的任何变量

  return <h1>{count}</h1>;
}
```
#### 3. ReactDOM常用API
___
- 3.1 ReactDOM.render(element, container, callback)

在提供的 container 里渲染一个 React 元素，并返回对该组件的引用。  
如果 React 元素之前已经在 container 里渲染过，这将会对其执行更新操作，
并仅会在必要时改变 DOM 以映射最新的 React 元素。  
如果提供了可选的回调函数，该回调将在组件被渲染或更新之后被执行。

- 3.2 ReactDOM.unmountComponentAtNode(container)

从 DOM 中卸载组件，会将其事件处理器（event handlers）和 state 一并清除。  
如果组件被移除将会返回 true，如果没有组件可被移除将会返回 false

- 3.3 ReactDOM.createPortal(child, container)  

[Portal](https://react.docschina.org/docs/portals.html) 将提供一种将子节点渲染到 DOM 节点中的方式，该节点存在于 DOM 组件的层次结构之外。
