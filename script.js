const extendHex = (shortHex) => {
  // write your code here
	let arr = shortHex.split('');
	let result = ['#'];
	if(arr[0].toUpperCase() == arr[0]){
		for(let i = 1; i < arr.length; i++){
			result.push(arr[i].toUpperCase());
			result.push(arr[i].toUpperCase());
			
		}
		return result.join('');
	}
	for(let i = 0; i < arr.length; i++){
		if(i == 0){
			if(arr[0] != "#"){
				result.push(arr[0]);
				result.push(arr[0]);
			}
		}else{
		result.push(arr[i]);
		result.push(arr[i]);
		}
	}
	return result.join('');
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
