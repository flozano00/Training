netpay(800000, .3);
childsupport(6, 3);

function netpay(salary, tax){
	var netamount = salary * tax;
	var takehome = salary - netamount;
	if (takehome < 35000){
		console.log("low income.");}
	else if (takehome > 35000 && takehome < 50000 ){
		console.log("middle income.");
	}
	else if (takehome > 65000){
		console.log("High income");
	}
	else {
		console.log("Not available!")}
	};


function childsupport(kids,salary){
	var salarydeduct = salary / kids;
	if (salarydeduct % kids >= 0 ){
		console.log("no deduction's allowed!");
	}

}