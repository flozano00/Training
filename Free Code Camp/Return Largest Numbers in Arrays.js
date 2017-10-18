function largestOfFour(arr) {
/**
 * What is the forEach method used for?
 * The forEach() method executes a provided function once for each array element.
 * Here we named the argument arr for readibility.The arr = array and when are using methods to them. The methods needed to contain callback functions.
 * For instance the forEach method needed a callback function therefore in this case it will be the array we are passing in.
 * Understand callback functions.                                             
 */		
	arr.forEach(function(arr1){
	/**
	 * Understand the sort method.		
	 * The sort method allows for the arguements of the array to be organized in either decending order or ascending order.
	 * 
	 */
		arr1.sort(function(a,b){
			return b- a;
		});
	});
	/**
	 * Here we use the splice method for the sub array. Within the splice method there are 2 arguments.
	 * The first argument is the first starting point where the portion of the array will be removed. In this case index 1.
	 * The second Arguement is the ending point of the splice removal method. In this case it will be 3.
	 * Therefore the results will add us the ability to remove the second element[1] all the way to the 3rd index.
	 * Rememebr the first index will not be removed due to the fact that elements are [0] basing. Therefore the [0]
	 * Is the first part.
	 * 
     *                         
	 */
	arr.forEach(function(arr2){
		arr2.splice(1,3);
	})
	/**
	 * The reduce Method. 
	 *
     *
	 */
	arr = arr.reduce(function(arg1, arg2){
		return arg1.concat(arg2);
	})
  // Question: What is the Reduce Method for ? Saturday, September 9, 2017
  // Awnser: ??????
  return arr;
};

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));