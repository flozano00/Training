/**
 * Repeat a string repeat a string.
 * Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
 */




function repeatStringNumTimes(str, num) {
	/**
	 * The function allows the ability to repeat the string numerous times.
	 * Here we used the if function to solidify that the number has to be greater
	 * Then zero.
	 * What I learned from this challance?
	 * Our requirement was that if the num parameter is less then 0 return an empty string.
	 *  I learned that although strings aren't mutable we can return new strings.
	 *  For insance the string manipulation methods such as trim, slice, return new strings.
	 *  Therefor the if function allows me to set str = " ".
	 *  Within the function I'm not changing the characters of the string but I'm giving the string a new value.
	 * 
	 */
 if( num < 0){
 /*
  * The If checks to make sure that the number isn't negative Because if it is then you will get a negative.
  */
 	str = "";
 	return str;
 }
 	else {
 /**
  * The repeat method allows me to repeat the string numerous times with just 1 parameter.
  * 
  */
   	var strConcat = str.repeat(num);
   	return strConcat;
 	}

}

console.log(repeatStringNumTimes("4 times ", 4));
console.log(repeatStringNumTimes("abc", 0));