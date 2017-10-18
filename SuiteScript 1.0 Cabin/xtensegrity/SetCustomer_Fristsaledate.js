function cust_beforeload(type, form, request) 
{
       var recordType = nlapiGetRecordType();
       nlapiLogExecution('DEBUG','source_afterSubmit','recordType ='+recordType);
	var recordId   = nlapiGetRecordId();
	nlapiLogExecution('DEBUG','source_afterSubmit','recordId ='+recordId);
	var custObj      = nlapiLoadRecord(recordType,recordId);
	nlapiLogExecution('DEBUG','source_afterSubmit','custObj ='+custObj);
	   
	      var cust_first_date = _getcustdate(recordId);
	      nlapiLogExecution('DEBUG','source_afterSubmit','cust_first_date ='+cust_first_date);
	      var myDate = nlapiStringToDate(cust_first_date);
	      nlapiLogExecution('DEBUG','source_afterSubmit','myDate ='+myDate);
	      var stringdate = nlapiDateToString(myDate);
	      nlapiLogExecution('DEBUG','source_afterSubmit','stringdate ='+stringdate);
	    // nlapiSetFieldValue('custentity_date_of_first_sale',myDate);
	 //   nlapiSetFieldValue('date_field_id', date);
		  nlapiSetFieldValue('custentity_date_of_first_sale',myDate);
		  var whatsin = nlapiGetField('custentity_date_of_first_sale');
		  nlapiLogExecution('DEBUG','source_afterSubmit','whatsin ='+whatsin);
	//nlapiSubmitRecord(newCustomRecord, false, true);
}




function _getcustdate(recordId)
{
var customerSearch = nlapiSearchRecord("customer",null,
		[
		    ["transaction.type","anyof","SalesOrd"], 
   "AND", 
   ["internalid","anyof",recordId]
		], 
		[
		   new nlobjSearchColumn("trandate","transaction","MIN"), 
		   new nlobjSearchColumn("entityid",null,"GROUP").setSort(false)
		]
		);
nlapiLogExecution('DEBUG','source_afterSubmit','customerSearch ='+customerSearch);
		if(_logValidation(customerSearch))
	{
		var cust_date = customerSearch[0].getValue('trandate','transaction','MIN');
		nlapiLogExecution('DEBUG','source_afterSubmit','cust_date ='+cust_date);
		return cust_date;
	}

}


function _logValidation(value)
{
	if(value!=null && value!=undefined && value!='' && value!='NaN' && value!=' ')
  	{
   		return true;
  	}//end of if  
  	else   
  	{
   		return false;
  	}//end of else
}//end of function _logValidation