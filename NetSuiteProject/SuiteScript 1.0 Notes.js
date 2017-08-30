/**
 * Why are you Creating this ?
 * This will allow me to provide better use in regards to Suite Scripting and understanding Record Id's and Types.
 */

/**
 * Can I put variables in global scope in regards to these API calls?
 * Awnser: Yes you can.
 */
/**
 * What are these two variables For?
 * recordId = will give me the record Id.
 * recordType = Will get me the record Type.
 */
var recordId = nlapiGetRecordId();
var recordType = nlapiGetRecordType();

//In beforeLoad we strictly use nlapiGetFieldValue  for example
//var phone = nlapiGetFieldValue('');

function beforeLoad (type){

nlapiLogExecution('Debug', 'This is the Record Id = ', recordId);
nlapiLogExecution('Debug', "This is the Record Type = ", recordType);


};

/**
 * The Individual Wants to know the Reference Order Number of the Sales Order.
 * Awnser: This worked Aswell!
 */
/**
 * On afterSubmit we have to use nlapiLoadRecord to get the information.
 */

function afterSubmit (type){

	var recObj = nlapiLoadRecord(recordType, recordId);
 	var referencerec = recObj.getFieldValue("otherrefnum");
 	nlapiLogExecution('Debug', "This is the Reference Number = ", referencerec);
 	var setLabel = recObj.setFieldValue('custbody27', referencerec);
 	nlapiLogExecution('debug', 'Label Has set too = ', setLabel);
 	nlapiSubmitRecord(recObj, true, true);


}

//--------------------------------------------------------------------------------------
/**
 *  Monday August 28, 2017
 */

/**
 * What did you learn on Monday August 28, 2017.
 * Here we learned how to extract information from the metadata in regards to objects.
 * In this case Venky taught me how to use the JSON.stringify method that allows me to use extract all the information from the newRecord.
 * On Line 80 we used the JSON method to allow us to extract information.
 * 
 */

var recordId = nlapiGetRecordId();
var recordType = nlapiGetRecordType()

function beforeSubmit(type){
	nlapiLogExecution('debug', "Record Id = ", recordId);

};



function afterSubmit(type){
nlapiLogExecution('debug', "Record Type = ", recordType);

 var currentRecord = nlapiGetNewRecord();
 nlapiLogExecution('debug', 'current record value', JSON.stringify(currentRecord));
 var rec = nlapiLoadRecord(nlapiGetRecordType(), nlapiGetRecordId());//, initializeValues)
 nlapiLogExecution('debug', 'rec value', JSON.stringify(rec));
 var referenceNumber = currentRecord.getFieldValue('otherrefnum');
 nlapiLogExecution('debug', 'Reference number = ' , referenceNumber);
 if (referenceNumber == "0002"){

 rec.setFieldValue("otherrefnum", "0003");
 nlapiLogExecution('debug','Status = ', referenceNumber);
 	var newRec = nlapiSubmitRecord(rec, false, true);

 //The JSON.stringify helps anaylze the object in JSON format Venky used this for a better analysis of the properties Names and Values.
 	nlapiLogExecution('debug', 'new Record', JSON.stringify(newRec));
}


};
//------------------------------------------------------------------------------------
//Notes Tuesday, August 29, 2017


function afterSubmit(type){
	try {
		var i_context = nlapiGetContext();
	nlapiLogExecution('debug', 'afterSubmit()','The context is : '+i_context);

	}
	catch (exception){
 	nlapiLogExecution('Debug', 'catch Exception', 'exception : '+exception);


	}
}



function _logvalidation(value){
	if (value != null && value != undefined && value != Infinity && value != " " && value != NaN && value != 'Infinity' && value != 'null' && value != 'undefined'){
		return true;
	}
	else {
		return false;
	}
}


//------------------------------------------------------------------------------------------------

/**
 * Wednesday August 30, 2017
 * What did I learn : Catch?
 */

function afterSubmit(type){
	try {
		var i_context = nlapiGetContext();
	nlapiLogExecution('debug', 'afterSubmit()','The context is : '+i_context);

	}
	catch (exception){
 	nlapiLogExecution('Debug', 'catch Exception', 'exception : '+exception);


	}
}



function _logvalidation(value){
	if (value != null && value != undefined && value != Infinity && value != " " && value != NaN && value != 'Infinity' && value != 'null' && value != 'undefined'){
		return true;
	}
	else {
		return false;
	}
}

/**
 * I also learned how to use the Throw function within the try catch error. This will allow me to catch better errors.
 * The throw function allows me to catch the error message and send it as user event.
 * We also learned the nlapiGetLineItem Value aswell the beforeload function.
 * Within the beforeload function we have to use the nlapiGetFieldValue & nlapiGetFieldValue.
 * 
 */


/**
 * What did you Learn?
 * I learned the try ,catch, throw functions within SuiteScript. This only works on User Event scripts by allowing me to display error
 * I also Learned alot of the 
 */



/**
 * 
 * Deployment on Sales Order.
 * 
 */
function beforeSubmit(type){
	try {
		var phoneNumber = nlapiGetFieldValue('custbody16');
		var email = nlapiGetFieldValue('custbody14');
 		nlapiLogExecution('Debug', 'Phone Number : ', +phoneNumber);
 		nlapiLogExecution('Debug', 'Email :', +email);
 		if (email == 0 && phoneNumber == 0){
 //In User Event Scripts throw work's not alert.
 			throw("Please Enter Email & Phone Number.");
 //The throw initiates the expected error. It is important to use through so that the program will not allow the submit function.
 			return false;
 		}
 		else if (email == 0){
 			throw ("Please Enter Email");
 		}
 		else if (phoneNumber == 0){
 			throw ("Please Enter Phone");
 		}
 //Know the difference between nlapiGetCurrentLineItemValue and LineItemValue.
 	var ifCheckBox = nlapiGetLineItemValue('item', 'custcol_hc_salesorder_ifremoved',1);
 	nlapiLogExecution('Debug', 'If Check Box: ', "Check Box(T/F) : " + ifCheckBox);
 		if (ifCheckBox == 'T'){
 			nlapiRemoveLineItem("item", 1);

 		}


 		
}
	catch (exception){
		nlapiLogExecution('Debug','Exception' , 'Exception: ' + exception);
		if(exception == "Please Enter Phone" || exception == "Please Enter Email" || exception == "Please Enter Email & Phone Number.");
//This concept is important because through will have the ability to send out the message.
			throw exception;
	}
};





