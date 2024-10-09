// Date methods

  // Create a new Date object
//   const now = new Date();   

//   // Format the date and time
//   const currentDateTime = now.toLocaleString();

//   // Display the date and time in the browser
//   document.getElementById('datetime').innerText = currentDateTime;

// //   2. Write a program that alerts the current month in words.
// // For example December.

//   // Create a new Date object
//   const now1 = new Date();

//   // Array of month names
//   const monthNames = [
//       "January", "February", "March", "April", "May", "June", 
//       "July", "August", "September", "October", "November", "December"
//   ];

//   // Get the current month (0-11) and map it to monthNames array
//   const currentMonth1 = monthNames[now1.getMonth()];

//   // Alert the current month
//   alert("The current month is: " + currentMonth1);




// //   3. Write a program that alerts the first 3 letters of the current
// // day, for example if today is Sunday then alert will show
// // Sun.

//     // Create a new Date object
//     const now2 = new Date();

//     // Array of day names
//     const dayNames = [
//         "Sunday", "Monday", "Tuesday", "Wednesday", 
//         "Thursday", "Friday", "Saturday"
//     ];

//     // Get the current day (0-6) and map it to dayNames array
//     const currentDay = dayNames[now2.getDay()];

//     // Get the first three letters of the current day
//     const dayShortForm = currentDay.substring(0, 3);

//     // Alert the first three letters of the current day
//     alert("Today is: " + dayShortForm);


// //     4. Write a program that displays a message “It’s Fun day” if
// // its Saturday or Sunday today.

//        // Create a new Date object
//        const now3 = new Date();

//        // Get the current day (0-6)
//        const currentDay1 = now3.getDay();

//        // Check if the current day is Saturday (6) or Sunday (0)
//        if (currentDay1 === 0 || currentDay2 === 6) {
//            alert("It's Fun day!");
//        } else {
//            alert("It's a regular day.");
//        }

// //         5. Write a program that shows the message “First fifteen
// // days of the month” if the date is less than 16th of the month
// // else shows “Last days of the month”.


//      // Create a new Date object
//      const now4 = new Date();

//      // Get the current date (1-31)
//      const currentDate = now4.getDate();

//      // Check if the date is less than 16
//      if (currentDate < 16) {
//          alert("First fifteen days of the month");
//      } else {
//          alert("Last days of the month");
//      }


// //      6. Write a program that determines the minutes since
// // midnight, Jan. 1, 1970 and assigns it to a variable that
// // hasn't been declared beforehand. Use any variable you like
// // to represent the Date object.

//       // Create a new Date object representing the current date and time
//       const currentDate1 = new Date();

//       // Get the time in milliseconds since Jan 1, 1970
//       const millisecondsSinceEpoch = currentDate1.getTime();

//       // Calculate the minutes since Jan 1, 1970
//       minutesSinceEpoch = Math.floor(millisecondsSinceEpoch / (1000 * 60));

//       // Display the result
//       alert("Minutes since midnight, Jan. 1, 1970: " + minutesSinceEpoch);


// // 7. Write a program that tests whether it's before noon and
// // alert “Its AM” else “its PM”.

//        // Create a new Date object
//        const now5 = new Date();

//        // Get the current hour (0-23)
//        const currentHour = now5.getHours();

//        // Check if it's before noon
//        if (currentHour < 12) {
//            alert("It's AM");
//        } else {
//            alert("It's PM");
//        }



// //        8. Write a program that creates a Date object for the last day
// // of the last month of 2020 and assigns it to variable named
// // laterDate.


//         // Create a Date object for the last day of the last month of 2020
//         const laterDate = new Date(2020, 11, 31); // December is month 11 (0-indexed)

//         // Display the result
//         alert("The last day of the last month of 2020 is: " + laterDate.toDateString());


// //         9. Create a date object of the starting date of this Ramadan
// // and alert the number of days past since 1st Ramadan?
// // Note: 1st Ramadan was on June 18, 2015


//    // Create a Date object for 1st Ramadan (June 18, 2015)
//    const ramadanStartDate = new Date(2015, 5, 18); // June is month 5 (0-indexed)

//    // Get the current date
//    const currentDate5 = new Date();

