function afterSubmit(type){
nlapiLogExecution("audit","After Submit", "Begin");
	try{
	var context = nlapiGetContext();
	nlapiLogExecution('Debug', 'remaining Usage', context.getRemainingUsage());
	var salesId = nlapiGetRecordId();
	var salesType = nlapiGetRecordType();
	var salesObj = nlapiLoadRecord(salesType, salesId);
 	var checkBox = salesObj.getFieldValue("custbody_hc_frank_customrecordcreated");
 	nlapiLogExecution('Audit', 'Type: ', type);
 	nlapiLogExecution('Audit', 'CheckBox: ', "CheckBox Status: " + checkBox);
 	nlapiLogExecution('Debug', 'Sales Object', salesObj); 



 	if (checkBox == "T" && type == "create"){
 		var date = salesObj.getFieldValue("trandate");
   	    var itemcount = salesObj.getLineItemCount('item');
   	    var customer = salesObj.getFieldText('entity');
        var job = salesObj.getFieldText('job');
        var status = salesObj.getFieldText('orderstatus');
        var memo = salesObj.getFieldValue("memo");
        var po = salesObj.getFieldValue("otherrefnum");
        var orderNumber = salesObj.getFieldValue("tranid");


nlapiLogExecution('Debug', 'Order Number: ', orderNumber);
nlapiLogExecution('Debug', 'Job', 'Job: ' + job);
nlapiLogExecution('Debug', 'po', 'PO: ' + po);
nlapiLogExecution('Debug', 'Memo', "Memo: " + memo);
nlapiLogExecution('Debug', 'Customer: ', "Customer: " + customer);
nlapiLogExecution('Debug', 'Item Count', itemcount);
 	       for(var i = 1;  i <= itemcount; i++) {
		    var item = salesObj.getLineItemText('item', 'item', i); // Get Item Value || Text.
		    nlapiLogExecution('Debug', 'Item', "Item " + item);
		    nlapiLogExecution('Debug', 'Date: ', date);
		    var customSalesOrder = nlapiCreateRecord('customrecord_hc_frank_customrecord_sales');
		    nlapiLogExecution('DEBUG','custom Record',customSalesOrder);
		    customSalesOrder.setFieldValue('custrecord_hc_frank_date', date); //Set Date Value.
		    customSalesOrder.setFieldValue("custrecord_hc_frank_itemname", item); //Set Item Value.
		    customSalesOrder.setFieldValue("custrecord_hc_frank_customername", customer); //Set Customer Name.
		    customSalesOrder.setFieldValue("custrecord_hc_frank_status", status); //Set Status
		    customSalesOrder.setFieldValue("custrecordcustrecord_hc_frank_memo", memo); //Set Memo
		customSalesOrder.setFieldValue("custrecord_hc_frank_po", po); //Set PO.
		customSalesOrder.setFieldValue("custrecord_hc_frank_job", job); //Set Job.
		customSalesOrder.setFieldValue("custrecord_hc_frank_ordernumber", orderNumber);
		// nlapiLogExecution('Debug', 'Date', "Date" + cusDate);
/**
 * ------------------------NLAPISUBMITRECORD ON FOR LOOP IS EXTREMELY IMPORTANT ---------------------------------------------------------------
 * YOU WILL RECEIVE AN ERROR WHEN IT'S OUTSIDE OF THE LOOP !!!!!!!!!!!!!!!!!!!!!
 * Code: SSS_MISSING_REQD_ARGUMENT Details: record will issue.
 */
		nlapiSubmitRecord(customSalesOrder, true, true);
	}







}

nlapiLogExecution("audit","After Submit", "End");

}

//nlapiSubmitRecord(customSalesOrder, true, true);

		catch(e){
	nlapiLogExecution("Debug", "Exception: ", e);
	}
}



