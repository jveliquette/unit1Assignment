/* Question 1 // Write a function called "isEvenAndGreaterThanTen". Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10. */
// const output = isEvenAndGreaterThanTen(13);
// console.log(output); // --> false
// function isEvenAndGreaterThanTen(num) {
//     return num % 2 === 0 && (num > 10);
// }


/* Question 2 // Write a function called "computeAreaOfATriangle". Given the base and height of a triangle, "computeAreaOfATriangle" returns its area. */
// const output = computeAreaOfATriangle(4, 6);
// console.log(output); // --> 12
// function computeAreaOfATriangle(base, height) {
//    return 1/2 * base * height
//  }


/* Question 3 // Write a function called "cube". Given a number, "cube" returns the cube of that number. */
// const output = cube(3);
// console.log(output); // --> 27
// function cube(num) {
//     return num * num * num
// }


/* Question 4 // Write a function called "computeAreaOfARectangle". Given the length and width of a rectangle, "computeAreaOfARectangle" returns its area. */
// const output = computeAreaOfARectangle(4, 8);
// console.log(output); // --> 32
// function computeAreaOfARectangle(length, width) {
//     return length * width
//   }


/* Question 5 // Write a function called "computeSquareRoot". Given a number, "computeSquareRoot" returns its square root. */
// const output = computeSquareRoot(9);
// console.log(output); // --> 3
// function computeSquareRoot(num) {
//     return Math.sqrt(num)
//   }


/* Question 6 // Write a function called "removeFromBackOfNew". Given an array, "removeFromBackOfNew" returns a new array containing all but the last element of the given array.
Notes: * You should be familiar with the 'slice' method. */
// const arr = [1, 2, 3];
// const output = removeFromBackOfNew(arr);
// console.log(output); // --> [1, 2]
// console.log(arr); // --> [1, 2, 3]
// function removeFromBackOfNew(arr) {
//     return arr.slice(0, -1)
//   }


/* Question 7 // Write a function called "findMinLengthOfThreeWords". Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word. */
// const output = findMinLengthOfThreeWords('a', 'be', 'see');
// console.log(output); // --> 1
// function findMinLengthOfThreeWords(word1, word2, word3) {
//     const words = [word1, word2, word3];
//     let smallest = words[0].length;
//     for (let i = 0; i < words.length; i++) {
//         if (words.length < smallest.length) {
//             smallest = words.length
//         }
//     }
//     return smallest
// }

/* Question 8 // Write a function called "filterEvenLengthWords". Given an array of strings, "filterEvenLengthWords" returns an array
containing only the elementsof the given array whose length is an even number. */
// const output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
// console.log(output); // --> ['word', 'word']
// function filterEvenLengthWords(words) {
//     return words.filter(item => {
//         return (item.length % 2 === 0)
//     })
//   }

/* Question 9 // Write a function called "squareElements". Given an array of numbers, "squareElements" should return a new array where each element is the square of the element of the given array. */
// const output = squareElements([1, 2, 3]);
// console.log(output); // --> [1, 4, 9]
// function squareElements(arr) {
//     newArray = []
//     for (let i = 0; i < arr.length; i++) {
//         square = Math.pow(arr[i], 2);
//         newArray.push(square);
// }
//     return newArray
// }


/* Question 10 // Write a function called "findShortestElement". Given an array, "findShortestElement" returns the shortest string within the given array.
Notes:
 - If there are ties, it should return the first element to appear.
 - If the given array is empty, it should return an empty string. */
// const output = findShortestElement(['a', 'two', 'three']);
// console.log(output); // -->'a'
// function findShortestElement(arr) {
//     if (arr.length === 0) {
//         return '';
//     } else {
//         let shortestElement = arr[0];
//         for (let i = 0; i < arr.length; i++)
//         if (arr[i].length < shortestElement.length) {
//             shortestElement = arr[i];
//         }
//     return shortestElement;
//     }
// }


/* Question 11 // Write a function called "getLongestWordOfMixedElements". Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.
Notes:
    - If the array is empty, it should return an empty string ("").
    - If the array contains no strings; it should return an empty string. */
