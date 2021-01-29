// process.argv is the array that contains command line arguments
// print all arguments using forEach
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
// run like this node .\command-line-args 1 2 3 4 5