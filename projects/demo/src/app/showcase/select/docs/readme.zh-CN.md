# 选择

很多界面逻辑，本质上都是从很多项中选取一项，选取后这一项具有特殊的用途和表现。这种特殊表现最常见的形式是高亮，但也可能是被展开或选中单选框等等。

于是，透过千变万化的外观，我们抽象出一个接口：

```typescript
interface Select<T> {
  select(item: T): void;
  selected(item: T): boolean;
  selection: T;
}
```

利用这个简单的接口，就可以自由实现丰富多彩的界面了。

但是最简单的方式下你甚至都不必使用`Select`逻辑 —— 浏览器内置的`select`控件本身就已经实现了这个功能。
