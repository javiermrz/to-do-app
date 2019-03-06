# To-Do App
## What is it?
A **console app** with several functionalities. As the name indicates, you will be able to manage your own **to-do list**,
being able to **see** the **pending tasks**, **add** tasks or mark them as **completed** and **delete** them from the list.

## How do you use it?
The first thing you should do is type the following in your console:
```
node money-converter.js --help 
```
You will then be able to read all the necessary **information** to manage the app.
However, **keep reading** to know exactly how each of the commands works!

* ### Rate
This command is very symple. All you have to do is type the following:
```
node money-converter.js rate --to CURRENCY
``` 
being **CURRENCY** an existing currencie such as *AUD* or *USD* among others. 
This will return the rate of the introduced currency.

* ### Convert
This command will make a money conversion of a certain amount of money in euros to the introduced currency.

All you have to do is type: 
```
node money-converter.js convert --to CURRENCY
``` 
It will ask you for the amount of **euros** that you have, and make the conversion afterwards.

* ### Inter
This command will make a money conversion of certain amount of money from any introduced currency to another one.

All you have to do is type: 
```
node money-converter.js inter --from CURRENCY_1 --to CURRENCY_2
``` 
**CURRENCY_1** should be the currency in which you have your money at the moment, and **CURRENCY_2** the currency you want to make the conversion to.

* ### Historical
This command will compare the value of your money at some point in the past to its actual value.

All you have to do is type the following:
```
node money-converter.js historical --from CURRENCY --date YYYY-MM-DD
```
It will then ask you how much money you have, and will get the difference in value for you.
