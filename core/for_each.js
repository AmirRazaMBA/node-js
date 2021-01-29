let my_array = ['person','women','man','camera','TV'];

// 1. foreach on array of elements
my_array.forEach(function(element){
    console.log(element);
})

// 2. foreach with external function as arg

let myFunc = function(element){
    console.log(element)
}

my_array.forEach(myFunc)

 
let another_myFunc = function(element, index, array) {
  console.log(index + ' : ' + element + ' - ' + array[index])
}
 
my_array.forEach(another_myFunc)