/**
 * Free Code Camp: Title Case a Sentence
 */




/**
 * Understanding the Map Method. Very common scenario
 * A higher Order Function. It goes through an array and transforms the element.
 */

function titleCase(str) {
// Here we used declared a variable with an array.
// Make sure to rename the array [] with new Array.
  var answer = new Array;
//Make sure that the methods are in order you must first Lower Case because the method only works for string and not arrays.
//Split turns the string into arrays and therefore the spacing " " is what seperates each word into an individual element.
  var split = str.toLowerCase(). split(" ")
  var upperCase = split.map(capitalize);
//With the awnser variable we used map to transform all the elements of split into the answer array. We also used join to joing the array together into one string.
//These 2 methods have to be in precedent order to improve the value.
  answer = split.map(capitalize).join(" ");
//Here we are joining the array and turning it into one string.

  return answer;
}

console.log(titleCase("fraNk loZaNo agudelo marcos renderos and victor marte"));


function capitalize (x){
	firstLetter = x.charAt(0);
	capitalLetter = firstLetter.toUpperCase();
	x = x.replace(firstLetter, capitalLetter);
	return x;
}

console.log(capitalize("working"));