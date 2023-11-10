const extendHex = (shortHex) => {
  // write your code here
	let arr = shortHex.split('');
	let result = ['#'];
	for(let i = 1; i < arr.length; i++){
		result.push(arr[i]);
		result.push(arr[i]);
	}
	return result.join('');
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
