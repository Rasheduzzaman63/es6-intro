const num = Math.max(12, 454, 545, 45, 58)
// console.log(num)

// const numbers = [12, 454, 545, 45, 58]
// const max = Math.max(...numbers);
// // console.log(max)

// const numbers1 = [...numbers];
// numbers1.push(888)
// console.log(numbers);
// console.log(numbers1)


const numbers = [12, 454, 545, 45, 58]
const numbers2 = [...numbers];
console.log(numbers2)
const numbers3 = [111, 222, ...numbers, 212, 969]
console.log(numbers3)