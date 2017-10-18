/**
 * Confirm thee Ending Challange.
 *
 * 
 * Check if a string (first argument, str) 
 * ends with the given target string (second argument, target).
 *  
 */
function confirmEnding(str, target) {
	var checkPoint = str.length - target.length;
	if (str.substr(checkPoint) == target){
		return true;
	}
	else {
		return false;
	}
	console.log(str.substr(checkPoint));
 	var dog = "dog";
 //What exactly does substr do?
 /**
  * The substr() method returns the characters in a 
  * string beginning at the specified location through the 
  * specified number of characters.
  * It's zero based indexing. Therefore the first letter starts with 0.
  */
 	console.log(dog.substr(0,2));
  return str;
}




console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding('Connor', "r"));

