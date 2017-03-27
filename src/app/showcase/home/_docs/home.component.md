# UI Model - Introduction

ui-model is a **software architectural pattern**. You may be surprised to realise that it is a very familiar concept but not materialised until now. 

The core of ui-model is SoC, Separate of Concerns. With ui-model pattern, you separate the soul (logic) of an interactive ui component from its body (contents and styles etc.). 

Interactive ui components share very few common logics and therefore ui-model is highly reusable with no configuration required, which lead to limitless customizability. 

# Showcase Introduction

Apart from ui-model, this showcase also include some supporting directives that bridges between ui-model and dom.

There are four layers: 

1. ui-model

    Pure logics and data structure, it is the reusable part and it is independent to frameworks i.e. it works with Angular, React or any other frameworks. 
    
1. ui-model-angular

    The binding library for Angular. It includes supporting directives and pipes ready to be used in the template of an Angular component. With Angular, this library is reusable and it is independent from CSS frameworks i.e. it can work with Bootstrap, Semantic or any other CSS frameworks. 
        
1. ui-model-angular-bootstrap

    This library binds Bootstrap into the mix. It includes a set of showcase demo components themed with Bootstrap, such as calendar, table, tooltip and type-ahead etc.:  
    
    - if the components suits your requirement, you can re-use them in your projects. If you do, reading the source code will be beneficial. The code is usually minimum thanks to the high level abstraction from ui-model. 
    - you are welcome to alter the code. Because it is a very thin layer with no interactive logic, it will be difficult to introduce bug here.

1. ui-model-angular-showcase

    With the support of above three libraries, this is the end layer for the demos where you can experience the components and view their code and documentations.
