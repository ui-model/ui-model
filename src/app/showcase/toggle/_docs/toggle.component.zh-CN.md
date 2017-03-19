# 开关逻辑 / 双态切换

很多交互逻辑，都是在两种状态之间切换，比如显示/隐藏、概要/详情、选中/不选等。这种逻辑的实现非常简单，但是用途非常广泛，以至于大多数界面中都会有它的一种或多种变体形式。

它的基本接口也非常简单：

```typescript
interface Toggle {
  isOn: boolean;
  turnOn(): void;
  turnOff(): void;
  toggle(): void;
  turnTo(isOn: boolean): void;
}
```

除此之外，我们还可以增加一些别名来让其更加语义化，如：

```typescript
interface Toggle {
  show(): void;
  hide(): void;
  open(): void;
  close(): void;
}
```
