/**
 * Truncate a String Challange.
 */


/**
 * Understand what each method within a string does.
 */

function truncateString(str, num){
// Here the if statement is telling me. "When the length of the string is greater then the num designated in the second parameter do this"
	if(str.length > num){
//Here we have a nested if . The nested if allows me  to add another condition within my if statement. It allows for a more construct if statement.
		if (num <= 3){
			str = str.slice(0, num) + "...";
		}
	else {
		str = str.slice(0, num - 3) + "...";
	}
	}
	return str;
}

console.log(truncateString("Absolutely Longer", 3));