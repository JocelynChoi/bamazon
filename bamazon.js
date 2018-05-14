var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Suanmokk54!$",
  database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start()

});


function start() {
  inquirer
    .prompt([
      {
        name: "ENTERTAINMENTorELECTRONICSorFOOD",
        type: "rawlist",
        message: "WHICH ITEM TYPE WOULD YOU LIKE TO CHOOSE?",
        choices: ["ENTERTAINMENT", "ELECTRONICS", "FOOD"]
      },
    ])
    .then(function (answer) {
      //       // based on their answer, either call the bid or the post functions
      if (answer.ENTERTAINMENTorELECTRONICSorFOOD.toUpperCase() === "ENTERTAINMENT") {
        console.log("You've chosen ENTERTAINMENT. Which movie would you like?");
        queryEntertainment();

      }
      else if (answer.ENTERTAINMENTorELECTRONICSorFOOD.toUpperCase() === "ELECTRONICS") {
        console.log("You've chosen ELECTRONICS. Which device would you like?");
        // queryElectronics();
      }

      else {
        console.log("You've chosen FOOD. Which tea would you like?");
        // queryFood();
      }
    });
}
// 
function queryEntertainment() {
  connection.query("SELECT * FROM products WHERE department_name=?",
    ["entertainment"], function (err, res) {
      if (err) throw err;

      inquirer
        .prompt([
          {
            name: "choice",
            type: "rawlist",

            choices: function () {
              var choiceArray = [];
              for (var i = 0; i < res.length; i++) {
                choiceArray.push(res[i].id + " | " + res[i].product_name + " |Price: "
                  + res[i].price + " |Quantity in Stock: " + res[i].stock_quantity)
              }
              return choiceArray;
            },
            message: "What movie would you like to watch?"
          },
          {
            name: "bid",
            type: "input",
            message: "How many would you like to buy?"
          }
        ])
        .then(function (answer) {
          // get the information of the chosen item
          var chosenItem;
          for (var i = 0; i < res.length; i++) {
            if (res[i].product_name === answer.choice) {
              chosenItem = res[i];
            }

          }

          

          console.log("Your product is on it's way...");


        });
    });
}




 
// function readProducts() {
//   console.log("Selecting all products...\n");
//   connection.query("SELECT * FROM products WHERE department_name?", ["entertainment"] function(err, res) {
//     if (err) throw err;
//     // Log all results of the SELECT statement
//     console.log(res);
//     query();
//   });
// }