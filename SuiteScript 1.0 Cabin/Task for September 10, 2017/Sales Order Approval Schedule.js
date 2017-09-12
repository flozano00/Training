


function salesOrderApproval_schedule(type){

	try{
nlapiLogExecution("Audit", "Sales Order Approval Schedule", "Begin");

var recordType = nlapiGetRecordType();
var recordId = nlapiGetRecordId();

nlapiLogExecution("Debug", "The Record Type is: ", "Record Type" + recordType);
nlapiLogExecution("Debug", "The Record Id is: ", "The Record ID: " + recordId);


var salesObj = nlapiLoadRecord(recordType, recordId);
nlapiLogExecution("Debug", "The Sales Object is ", "The Sales Object" + salesObj);
var salesStatus = salesObj.getFieldText('orderstatus');
nlapiLogExecution('Debug', 'Sales Status', 'The Sales Status : ' + salesStatus);
nlapiLogExecution('Emergency', 'Status Change', 'Begin');
if (salesStatus == "Pending Approval"){
//Issue is that you we were using setFieldValue
//Make sure to use setFieldText if this issue persist.
//nlapiSetFieldText('orderstatus', 'Pending Fulfillment');
	salesObj.setFieldText('orderstatus', 'Pending Fulfillment');
	var approved = salesObj.getFieldValue('orderstatus')
//Always make sure to get the field value of the approved before doing log executions!
	nlapiLogExecution('Debug', 'Sales Status Change: ', "The Approved Status " + approved);
	nlapiSubmitRecord(salesObj, true, true);
	//nlapiLogExecution('Debug', 'Sales Status Change: ', "The Approved Status " + approved)
}


nlapiLogExecution('Emergency', 'Status Change', 'End');









nlapiLogExecution("Audit", "Sales Order Approval Schedule", "End");

	}
	catch(exception){
nlapiLogExecution("Emergency", "The Emergency exception is: ", "The exception is " + exception);
	}
}




