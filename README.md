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

Finally, it can be difficult to balance between complexity and customization. Customisable libraries is not only difficult to develop, but also difficult to use. Traditional component library normally achieve customization through configuration, mostly via callback functions. However this approach will inevitably lead to complex documentation and heavy memory burden.    

So, what are the root cause that make component libraries difficult to reuse? They violated the SoC (Separate of Concerns) design principle. Traditional component has three concerns: view (HTML), model/logic (JavaScript) and styling (CSS). When these three concerns are tightly coupled together, complicity is inevitable.  

In fact, many CSS frameworks have been independent for a long time. For example, Bootstrap's CSS part only implements styling and is completely independent from HTML and JavaScript, and because of its well designed architecture, it quickly became popular. 

ui-model is the Bootstrap in JavaScript world. 

View (HTML) depends on business requirement and it is best to leave it to App themselves to implement. Frontend frameworks are responsible for bridging interactive logic and view. ui-model assumes that Frontend frameworks can synchronize model and view. However it does not care about frontend frameworks implement details such as via data binding or utilizing virtual dom. 

## Future of ui-model

ui-model is simple, but it has a bright future. apart from select, multi-select and toggle, it also has complex interactive logic such as ike slice and map, it can also handle more complex logic like Calendar.

On top of these common interactive logic, it can also implement logic that are specific to business requirements. For example, for shopping cart, we can abstract the business logic to a ui-model, all the view has to do is to bind this ui-model for its functionality. this shopping cart specific ui-model would be independent from view and css appearance, which can be customized freely. 

## 历史与现状

## History and presence

The ideologic of ui-model came from my research on internal reusability within enterprises in the last two years. I found that the fundamental barrier against reusability is violation to SoC design principle and thus to OCP design principle.

Later, through applying the ui-model theory in real world projects, I was able to simplify many problems and experience the benefits and advantages. I also realized that we can abstract many logic as ui-model from controls what we use every day in developer's lives. 

To formally present to the community, we created a github organisation named ui-model and we welcome the community to contribute with gratitude. 

## What's next

We will share the already implemented ui-models with the community. We hope they can serve as the seed ui-models to inspire the community to join us and develop more re-usable ui-models. 

Please note, ui-model is first and for most a theory, it does not limit to any library. We hope that we could see more library implementing the same idea, we would love to see health competitions, it is the definition of booming. 

We hope that when you implement the ui-model theory, you do not limit to interactive logic, but extend to business logic. We hope that the ui-model theory could help you to develop your apps that are more inline with SoC design principle. 

## Contribution

Our base is <https://github.com/ui-model>. We welcome you to start & fork it.

Our development plan is to firstly implement a TypeScript version. Because TypeScript's strong support for typing, it is helpful to API design process. 

We will use RxJS to expose event interfaces, but limit ourselves from advanced the features.

We will implement a middleware library for Angular 2 and present it with usage examples. We welcome ReactJS and other framework developers to join us and implement middleware libraries specific to individual frameworks. We also reserved a repository for JQuery developers consider the sheer amount of legacy applications online.

We welcome you to let us know your requirement and use cases and also report bugs. We greatly appreciate your PR. Based on the level of contribution, we will then invite active developers to ui-model organization. 

We encourage the community to develop competitive libraries empowering the same theory. We would love to link quality libraries here. We suggest to use ui-model tag or prefix your library name with `ui-model-...` to increase visibility to potential users. 