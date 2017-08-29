/**
 * Why are you Creating this ?
 * This will allow me to provide better use in regards to Suite Scripting and understanding Record Id's and Types.
 */

/**
 * Can I put variables in global scope in regards to these API calls?
 * Awnser: Yes you can.
 */

var recordId = nlapiGetRecordId();
var recordType = nlapiGetRecordType();



function beforeLoad (type){

nlapiLogExecution('Debug', 'This is the Record Id = ', recordId);
nlapiLogExecution('Debug', "This is the Record Type = ", recordType);


};

/**
 * The Individual Wants to know the Reference Order Number of the Sales Order.
 * Awnser: This Worked Aswell!
 */

function afterSubmit (type){

	var recObj = nlapiLoadRecord(recordType, recordId);
 	var referencerec = recObj.getFieldValue("otherrefnum");
 	nlapiLogExecution('Debug', "This is the Reference Number = ", referencerec);
 	var setLabel = recObj.setFieldValue('custbody27', referencerec);
 	nlapiLogExecution('debug', 'Label Has set too = ', setLabel);
 	nlapiSubmitRecord(recObj, true, true);


}


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