// const output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
// console.log(output); // -->'word'
// function getLongestWordOfMixedElements(arr) {
//     let longestWord = ' '
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > longestWord.length) {
//             longestWord = arr[i]
//         }
//     }
//     return longestWord
//   }


/* Question 12 // Write a function called "repeatString". Given a string and a number, "repeatString" returns the given string repeated the given number of times. */
// const output = repeatString('code', 3);
// console.log(output); // -->'codecodecode'
// function repeatString(string, num) {
//     if (num === 0) {
//         return '';
//     }
//     else if (num === 1) {
//         return string;
//     } else {
//         return string + repeatString(string, num-1);
//     }
//     return repeatString('code', 3);
// }


/* Question 13 // Write a function called "computeSumBetween". Given 2 integers, "computeSumBetween" returns the sum between the two given integers, beginning at num1, and excluding num2.
Notes:
    - The sum between 1 and 4 is 1 + 2 + 3 = 6.
    - If num2 is not greater than num1, it should return 0. */
// const output = computeSumBetween(2, 5); // 2 + 3 + 4 = 9
// console.log(output); // --> 9
// function computeSumBetween(num1, num2) {
//     if (num2 < num1 || num1 === num2) {
//         return 0;
//     }
//     let sum = 0
//     for (let i = num1; i < num2; i++) {
//         sum = sum + i;
//     }
//     return sum
// }


/* Question 14 // Write a function called "computePerimeterOfATriangle". Given 3 sides describing a triangle, "computePerimeterOfATriangle" returns its perimter. */
// const output = computePerimeterOfATriangle(6, 7, 10);
// console.log(output); // --> 23
// function computePerimeterOfATriangle(side1, side2, side3) {
//     return side1 + side2 + side3
//   }


/* Question 15 // Write a function called "computeAreaOfACircle". Given the radius of a circle, "computeAreaOfACircle" returns its area.
Notes:
    * Math.PI can be used for pi. */
// const output = computeAreaOfACircle(4);
// console.log(output); // --> 50.26548245743669
// function computeAreaOfACircle(radius) {
//     return Math.PI*(Math.pow(4, 2))
//   }


/* Question 16 // Write a function called "filterEvenElements". Given an array of numbers, "filterEvenElements" returns an array containing only the even numbers of the given array. */
// const output = filterEvenElements([2, 3, 4, 5, 6]);
// console.log(output); // --> [2, 4, 6]
// function filterEvenElements(arr) {
//     let newArray = arr.filter(function(x) {return x % 2 === 0});
//     return newArray
//     }

/* Question 17 // Write a function called "getLargestElement". Given an array, "getLargestElement" returns the largest number in the given array.
Notes:
    * It should return 0 if the array is empty. */
// const output = getLargestElement([5, 2, 8, 3]);
// console.log(output); // --> 8;
// function getLargestElement(arr) {
//     if (arr.length === 0) {
//         return 0;
//     }
//     let largest = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest)
//         largest = arr[i]
//     }
//     return largest
//   }

/* Question 18 // Write a function called "findShortestWordAmongMixedElements". Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.
Notes:
    - If there are ties, it should return the first element to appear in the given array.
    - Expect the given array to have values other than strings.
    - If the given array is empty, it should return an empty string.
    - If the given array contains no strings, it should return an empty string. */
// const output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
// console.log(output); // -->'two'
// function findShortestWordAmongMixedElements(arr) {
//     let shortestWord = '     '
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length < shortestWord.length) {
//             shortestWord = arr[i]
//         }
//     }
//     return shortestWord
//   }


/* Question 19 // Write a function called "getLargestNumberAmongMixedElements". Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.
Notes:
    - The array might contain values of a type other than numbers.
    - If the array is empty, it should return 0.
    - If the array contains no numbers, it should return 0. */
// const output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
// console.log(output); // --> 5
// function getLargestNumberAmongMixedElements(arr) {
    // let foundAnyNumbers = false;
//     let largest = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//       const value = arr[i];
//       if (typeof value !=='number') {
//         // just continue with the next iteration of the loop
//         continue;
//       }
//       // if we're here, a number was found
//       foundAnyNumbers = true;
//       if (value > largest) {
//         largest = value;
//       }
//     }
//     if (foundAnyNumbers === false) {
//       // no numbers were encountered,
//       return 0;
//     } else {
//       return largest;
//     }
//   }

/* Question 20 // Write a function called "multiplyBetween". Given 2 integers, "multiplyBetween" returns the product between the two given integers, beginning at num1, and excluding num2.
Notes:
    - The product between 1 and 4 is 1 * 2 * 3 = 6.
    - If num2 is not greater than num1, it should return 0. */
// const output = multiplyBetween(2, 5);
// console.log(output); // --> 24
// function multiplyBetween(num1, num2) {
//     let output = 1
//     if (num2 <= num1) {
//         return 0;
//     }
//     for (let i = num1; i < num2; i++) {
//         output *= i;
//     }
//     return output
//   }
