//Add
function add(x,y){
	return x + y;
};

function addition(x,y){
	if(typeof add (x,y) === "string"){
	alert("This function only accepts Integers")
	}
	else {return x + y;}
}


//subtract
function subtract(x, y){
	return (x - y);
};

function subtraction(x, y){
	if(isNaN(subtract(x,y))  === true){
	alert("This function only accepts Integers");
	}
	else {return (x - y);}
}


//Multiplication
function multiply(x, y){
	return (x * y);
};

function multiplication(x,y){
	if(isNaN(multiply(x,y)) === true ){
		alert("This function only accepts Integers");
	}
	else {return (x * y);}
}


//Division
function divide (x, y){
	return (x / y);
};

function division(x, y){
	if(isNaN(divide(x,y)) === true){
		alert("This function only accepts Integers");
	}
	else {return (x / y);}
};


//Modulus(Division Remainder)
function mod(x, y){
	return x % y;
};

function remainder(x ,y){
	if (isNaN(mod(x,y)) === true){
		alert("This function only accepts Integers");
	}
	else {return (x % y);}
};