//    // Calculate the difference in milliseconds
//    const differenceInMilliseconds = currentDate5 - ramadanStartDate;

//    // Convert milliseconds to days
//    const daysPast = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

//    // Alert the number of days past since 1st Ramadan
//    alert("Number of days past since 1st Ramadan (June 18, 2015): " + daysPast);


// //    10. Write a program that displays in your browser the
// // seconds that elapsed between the reference date and the
// // beginning of 2015.


// // Reference date (June 18, 2015)
// const referenceDate = new Date(2015, 5, 18); // June is month 5 (0-indexed)

// // Beginning of 2015
// const beginningOf2015 = new Date(2015, 0, 1); // January is month 0

// // Calculate the difference in milliseconds
// const differenceInMilliseconds1 = referenceDate - beginningOf2015;

// // Convert milliseconds to seconds
// const secondsElapsed = Math.floor(differenceInMilliseconds1 / 1000);

// // Display the result in the browser
// document.getElementById('elapsedSeconds').innerText = 
//     "Seconds elapsed between January 1, 2015, and June 18, 2015: " + secondsElapsed;



// //     11. Create a Date object for the current date and time.
// // Extract the hours, reset the date object an hour ahead and
// // finally display the date object in your browser.

//      // Create a Date object for the current date and time
//      const currentDate6 = new Date();

//      // Extract the current hours
//      const currentHours = currentDate6.getHours();

//      // Reset the date object an hour ahead
//      currentDate6.setHours(currentHours + 1);

//      // Display the updated date object in the browser
//      document.getElementById('updatedDate').innerText = 
//          "Current Date and Time (One Hour Ahead): " + currentDate6.toString();


// //          12. Write a program that creates a date object and show the
// // date in an alert box that is reset to 100 years back?

//         // Create a Date object for the current date
//         const currentDate7 = new Date();

//         // Reset the date to 100 years back
//         currentDate7.setFullYear(currentDate7.getFullYear() - 100);

//         // Display the date in an alert box
//         alert("Date 100 years back: " + currentDate7.toDateString());


// //         13. Write a program to ask the user about his age. Calculate
// // and show his birth year in your browser.

//   // Ask the user for their age
//   const age = prompt("Please enter your age:");

//   // Get the current year
//   const currentYear = new Date().getFullYear();

//   // Calculate the birth year
//   const birthYear = currentYear - age;

//   // Display the birth year in the browser
//   document.getElementById('birthYear').innerText = 
//       "You were born in the year: " + birthYear;


//       14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


 // Input data for the bill
//  const customerName = "John Doe";
//  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
//  const numberOfUnits = 350; // Example number of units
//  const chargesPerUnit = 12.50; // Example charge per unit
//  const latePaymentSurcharge = 150; // Example surcharge for late payment

//  // Calculate Net Amount Payable (within Due Date)
//  const netAmountPayable = numberOfUnits * chargesPerUnit;

//  // Calculate Gross Amount Payable (after Due Date)
//  const grossAmountPayable = netAmountPayable + latePaymentSurcharge;

//  // Display the bill information in the browser
//  document.getElementById('customerName').innerText = `Customer Name: ${customerName}`;
//  document.getElementById('currentMonth').innerText = `Current Month: ${currentMonth}`;
//  document.getElementById('numberOfUnits').innerText = `Number of Units: ${numberOfUnits}`;
//  document.getElementById('chargesPerUnit').innerText = `Charges per Unit: ${chargesPerUnit.toFixed(2)} PKR`;
//  document.getElementById('netAmountPayable').innerText = `Net Amount Payable (within Due Date): ${netAmountPayable.toFixed(2)} PKR`;
//  document.getElementById('latePaymentSurcharge').innerText = `Late Payment Surcharge: ${latePaymentSurcharge.toFixed(2)} PKR`;
//  document.getElementById('grossAmountPayable').innerText = `Gross Amount Payable (after Due Date): ${grossAmountPayable.toFixed(2)} PKR`;


 // functions chapter questions

//  1. Write a function that displays current date & time in your
// browser.


// function displayDateTime() {
//     const currentDateTime = new Date();
//     document.getElementById('dateTime').innerHTML = currentDateTime;
// }

