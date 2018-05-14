# bamazon

This application asked customers to choose between three departments in the store: ENTERTAINMENT, ELECTRONICS, OR FOOD.
1. When they choose one of the categories, they see all the items from that department. 
2. They are prompted to choose one item from that department.
3. They are then asked how many they would like.
4. Finally, they are told their item is on its way.

Here is a description for each photo on this repository:

**1_bamazon_connect.png**
This first photo shows that mysql and inquirer are needed for this application to work.
A connection to a mysql server is also necessary to import data. In this case, the data is located in bamazonseed.sql.

**2_bamazon_startfunction.png**
This second photo shows the start function. The customer has three departments to choose from: ENTERTAINMENT, ELECTRONICS, OR FOOD.
When they choose one of them, another function will execute. 

**3_bamazon_startfunction_results.png**
This photo sees the startfunction in action!
We can see the 3 choices: ENTERTAINMENT, ELECTRONICS, OR FOOD.

**4_bamazonquery_entertainment_function_PART1.png**
This photo shows the function that is used when the customer choses 1 (or ENTERTAINMENT).


**5_bamazonquery_entertainment_results.png**
This photo shows the entertainmentfunction in action. 
First, it displays a list of the items that are in the entertainment department. 
Then, The customer is prompted to answer which movie they would like. Once the customer enters which movie they want to see, it displays the movie they want, the price and quantity in stock.
Finally, when the customer answers which they movie they would like, they are asked how many they would like.

**6_bamazon_query_entertainment_PART2_and_results.png**
This photo shows the both the ".then" part of the entertainment function as well as a message that says that they're purchased item is on its way.
