# ui-model

## What is ui-model?

**ui-model** is a set of the streamlined UI logics extracted from ui controls for frontend developers. 

The **ui-model** project is the fruit of Ralph's research on internal code re-usability within enterprise apps in the last two years. What Ralph found during the research was that the most common and important factor against re-usability is the violation of SoC (Separate of Concerns) design pattern, which then leads to violating the OCP(Open-Closed Principle) design pattern. 

To increase code reusability for his projects, Ralph further separates the logic from interactive ui controls. With these extracted reusable logics, Ralph was able to simplify many problems dramatically. These logics are the seed of **ui-model**. 

To formally present to the community, we created a GitHub organisation named *ui-model* and we invite the community to contribute.

## Why UI Logics? 

No matter what framework you use, and regardless of their appearance, the logic behind many interactive UI controls can be extracted to a few. 

Let's elaborate the above statement with an example. What do the following controls have in common?

![Select](./images/select.png)

![Radio Group](./images/radio.png)

You guessed right. Their logics are the same i.e. *n* choose *1*.

Maybe it is obvious to you, but let's explore further. Are there other ui controls with the same *n* choose *1* logic? Please try to make a list in your mind, you may be surprised how common they are.

Let's see some examples. The list below is by no means exhaustive: 

1. **Tabset** - only one tab can be activated at a time

1. **Menu** - only one menu item can be highlighted or selected at a time

1. **Accordion** - only one item can be expanded at a time. 

1. **Button Group** - only one button can be selected at a time

1. **Pagination** - only one page can be activated at a time

1. A **tree** or a **grid** that only allow one item to be expanded at a time

1. A **table** that can only be sorted by one column at a time. 

Behind all of the above simple or intricate controls, is the  *n* choose *1* logic, which can be implemented in about 10 lines of code. This is the power of high-level abstraction. 

Now you have seen some controls with *n* choose *1* logic, but can you list some UI controls with *n* choose *k* or *toggle*?

## The conceptual model of ui-model

![Architecture](./images/architecture.png)

In the above conceptual model, ui-model is parallel to JavaScript frameworks and CSS frameworks. These three components should be independent of each other. You can freely mix and match them. JavaScript frameworks are responsible for synchronising model and view. CSS frameworks are responsible for presentation. ui-model is focused on interactive logic. 

## Why are traditional component libraries difficult to reuse?  

If you use a third party component library, you probably have experienced some of the typical drawbacks. 

Firstly, most component libraries are tightly coupled with a frontend framework. A component library for Angular is obviously not usable with React, and vice versa. Some libraries are also tightly coupled with a CSS framework, which may not be the one you prefer.

Secondly, component libraries' configuration can be complex. Some large libraries require dedicated learning just to get started, and if switching libraries, what you learned for the old library would be wasted. It is true that these libraries are designed to solve complex problems, however, what lies beneath these complex problems are a few common and straightforward interactive logic, as mentioned above, may controls are based on the same *n* choose *1* logic. There is a better way to handle these complex problems.

Finally, it can be difficult to balance between complexity and customization. Customizable libraries are not only difficult to develop, but also harder to use. The traditional component library typically achieves customization through configuration, mostly via callback functions. However, this approach will inevitably lead to documentation hurdle and heavy memory burden.    

So, what are the cause that makes component libraries difficult to reuse? The answer is quite simple: They violated the SoC design principle. Traditional component has three concerns: view (HTML), model/logic (JavaScript) and styling (CSS). When these three concerns are tightly coupled together, complexity is inevitable.  

Many CSS frameworks have been independent for a long time. For example, Bootstrap's CSS is entirely independent of HTML and JavaScript. ui-model is the Bootstrap in JavaScript world. 

## Future of ui-model

ui-model is simple, but it has a bright future. Apart from select, multi-select and toggle, it will also handle complex interactive logic such as slice, map and even calendar.

Following the same principle, you can also implement logics that are specific to business requirements. For example, you can abstract the business logic of a shopping cart to an ui-model. 
 
## What's next

We will share the already implemented ui-models with the community. We hope they can serve as the seeds and inspire the community to join us and develop more ui-models. 

Please note, ui-model is first and foremost a concept of abstracting pure logics from ui controls. It does not limit to any library. We hope that we could see more library implementing the same idea. We would love to see healthy and positive competitions, it is the very definition of a booming community. 

We hope that when you implement the concept, you do not limit to UI logics, but extend to business logics. We hope that the ui-model concept could help you to develop your apps in a way that is more in line with SoC design principle with a reusable code base. 

## Contribution

Our base is <https://github.com/ui-model>. We welcome you to star & fork it.

Our development plan is to implement a TypeScript version firstly. TypeScript has strong support for typing, and it is very helpful to API design process. 

We will use RxJS to expose event interfaces, but we will limit ourselves from RxJS's advanced features.

We will implement a binding library for Angular 2 with demos. We welcome other framework developers to join us and implement binding libraries. We also reserved a repository for JQuery developers considering plenty of legacy applications online.

We welcome you to rise issues to let us know your requirements, use cases and also bug reporting. Whether we can merge or not, we greatly appreciate your PR. 

We encourage the community to develop competitive libraries based on the same ui-model concept. We would love to link quality libraries here. May we suggest that you use `ui-model` tag or prefix your library name with `ui-model-...` to increase visibility to the community.
