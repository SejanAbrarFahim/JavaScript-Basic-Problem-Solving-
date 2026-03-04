// 01. Create a variable called carName, assign the value Volvo to it.
 let carName = "Volvo";


 // 02. On one single line, declare three variables with the following names and values:
 let firstName = "John" , lastName = "Doe" , age = 35 ;
 
 // 1st Variable Name - firstName .
 // 2nd Variable values - Doe .
 // 3rd variable Name - age & value - 35 .


// 03. Use the correct assignment operator that will result in x being 50 (same as x = x * y).
 let x = 10 ;
 let y = 5 ;
 console.log(x*=y);
 // the value of x = 50 ;


// 04.Use comments to describe the correct data type of the following variables:
  let length = 16 ; // intieger .
  let LastName = "Johnson" ;// string.
 
  const X = {
     FirstName : "John",
     lastName : "Doe"
  }; // object
  


// 05. Execute the function named myFunction.
  function myFunction(){
    alert("Hello World!");
  }

  myFunction();



// 06. Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").
  const person = {
    name : "John",
    age : 50 
  };

  alert(person.name + " is " + person.age);




// 07. The <button> element should do something when someone clicks on it. Try to fix it!
 function Mybtn(){
  alert("Hello q7 😍");
 };




// 08. Array Related Question .
 // 1. Alert the number of items in an array, using the correct Array property: 
   const cars = ["Volvo", "Jeep" ,"Mercedes"];
   alert(cars.length);
 // 2. Change the first item of Brand to "Ford".
   const Brand = ["Volvo", " Jeep " ," Mercedes "];
   Brand[0] = "Ford";
   alert(Brand);



// 09. Math Related Problems.
  // 1. Use the correct Math method to create a random number.
     const random = Math.random();
     console.log(random);

  // 2. Use the correct Math method to return the largest number of 10 and 20.
     const Max = Math.max(10,20);
     console.log(Max);

  //3. Use the correct Math method to get the square root of 9.
     const square = Math.sqrt(9);
     console.log(square);



// 10. comparison operator related problems! 
   // 1. Choose the correct comparison operator to alert true, when x is greater than y. 
     const x = 10 ;
     const y = 5 ;
     console.log(x > y);

   // 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
    const age = 18 ;
    const Message = age < 18 ? "Too young" : "Old enough" ;
    console.log(Message);