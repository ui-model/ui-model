# 多选逻辑

多选是指从M个条目中选取N个，这本身非常简单，但是当需要支持未决状态（是否部分选中 —— 既不是全选也不是全不选）时它就有了价值。

它的接口如下：
```typescript
interface MultiSelect<T> {
  options: T[];
  select(option: T): void;
  deselect(option: T): void;
  selection: T[];
  indeterminate: boolean;
}
```

除此之外，它还可以支持一些批量操作，如：

```typescript
interface MultiSelect<T> {
  selectAll(): void;
  deselectAll(): void;
  toggleAll(): void;
}
```
