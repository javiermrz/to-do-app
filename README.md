# To-Do App
## What is it?
A **console app** with several functionalities. As the name indicates, you will be able to manage your own **to-do list**,
being able to **see** the pending tasks, **add** tasks or mark them as **completed** and **delete** them from the list.

## How do you use it?
This app is very intuitive and easy to use. The first thing you should do is type the following in your console:
```
node to-do-app.js --help 
```
You will then be able to read all the necessary **information** to manage the app.
However, **keep reading** to know exactly how each of the commands works!

* ### Retrieve
This command is very simple. All you have to do is type the following:
```
node to-do-app.js retrieve
```  
This will show you the **pending tasks list**.

* ### Add
This command will **add** a new task to the list.
All you have to do is type: 
```
node to-do-app.js add Task
``` 
For example, ```node to-do-app.js add Do the shopping```

This will also show you the resulting tasks list after making the respective changes to it.

* ### Done
This command will mark a task as done, and so it will **delete** it from your list.
All you have to do is type: 
```
node to-do-app.js done Task
``` 
For example, ```node to-do-app.js done Do the shopping```

This will also show you the resulting tasks list after making the respective changes to it.
