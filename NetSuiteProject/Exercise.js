//Add


function addition(x,y){
	var add = (x + y);
	if(typeof add === "string"){
	alert("This function only accepts Numbers");
	}
	else {return add;}
}


//subtract

function subtraction(x, y){
	var subtract = (x - y);
	if(isNaN(subtract) === true){
	alert("This function only accepts Numbers");
	}
	else {return subtract;}
}


//Multiplication

function multiplication(x,y){
	var multiply = (x * y);
	if(isNaN(multiply) === true ){
		alert("This function only accepts Numbers");
	}
	else {return multiply;}
}


//Division
function divide (x, y){
	return (x / y);
};

function division(x, y){
	if(isNaN(divide(x,y)) === true){
		alert("This function only accepts Numbers");
	}
	else {return (x / y);}
};


//Modulus(Division Remainder)

function remainder(x ,y){
	var mod = (x % y);
	if (isNaN(mod) === true){
		alert("This function only accepts Numbers");
	}
	else {return mod;}
};



