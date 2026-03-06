// 01. Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.
  function CelsiusToFahrenheit(celsius){
     const C = Number(celsius);
     const calc = C * 9/5
     const temp = calc + 32;
     return(temp);
  };

  console.log(CelsiusToFahrenheit(0));
  console.log(CelsiusToFahrenheit(25));



// 02. Write a function to check if a number is even. The function should take a single argument, which is the number to check.
 function isEven(number){
    return number % 2 === 0
 };

  console.log(isEven(4));// true
  console.log(isEven(5)); // false



// 03. Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.
  function sum(a, b){
    return a + b;
  };
  console.log(sum(3,4)); // 7
  console.log(sum(10, 20)); // 30



// 04. Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.
function findSmallestNum(arr){
    return Math.min(...arr);
}

console.log(findSmallestNum([3, 5, 1, 9])); //1 
console.log(findSmallestNum([-1, -5, 0, 10])); // -5



// 05. Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.
 function countvowels(str){
    let vowels = "aeiouAEIOU";
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
 }

 console.log(countvowels("hello world")); // 3
 console.log(countvowels("Javascript")); // 3




// 06. Write a function to get the first element of an array. The function should take a single argument, which is the array.
  function getFirstElement(arr){
    return arr[0];
  }

  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a","b","c"])); // 2




// 07. Write a function to check if an array is empty. The function should take a single argument, which is the array.
  function isArrayEmpty(arr){
    return arr.length === 0;
  }

  console.log(isArrayEmpty([])); // true
  console.log(isArrayEmpty([1,2,3,4])); // flase




// 08. Write a function to return the factorial of a number. The function should take a single argument, which is the number.
 function factorialize(num){

    if (num === 0 || num === 1) return 1;

    let result = 1;

    for(let i = 1; i <= num; i++){
        result = result * i;
    }

    return result;
}

console.log(factorialize(5)) // 120
console.log(factorialize(7)) // 5040




// 09. Write a function to reverse a string. The function should take a single argument, which is the string to reverse.
   function reverseString(str){
     let reverse = "";
     for(let i = str.length - 1 ; i >=0 ; i--){
      reverse = reverse + str[i];
     }

     return reverse;
   }

   console.log(reverseString("hello")); // olleh
  console.log(reverseString("world")); // dlrow




// 10.Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.
 function toLowerCase(str){
   return (str).toLowerCase();
 }

 console.log(toLowerCase("HELLO WORLD")); // hello world
 console.log(toLowerCase("JAVASCRIPT"));  // javascript




// 11.Write a function to find the length of a string. The function should take a single argument, which is the string.
  function stringLength(str){
    return str.length ;
  }
  console.log(stringLength("hello")); // 5
  console.log(stringLength("world")); // 5





// 12. Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.
   function margeArrays(arr1, arr2){
    return arr1.concat(arr2);
   }

   console.log(margeArrays([1, 2, 3], [4, 5, 6])); // [1,2,3,4,5,6]
   console.log(margeArrays(["a", "b"], ["c", "d"])); //[ 'a', 'b', 'c', 'd' ]




// 13.  Write a function to get the last element of an array. The function should take a single argument, which is the array.
  function getLastElement(arr){
    return arr[arr.length -1];
    
  }   

  console.log(getLastElement([1,2,3])); // 3
  console.log(getLastElement(["a","b","c"])); // c



// 14.  Write a function to get the first character of a string. The function should take a single argument, which is the string.
  function getFirstCharacter(str){
    return str.charAt(0);
  }

  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter("world")); // "w"




// 15. Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.
  function sumArray(arr){
    let sum = 0;
    for(let i = 0; i <arr.length ; i++){
      sum += arr[i];
    }
    return sum;
  }

  console.log(sumArray([1,2,3,4])) // 10
  console.log(sumArray([-1, -2, -3, -4])); // -10
  console.log(sumArray([1.5,2.5,3.5]));  // 7.5