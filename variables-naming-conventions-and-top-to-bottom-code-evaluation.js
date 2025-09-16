/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

// Removed ambiguous variable declarations and usage

/* Renamed 'a' to a descriptive name */
let customerName = "Alice";
/* Renamed 'b' to reflect the number of items purchased */
let itemCount = 5;
/* Renamed 'c' to indicate the total cost of items */
let totalCost = 20;
/* Rename 'd' to describe the full message that will logged to the console */
let purchaseMessage = customerName + " bought " + itemCount + " items for $" + totalCost + "."; 

console.log(purchaseMessage);

/* Added a variable to represent the price per item */
let pricePerItem = totalCost / itemCount; 
/* Added a variable to represent a thank you message */
let thankYouMessage = "Thank you for shopping with us, " + customerName + "!";  

console.log("Each item costs $" + pricePerItem + ".");
console.log(thankYouMessage);

/* Reflection:
1. Meaningful variable names are crucial because they enhance code readability and maintainability. They help developers understand the purpose of a variable.
2. Common pitfalls to avoid when naming variables include using overly generic names, abbreviations that are not widely understood, and inconsistent naming conventions.
3. Clear variable names benefit team collaboration by making it easier for team members to understand each other's code, reducing the learning curve for new team members, and minimizing errors during code reviews.