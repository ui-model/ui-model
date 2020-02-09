# 按钮组

按钮组的ui-model就是`select`。

我们可以使用普通的方式来使用按钮组，只要一个for循环就行了，这种方式可以提供很高的可定制性。

但是，我们也可以通过ControlValueAccessor来把它封装成一个标准的表单控件，使其支持ngModel绑定，这样它就可以和select等控件相互替换了。
