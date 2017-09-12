/**
 * User Event Scripts
 * 
 */

function analyze_beforeload(type){
	nlapiLogExecution('Audit', 'Analyze Before Load function: ', "Begin");
	try {
	var terms = nlapiGetFieldValue('terms');
	var paymentMethod = nlapiGetFieldValue("paymentmethod");
	
	nlapiLogExecution('Debug', 'Terms: ', "The terms are : " + terms);
	nlapiLogExecution('Debug', 'Payment Method', "The Payment Method " + paymentMethod);
 	nlapiLogExecution('Audit', 'Analyze Before Load function: ', 'End');
	}
	
	catch(exception){
		nlapiLogExecution('Audit', "Exception: ", "Exception error: " + exception);
	}
}










/**
 * Task 4. 
 * If the customer has terms associated, then write a script to display a pop-up message saying, 
 * “you cannot select a payment method” if a user selects a payment method on the sales order and Invoice. Finished
 * 
 */

/**
 *  This is a client Script 
 */

function saveRecord(){
	try{
	nlapiLogExecution('Audit', 'SaveRecord', 'Begin')
	var terms = nlapiGetFieldValue('Terms');
	var paymentMethod = nlapiGetFieldValue('paymentmethod');
//Why did I keep on getting pop ups regardless of the scneario?
//We set the terms variable = to "" to make sure that the value is blank.
	if (terms !== null && paymentMethod >= 1 && terms != '') {
	nlapiLogExecution('Debug', 'Terms', 'The Terms are ' + terms);
	nlapiLogExecution('Debug', 'paymentMethod', 'The paymentMethod' + paymentMethod);
		alert("Please make sure not to add a payment method.");
		return false;
	}
	else{
		 return true;
	}

	nlapiLogExecution('Audit', 'SaveRecord', 'End');
	}
	catch(exception){
		nlapiLogExecution('Debug', 'exception: ', "The Exception is : " + exception);
	}
}