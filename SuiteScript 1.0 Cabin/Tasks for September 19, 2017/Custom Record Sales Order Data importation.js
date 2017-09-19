function afterSubmit(type){
nlapiLogExecution("audit","After Submit", "Begin");
	try{
	var salesId = nlapiGetRecordId();
	var salesType = nlapiGetRecordType();
	var salesObj = nlapiLoadRecord(salesType, salesId);
nlapiLogExecution('Debug', 'Sales Object', salesObj);
	va
 	var date = salesObj.getFieldValue("trandate");
    var itemcount = salesObj.getLineItemCount('item');
nlapiLogExecution('Debug', 'Item Count', itemcount);
 	for(var i = 1;  i <= itemcount; i++) {
		var item = salesObj.getLineItemText('item', 'item', i);
		nlapiLogExecution('Debug', 'Item', "Item " + item);
		nlapiLogExecution('Debug', 'Date: ', date);
		var customSalesOrder = nlapiCreateRecord('customrecord_hc_frank_customrecord_sales');
		nlapiLogExecution('DEBUG','custom Record',customSalesOrder);
		customSalesOrder.setFieldValue('custrecord_hc_frank_date', date); //Set Date Value.
		customSalesOrder.setFieldValue("custrecord_hc_frank_itemname", item); //Set Item Value.
		// nlapiLogExecution('Debug', 'Date', "Date" + cusDate);
/**
 * ------------------------NLAPISUBMITRECORD ON FOR LOOP IS EXTREMELY IMPORTANT ---------------------------------------------------------------
 * YOU WILL RECEIVE AN ERROR WHEN IT'S OUTSIDE OF THE LOOP !!!!!!!!!!!!!!!!!!!!!
 * Code: SSS_MISSING_REQD_ARGUMENT Details: record will issue.
 */
		nlapiSubmitRecord(customSalesOrder, true, true);
	}
//nlapiSubmitRecord(customSalesOrder, true, true);
nlapiLogExecution("audit","After Submit", "End");
	}
	catch(e){
	nlapiLogExecution("Debug", "Exception: ", e);
	}
}



