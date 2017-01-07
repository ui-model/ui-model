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

For popular JavaScript frameworks, we will also provide some binding library to reduce adaption complexity, such as *ui-model-angular* for Angular and *ui-model-react* for React.

## 传统的组件库为何难以复用？

如果你使用过第三方组件库，那么大概也体会过组件库的一些共有缺点。

首先，大部分组件库都与某个前端框架紧紧绑定在一起，Angular的组件库显然无法用于React，反之也一样。甚至有些库还紧紧地绑定了CSS框架，如果绑定的是Bootstrap等设计良好的框架也就罢了，至少你可以通过CSS进行深度定制；如果是设计不良的框架，那就惨了，有些修改你可能只有去改它的源码，而这将破坏封装。

其次，组件库的配置过于复杂，一些大型套件甚至都需要专门学习一段时间才能上手，而一旦换了套件，关于本组件库的知识基本上就作废了。固然，它们所解决的需求本身就很复杂，但问题在于这些复杂的需求都是由少数几个通用的交互逻辑变形组合而成的（就像前文所说的多种交互控件抽取出的select逻辑），这种复杂度是否真的是我们必须付出的代价？

最后，组件库很难在可定制性和复杂度之间进行平衡。可定制性强的组件库且不说自身的开发难度高，即使在使用方面也同样不易。传统方式下的组件库，通常都要通过配置去实现各种可定制性，最多是支持用回调函数进行定制，但是这种方式必然导致巨大的文档以及沉重的记忆负担。

那么，组件库难以复用的根本原因是什么呢？一句话：违反了SoC（关注点分离）这一根本性的设计原则。传统的组件库同时涵盖了三个关注点：信息架构（HTML）、交互逻辑（JS）、外观样式（CSS），当这三个关注点紧紧捆绑在一起的时候，上述三大问题就很难避免了。

相对来说，CSS库较早的独立出来，比如Bootstrap的CSS框架部分就仅仅实现了外观，对HTML和JS几乎没有依赖，加之其本身的设计就相当合理，因此快速流行起来。

而ui-model就是JS世界中的Bootstrap。

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
