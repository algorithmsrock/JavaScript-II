// Complete the following functions.
/* eslint-disable*/
const nFibonacci = (n) => {
  switch (n) {
		case 0:
			return 1;
		case 1:
			return 1;
		default:
	    return nFibonacci(n - 1) + nFibonacci(n - 2);
	}
	
	// fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
};

const nFactorial = (n) => {
  if (n < 0)
		return -1;
	
	if (n === 0)
		return 1;
  
	else {
		return (n * nFactorial(n - 1));
	}	
	// factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
	const matchingLeaves = [];

	function checkmatches(leaves) {
		if (Object(leaves) === leaves) {
			 Object.keys(leaves).map(key => leaves[key]).forEach(child => {
				 checkmatches(child);
		  }); 
		}
		 else 
		 {
			 matchingLeaves.push(leaves);
		}
}
		checkmatches(obj); 

		 return matchingLeaves.every(value => value === matchingLeaves[0]);
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
