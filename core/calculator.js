
// syntax
// exports.<function_name> = function (argument_1, argument_2, .. argument_N) {
//     /** function body */
// };

// Returns addition of two numbers
exports.add = function (a, b) {
    return a+b;
}; 
 
// Returns difference of two numbers
exports.subtract = function (a, b) {
    return a-b;
}; 
 
// Returns product of two numbers
exports.multiply = function (a, b) {
    return a*b;
};

exports.myDateTime = function () {
    return Date();
  };