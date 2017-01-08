# ui-model

## What is ui-model？

ui-model is a set of the streamlined front-end interaction logic. No matter what framework you use, and regardless of the appearance of these interactive controls, the logic behind them can be abstracted to a few, they are ui-model.

For example, what do the following controls have in common?

![Select](./images/select.png)

![Radio Group](./images/radio.png)

Their logic are exactly the same i.e. ***n* choose *1***.

Maybe you have realized this a long time ago, but let's explore further. Are there other interactive controls that share the same logic? You may be surprised how common they are. Please try to make a list in your mind before reading on.  

Ok, let's reveal: 

Tabset, only one tab can be activated at a time

Menu, only one menu item can be highlighted or selected at a time

Accordion, only one item can be expanded at a time. 

Button Group, only one button can be selected at a time

Pagination, only one page can be activated

A tree or a grid that only allow one item to be expanded at a time

A table that can only be sorted by one column at a time. 

Behind all of these intricate controls, is the simplest ***n* choose *1*** logic and this logic can be implemented in 10 lines of code. This is the power of high-level abstraction. 

**ui-model** is an attempt to abstract the interactive logic from all ui controls. 

Now you have seen some controls with *n* choose *1* logic, what about controls with ***n* choose *k*** or ***toggle***?

## the conceptual model of ui-model

![Architecture](./images/architecture.png)

In the above conceptual model, ui-model is parallel to JavaScript frameworks and CSS frameworks. These three components are independent from each other. We can freely mix and match them. JavaScript framework is responsible for synchronizing model and view. CSS frameworks are responsible to presentation. ui-model is focused on interactive logic. 

We will also provide some binding libraries to reduce adaption complexity, such as *ui-model-angular* for Angular and *ui-model-react* for React. We welcome the community to contribute to ui-model and distribute their own binding libraries.

## Why are traditional component libraries difficult to reuse?  

If you use a third party component library, you probably experience some of the common drawbacks. 

Firstly, most component libraries are tightly coupled with a Frontend framework. A component library for Angular is obviously not usable with React, and vice versa. Some libraries are also tightly coupled with a CSS framework, which is probably alright if it is a well designed CSS Framework like Bootstrap because you could customise in depth via CSS. If the CSS framework is not well designed, then you may have to modify its source code, which will disrupt the original distribution.

Secondly, component libraries' configuration can be complex. Some large libraries require dedicated learning for a period to get started, and if switch libraries, what you learned for the old library would be wasted. It is true that these libraries are designed to solve complex problems. However what lies beneath these complex problems are a few common interactive logic, as mentioned above, may controls are based on abstracted ***n* choose *1***. There is a better way to handle these complex problems?

Finally, it can be difficult to balance between complexity and customisation. Customisable libraries is not only difficult to develop, but also difficult to use. Traditional component library normally achieve customisation through configuration, mostly via callback functions. However this approach will inevitably lead to complex documentation and heavy memory burden.    

So, what are the root cause that make component libraries difficult to reuse? They violated the SoC (Separate of Concerns) design principle. Traditional component has three concerns: view (HTML), model/logic (JavaScript) and styling (CSS). When these three concerns are tightly coupled together, complicity is inevitable.  

In fact, many CSS frameworks have been independent for a long time. For example, Bootstrap's CSS part only implements styling and is completely independent from HTML and JavaScript, and because of its well designed architecture, it quickly became popular. 

ui-model is the Bootstrap in JavaScript world. 

另一个关注点，信息架构（HTML）由于最贴近业务需求，因此可以留给应用去自己实现。而现有的前端框架则作为交互逻辑和信息架构之间的桥梁。ui-model对这个“桥梁”的唯一假设就是它能够实现模型和界面之间的同步 —— 并不关心它使用数据绑定实现还是使用Virtual DOM实现。



## ui-model的前景与未来

虽然简单，但ui-model仍然是一片蓝海。除了最简单的select、multi-select和toggle外，还有诸如slice、map等稍复杂的交互逻辑，还包括Calendar等更复杂的逻辑。

除了这些通用的交互逻辑外，还可以实现很多更贴近业务的交互逻辑，比如购物车，如果我们为它抽取出一个ui-model，那么只要把它绑定到HTML上就可以正常工作了。而对这个HTML及相应的CSS，各种应用可以任意定制。

## 历史与现状

ui-model的思想来自两年多之前我对企业内部可复用性的研究，我发现了传统思路下的复用工作受挫的症结在于它们违反了SoC原则，因此也会被迫违反OCP原则。

后来，我在一些实际项目中应用这种思想简化了很多问题，并深切体会到了它的优点，还发现了更多可以抽象为select等ui-model的交互控件以及更多的ui-model。

经过一段时间的沉淀，我把这个想法拿出来和叶志敏进行探讨，我们都认为这是一个很有价值的思想，值得分享给社区，于是我们建立了一个叫做lean-ui的github组，写下了一些初步思想以及探讨性实现，但是由于事情较多，同时精力转向了推广Angular 2，因此很长时间内没有再动它。直到今天，2017年新年，我们把它更名为更贴切的ui-model，并正式把它公布给前端社区，也同时作为我们的交付承诺以及对各位志愿者的邀请。

## 规划与未来

接下来，我们会先将过去实现过的ui-model整理一下、开源出来，作为给大家参与开发的范例。之后，我们还会进一步开发更多的ui-model，更多的前端框架中间层以及更多应用范例。

希望大家记住：ui-model首先是一种思想，而不局限于这个具体的库。我们也希望出现更多的基于ui-model思想实现的竞争库，我们乐于见到良性的竞争，因为 —— 这才叫繁荣。

我们希望，你在实际开发中对ui-model思想的应用不要局限于交互逻辑，而是外延到业务逻辑部分，希望ui-model的思想能给你一些启迪，帮助你开发出更加符合SoC原则的应用。

## 组织与参与

我们的活动基地是<https://github.com/ui-model>组，欢迎大家star & fork它。

我们的开发计划是先做一个基于TypeScript的版本，由于其对类型提供了良好支持，因此很适合做API探索。

我们也会用到RxJS来对外公开各种事件接口，但会尽量避免引入其高级特性。

我们会基于Angular 2来实现第一个中间层及其范例，若有ReactJS等其它前端框架方面的专家，我们也同样欢迎加入。同时考虑到遗留系统是如此之多，我们还预留了一个给jQuery程序员的仓库。

初期，请给我们提issue来让我们了解你的需求和应用场景，反馈我们代码中的bug，并且我们非常欢迎各位给我们提交PR，无论我们是否会接受，我们都感激不尽。

之后，等开发步入了正规，我们就会根据issue和PR的记录来逐渐邀请一些活跃开发者加入我们的开发组。

最后，别忘了，我们还鼓励各位基于ui-model的思想来开发竞争库，将来对于优秀的竞争库，我们愿意从这里链接到你们。建议在发布npm包时添加ui-model标签或干脆以ui-model-前缀来命名你们自己的库，以便使用者更容易找到你们。
