/**
 * How do you scan each Scheduled Sales Order?
 */




function salesOrderApproval_schedule(type){
nlapiLogExecution("Audit", "Sales Order Approval Schedule", "Begin");
	try{
var recordType = nlapiGetRecordType();
var recordId = nlapiGetRecordId();

nlapiLogExecution("Debug", "The Record Type is: ", "Record Type" + recordType);
nlapiLogExecution("Debug", "The Record Id is: ", "The Record ID: " + recordId);
var salesObject = nlapiLoadRecord(recordType, recordId);
nlapiLogExecution("Debug", "The Sales Object is ", "The Sales Object" + salesObject);





nlapiLogExecution("Audit", "Sales Order Approval Schedule", "End");
	}
	catch(exception){
	nlapiLogExecution("Emergency", "The Emergency exception is: ", "The exception is " + exception);
	}
}