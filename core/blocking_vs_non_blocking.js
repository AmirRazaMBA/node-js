var fs = require("fs");

var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("In case of >>>>> BLOCKING <<<<< this line will print last : Program Ended");


fs.readFile('input.txt', function (err, data) 
{
   if (err) return console.error(err);
   console.log(data.toString());
   console.log("End of file at last I am free.");
});

console.log("\n")
console.log("In case of ***** NON BLOCKING ***** this line will print first : Program Ended");