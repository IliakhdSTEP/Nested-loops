// TASK 1

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         console.log(i + " x " + j + " = " + i * j);
//     }
// }


 // TASK 2

// let numbers = [45, 128, 73, 128, 950, 45, 301, 67];
// let duplicates = [];

// for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//         if (numbers[i] === numbers[j] && !duplicates.includes(numbers[i])) {
//             duplicates.push(numbers[i]);
//         }
//     }
// }

// console.log(duplicates);

// // TASK 3

// let array1 = [120, 45, 673, 88, 512];
// let array2 = [673, 300, 45, 999, 88];

// for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//         if (array1[i] === array2[j]) {
//             console.log(array1[i]);
//         }
//     }
// }


 // TASK 4

// for (let i = 2; i <= 100; i++) {
//     let isPrime = true;

//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime === true) {
//         console.log(i);
//     }
// }


 // TASK 5

// let numbers2 = [542, 89, 1230, 67, 875, 320, 45, 990];

// let biggestDifference = 0;
// let firstNumber;
// let secondNumber;

// for (let i = 0; i < numbers2.length; i++) {
//     for (let j = i + 1; j < numbers2.length; j++) {
//         let difference = Math.abs(numbers2[i] - numbers2[j]);

//         if (difference > biggestDifference) {
//             biggestDifference = difference;
//             firstNumber = numbers2[i];
//             secondNumber = numbers2[j];
//         }
//     }
// }

// console.log(firstNumber, secondNumber, biggestDifference);