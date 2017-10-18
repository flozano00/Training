function afterSubmit(type){
 	var recordId = nlapiGetRecordId();
 	var recordType = nlapiGetRecordType();
 	var recordObj = nlapiLoadRecord(recordType, recordId);
/**
 * Create Logs to know the actual Record Id # & Record Type.
 * 
 */
 		nlapiLogExecution('Debug', 'Record ID = ', recordId);
 		nlapiLogExecution('Debug', 'record Type =', recordType);

/**
 * In order to retrieve the Sales Order ID we makes sure that we
 * are getting the proper Record ID. In this case it will be 
 * created from.
 */

  var invoiceCreatedFrom = recordObj.getFieldValue('createdfrom');

/**
 * The created from field is the link that will allow us to retrieve information from
 * Sales Order Record.
 * 
 */
  var salesOrderObj = nlapiLoadRecord('salesorder', invoiceCreatedFrom);

  /**
   * Here we will retrieve the field from the Sales Order Record.
   */
  var salesOrderDate = salesOrderObj.getFieldValue('trandate');

  /**
   * Here we will replace the Date from the Invoice to the date of Sales Order
   */
  var myDate = nlapiStringToDate(salesOrderDate);
  var setInvoiceValue = recordObj.setFieldValue('trandate', myDate);
  /**
   * Always make sure that the nlapiSubmitRecord Works!
   */
  nlapiSubmitRecord(recordObj, true, true);
};