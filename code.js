/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const TheResult = [];
  
    for(let i = 1; i <= n; i++) {
        
        if (i%3 == 0 && i%5 == 0) {
            TheResult.push("FizzBuzz")
        }
        else if (i%5 == 0) {
            TheResult.push("Buzz")
        }
        else if (i%3 == 0) {
            TheResult.push("Fizz")
        }
        else {
            TheResult.push(i.toString())
        }
        
     }
    return TheResult
};