// // Call the function to display date and time when the page loads
// displayDateTime();


// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function greetUser() {
//     const firstName = document.getElementById('firstName').value;
//     const lastName = document.getElementById('lastName').value;

//     if (firstName && lastName) {
//         const fullName = `${firstName} ${lastName}`;
//         document.getElementById('greeting').innerHTML = `Hello, ${fullName}!`;
//     } else {
//         document.getElementById('greeting').innerHTML = 'Please enter both first and last names.';
//     }
// }


// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.


// function addNumbers() {
//     const num1 = parseFloat(document.getElementById('num1').value);
//     const num2 = parseFloat(document.getElementById('num2').value);

//     if (!isNaN(num1) && !isNaN(num2)) {
//         const sum = num1 + num2;
//         document.getElementById('result').innerHTML = `The sum of ${num1} and ${num2} is ${sum}.`;
//     } else {
//         document.getElementById('result').innerHTML = 'Please enter valid numbers.';
//     }
// }


// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.




// 5. Write a function that squares its argument.

// function squareNumber() {
//     const number = parseFloat(document.getElementById('number').value);

//     if (!isNaN(number)) {
//         const square = number * number; // Alternatively, you can use Math.pow(number, 2);
//         document.getElementById('result').innerHTML = `The square of ${number} is ${square}.`;
//     } else {
//         document.getElementById('result').innerHTML = 'Please enter a valid number.';
//     }
// }


//  6. Write a function that computes factorial of a number.

// function computeFactorial() {
//     const number = parseInt(document.getElementById('number').value);

//     if (number >= 0 && !isNaN(number)) {
//         let factorial = 1;
//         for (let i = 1; i <= number; i++) {
//             factorial *= i;
//         }
//         document.getElementById('result').innerHTML = `The factorial of ${number} is ${factorial}.`;
//     } else {
//         document.getElementById('result').innerHTML = 'Please enter a valid non-negative number.';
//     }
// }


// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// function displayCounting() {
//     const start = parseInt(document.getElementById('start').value);
//     const end = parseInt(document.getElementById('end').value);

//     if (!isNaN(start) && !isNaN(end) && start <= end) {
//         let counting = '';
//         for (let i = start; i <= end; i++) {
//             counting += i + (i < end ? ', ' : ''); // Add comma except for the last number
//         }
//         document.getElementById('result').innerHTML = `Counting from ${start} to ${end}: ${counting}`;
//     } else {
//         document.getElementById('result').innerHTML = 'Please enter valid numbers, with the start number less than or equal to the end number.';
//     }
// }


// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()



// function computeHypotenuse() {
//     const base = parseFloat(document.getElementById('base').value);
//     const perpendicular = parseFloat(document.getElementById('perpendicular').value);

//     if (!isNaN(base) && !isNaN(perpendicular) && base >= 0 && perpendicular >= 0) {
//         function calculateHypotenuse(b, p) {
//             return Math.sqrt(b * b + p * p); // Hypotenuse = √(Base² + Perpendicular²)
//         }

//         const hypotenuse = calculateHypotenuse(base, perpendicular);
//         document.getElementById('result').innerHTML = `The hypotenuse is ${hypotenuse.toFixed(2)}.`;
//     } else {
//         document.getElementById('result').innerHTML = 'Please enter valid non-negative numbers for base and perpendicular.';
//     }
// }


// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables


// Function to calculate area using arguments as values
// function calculateAreaValue() {
//     const width = parseFloat(document.getElementById('widthValue').value);
//     const height = parseFloat(document.getElementById('heightValue').value);

//     if (!isNaN(width) && !isNaN(height) && width >= 0 && height >= 0) {
//         const area = width * height;
//         document.getElementById('resultValue').innerHTML = `The area of the rectangle is ${area}.`;
//     } else {
//         document.getElementById('resultValue').innerHTML = 'Please enter valid non-negative numbers for width and height.';
//     }
// }

// // Function to calculate area using arguments as variables
// function calculateAreaVariable() {
//     const width = 5; // Example width
//     const height = 10; // Example height

