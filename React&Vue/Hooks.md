### 1. react hooks 实现一个计数器的组件
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

### 2. useAuth & usePermission
