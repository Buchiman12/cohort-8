// let students = ["buchi", "onye", "aniekwe", "anyi", "chuks", "mom", "aunty"]
// console.log(students[1])

// //substituting an item to an array

// students[1] = "ada"

// //adding an item to an array
// students.push("nzube") //push adds an item to the back of an array

// console.log(students)
// students.unshift("breeze")//adding an item to the front of the array
// console.log(students)

// //removing items

// students.pop()//removes the last item
// console.log(students)
// students.shift() //removes the first item

// //includes, indexOf
// console.log(students.includes("nzube")) 
// console.log(students.indexOf("nzube"))

// console.log(typeof(students))
// console.log("hi her"["hi her".length -1])

// // reverse, sort, slice, splice

// console.log(students.reverse())
// console.log(students.sort())
// // console.log(students.slice(1, 3)) // start from index 1 to 3
// console.log(students.splice(1, 2)) // start from index 1 to 3

// let student = ["buchi", "onye", "aniekwe", "anyi", "chuks"]
// console.log(student.splice(1, 2))
let studentss = ["buchi", "onye", "aniekwe", "anyi", "chuks"]
console.log(studentss.splice(1, 2))

// higher order array methods
//map, filter, reduce, forEach, findIndex, some, every

const numbers = ["1", "2", 3, 4, 5]
const doubleNumbers = numbers.map((num) => num * 2)
console.log(doubleNumbers)
// const double = numbers.map((num) => {
//     return num * 2
// })

// filter method
const evenNumber = numbers.filter((num) => num % 2 === 0)
console.log(evenNumber)

//find method
const complexion = ["dark", "fair", "medium", "dark", "fair"]

const findFirstDark = complexion.find((item) => item == "dark")
console.log(findFirstDark) // it will return the first element it found in the array, returns undefined when it cant find the item

//findIndex
const findIndexOfDark = complexion.findIndex((item) => item =="dark")
console.log(findIndexOfDark) // if it didnt find the item it will return -1
// console.log(findIndexOfDark.indexOf("dark"))

//reduce
const nums = [700, 300, 500, 1000, 2000]
const sum = nums.reduce((accumulator, currentValute) => accumulator + currentValute, 0)
/**
 * accumulator stores the current value 
 * that is running while cuurentValue is the current value that is
 * it currently iterating over in the arraay
 */
console.log(sum)

const multiply = nums.reduce((acc, cur) => acc * cur, 1)
console.log(multiply)

const towns = ["awka", "onitsha", "aba"]
const myTown = towns.map((town) => `i'm from ${town}`);
console.log(myTown)

console.log("welcome back to the class")