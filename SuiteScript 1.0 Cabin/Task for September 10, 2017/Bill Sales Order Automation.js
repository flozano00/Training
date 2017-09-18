/*
	Customer: 33
	Location: 02: Boston
	Item: ACC00003
	Write a script to automatically bill sales orders as soon as the orders are approved.
 */
/**
 * What did we learn today ? Transformation of Record.
 */



function afterSubmit (type){
	try{
	nlapiLogExecution('Audit', 'After Submit Function', 'Begin');
 	var recordId = nlapiGetRecordId();
 	var recordType = nlapiGetRecordType();
 	var recordObj = nlapiLoadRecord(recordType, recordId);
 	nlapiLogExecution('Debug', 'Record Object', 'Record Object: ' + recordObj);
	var status = recordObj.getFieldText("orderstatus");
  	nlapiLogExecution('Debug', 'Status', 'The status for the record is ' + status);
 	
 /**		recordObj.setFieldText('orderstatus', 'Pending Fulfillment');
 		var pendingFullfillment = recordObj.getFieldText('orderstatus');
 		nlapiLogExecution('Debug', 'Set Field Text: Pending Fullfillment', 'Switch: ' + pendingFullfillment);
 		
 		//nlapiTransformRecord(recordType, recordId, transformType);
*/ 		//var itemfull = nlapiTransformRecord('salesorder', recordId, 'itemfulfillment'); 
 	if (status == "Pending Fulfillment")
 	{
 		//Understand this Transform Record it's importance!
 		var fulfill =  nlapiTransformRecord('salesorder', recordId, 'itemfulfillment');
 	//Here is the Record ID of the transformed record.	
 	 	var id = nlapiSubmitRecord(fulfill);
 		//var filrecird = fulfill.getrecordID();
 		var fulFillmentobj  = nlapiLoadRecord('itemfulfillment', id);
 		var fulFillStatus= fulFillmentobj.getFieldText('shipstatus');
 		nlapiLogExecution('Debug', 'Status', 'The Shipment status of Item Fullfillment ' + fulFillStatus);
 			if (fulFillStatus == "Packed"){
 		var setShipment = fulFillmentobj.setFieldText('shipstatus', 'Shipped');
 		var shipmentUpdate = fulFillmentobj.getFieldText('shipstatus');
 		nlapiLogExecution('Emergency', 'Shipment Status', "shipment " + shipmentUpdate);
 		id = nlapiSubmitRecord(fulFillmentobj);
 	/**
 	 * 
 	 * Invoice Record can only be transformed via Sales Order not Item Fullfillment.
 	 */
 		var invrec =  nlapiTransformRecord('salesorder', recordId, 'invoice');
 		id = nlapiSubmitRecord(invrec);
 	//	var invobj =  nlapiLoadRecord('invoice', id);
 		//var invrecord = nlapiLoadRecord('invoice', id);
 		nlapiLogExecution('Debug', 'Invoice Status', "Invoice Status" + invrecord);
 		i 


 		nlapiLogExecution('Debug', 'Invoice Record', 'Invoice Record' + invrec);
}
 	};
 
  //var itemfull = nlapiTransformRecord('salesorder', recordId, 'itemfulfillment');
  //  nlapiLogExecution('Emergency', 'Item Fullfillment', "The Item Fullfillment: " + itemfull);
	nlapiSubmitRecord(recordObj, true, true);
	//var itemfull = nlapiTransformRecord('salesorder', recordId, 'itemfulfillment');



	nlapiLogExecution('Audit', 'After Submit Function', 'End');

	}
	catch(ex){
	nlapiLogExecution("Emergency", "Exception", "Exeception: " + ex);
	}
}