// function declaration 
// function add(first, secont){
//     const total = first + secont;
//     return total;
// }

// function expression
const add1 = function add1(first, secont){
    const total = first + secont;
    return total;
}

// annonimas funtion or without function name 
const add2 = function add2(first, secont){
    const total = first + secont;
    return total;
}


const add3 = function(first, secont){
    return first + secont
}
// const result = add2(5, 15)
// console.log(result)

// arrow function 
const add4 = (first, secont) => first + secont;
const result = add4(5, 15)
console.log(result)