//     const area = calculateArea(width, height);
//     document.getElementById('resultVariable').innerHTML = `The area of the rectangle is ${area}.`;
// }

// // Helper function to calculate area
// function calculateArea(w, h) {
//     return w * h; // Area = Width * Height
// }


// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.


// function checkPalindrome() {
//     const str = document.getElementById('inputString').value.trim(); // Get input and remove whitespace

//     // Function to check if the string is a palindrome
//     function isPalindrome(s) {
//         const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // Remove non-alphanumeric characters and convert to lowercase
//         const reversedString = cleanedString.split('').reverse().join(''); // Reverse the cleaned string
//         return cleanedString === reversedString; // Compare cleaned string with its reverse
//     }

//     if (str) {
//         const result = isPalindrome(str);
//         document.getElementById('result').innerHTML = result ? `"${str}" is a palindrome.` : `"${str}" is not a palindrome.`;
//     } else {
//         document.getElementById('result').innerHTML = 'Please enter a valid string.';
//     }
// }


// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


// function capitalizeWords() {
//     const str = document.getElementById('inputString').value; // Get the input string

//     // Function to capitalize the first letter of each word
//     function capitalizeFirstLetter(s) {
//         return s.split(' ') // Split the string into words
//             .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter and lowercase the rest
//             .join(' '); // Join the words back into a string
//     }

//     if (str) {
//         const result = capitalizeFirstLetter(str);
//         document.getElementById('result').innerHTML = `Output: '${result}'`;
//     } else {
//         document.getElementById('result').innerHTML = 'Please enter a valid string.';
//     }
// }


// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function findLongestWord() {
//     const str = document.getElementById('inputString').value; // Get the input string

//     // Function to find the longest word in the string
//     function longestWord(s) {
//         const words = s.split(' '); // Split the string into an array of words
//         let longest = ''; // Initialize the longest word variable

//         // Iterate through the array of words
//         for (const word of words) {
//             if (word.length > longest.length) {
//                 longest = word; // Update longest if the current word is longer
//             }
//         }
//         return longest; // Return the longest word
//     }

//     if (str) {
//         const result = longestWord(str);
//         document.getElementById('result').innerHTML = `The longest word is: '${result}'`;
//     } else {
//         document.getElementById('result').innerHTML = 'Please enter a valid string.';
//     }
// }



// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// function countLetterOccurrences() {
//     const str = document.getElementById('inputString').value; // Get the input string
//     const letter = document.getElementById('inputLetter').value; // Get the input letter

//     // Function to count occurrences of a specified letter in a string
//     function countOccurrences(s, char) {
//         if (char.length !== 1) {
//             return 0; // Return 0 if the letter is not a single character
//         }

//         let count = 0; // Initialize count variable

//         // Iterate through the string and count occurrences
//         for (const ch of s) {
//             if (ch === char) {
//                 count++; // Increment count if the character matches
//             }
//         }
//         return count; // Return the final count
//     }

//     if (str && letter) {
//         const result = countOccurrences(str, letter);
//         document.getElementById('result').innerHTML = `The letter '${letter}' occurs ${result} times in the string.`;
//     } else {
//         document.getElementById('result').innerHTML = 'Please enter a valid string and a letter.';
//     }
// }


// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2


// Function to calculate the circumference of a circle
// function calcCircumference() {
//     const radius = document.getElementById('inputRadius').value; // Get the radius input

//     if (radius && radius > 0) {
//         const circumference = 2 * Math.PI * radius; // Formula: 2πr
//         document.getElementById('result').innerHTML = `The circumference is ${circumference.toFixed(2)}.`; // Output result
//     } else {
//         document.getElementById('result').innerHTML = 'Please enter a valid positive radius.';
//     }
// }

// // Function to calculate the area of a circle
// function calcArea() {
//     const radius = document.getElementById('inputRadius').value; // Get the radius input

//     if (radius && radius > 0) {
//         const area = Math.PI * Math.pow(radius, 2); // Formula: πr^2
//         document.getElementById('result').innerHTML = `The area is ${area.toFixed(2)}.`; // Output result
//     } else {
//         document.getElementById('result').innerHTML = 'Please enter a valid positive radius.';
//     }
// }

