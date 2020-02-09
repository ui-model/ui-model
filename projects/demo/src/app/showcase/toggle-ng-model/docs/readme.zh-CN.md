# Toggle也可以通过ngModel的方式使用

Toggle实现了`ControlValueAccessor`接口，因此它可以像普通的表单控件一样支持`ngModel`。这意味着你可以直接把`input[type=checkbox]`改为uiToggle，而不会破坏调用者。
