// console.log("question one")

// const sayHello = (str) => {
// return "hello!"
// }

// const callBack = (fn) => {
//     return sayHello()
// }

// console.log(callBack())

// console.log(question 2)
// const ignore = (str) => {
//     return "ignoring the callback"
// }
// const truOrNot = (statement) => {
//     if (statement === true) {
//         return true
//     } else {
//         return ignore()
//     }
// }
// console.log(truOrNot(1));

// const string = (str) => {
//     return "hi"
// }
// const thatManyTimes = (num) => {
//     return string() += num
// }
// console.log(thatManyTimes(3))
// const myForEach = (arr, callback) => {
//   for (let i = 0; i < arr.length; i++) {
//    callback(arr[i]);
// }

// const newFunction = (arr) => {
// let sum = 0
// myForEach(arr, (el) => sum += el)

// }
// return sum
// }

// console.log(newFunction([1,2,3]))
const myMap = (arr, cb) => {
    let result = [];
    for (let i=0; i<arr.length; i++) {
        result.push(cb(arr[i]));
    }
    return result
    }

const zeroFunction = (arr) => {
    return myMap(arr, (el) => {
        return 0;
    })
}
console.log(zeroFunction([1,2,3]));