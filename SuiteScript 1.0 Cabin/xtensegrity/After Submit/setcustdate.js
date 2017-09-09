//First find the field Id's! allcoate them.
//Williams Trading id : 884 Threshold: $20,000


function source_afterSubmit() 
{
	//Honey Plance and Nalcor does this portion of the script from Leader Shamzilla
//Here he is setting up the recordType in regards to deployment.
	var recordType = nlapiGetRecordType();
//Here he is retrieving the record Id.
	var recordId   = nlapiGetRecordId();
//Here he is loading the record. Why is he using soObj?
	var soObj      = nlapiLoadRecord(recordType,recordId);
//Where is he getting the field id "entity"? 
	var customer = soObj.getFieldValue('entity');
	
	
	nlapiLogExecution('DEBUG','source_afterSubmit()','customer ='+customer);
	//Here he getting using soOBj is extract the information from the get field Id. thus the customer is soObj.getFieldValue('entity');	
		if (customer == '1778' || customer == '1781')
		{
//Why does he use nlapiLoadRecord?
	var custObj = nlapiLoadRecord('customer',customer);
//Why does he use nlapiLogExecution?
	nlapiLogExecution('DEBUG','source_afterSubmit()','custObj ='+custObj);
//Here he is using custObj which is nlapiLoadRecord and then he is retrieving the value for deposit balance.	
	var depositbal = custObj.getFieldValue('depositbalance'); //deposit balance has to be changed here. Field called Deposit Balance
//Why does he use nlapiLogExecution.
	nlapiLogExecution('DEBUG','source_afterSubmit()','depositbal ='+depositbal);
	var unbilledord = custObj.getFieldValue('unbilledorders'); //unbilled orders has to be changed here this is field : unbilled Orders
	nlapiLogExecution('DEBUG','source_afterSubmit()','unbilledord ='+unbilledord);
	var custdate = custObj.getFieldValue('custentity43');
	nlapiLogExecution('DEBUG','source_afterSubmit()','custdate ='+custdate);
//Why does he use parseFloat?
	var difference = parseFloat(depositbal) - parseFloat(unbilledord);
//if the difference is below 25000 and it is not the custdate then execute this if statement.	
	if (difference < 25000  && !(_logValidation(custdate)))
	{
		var soCreateddate = soObj.getFieldValue('trandate');
		nlapiLogExecution('DEBUG','source_afterSubmit()','soCreateddate ='+soCreateddate);
		//custObj.setFieldValue('custentity43',soCreateddate);
		nlapiSubmitField('customer',customer,'custentity43',soCreateddate); //Cust43 is Last Transaction Date
		
		
	}
	
		}
		
	//-----------------------------------------------------------------------------------------------------------------------	
		
	//Naitonal Video goes here	
		if (customer == '1397')
		{
	var custObj = nlapiLoadRecord('customer',customer);
	nlapiLogExecution('DEBUG','source_afterSubmit()','custObj ='+custObj);
	
	var depositbal = custObj.getFieldValue('depositbalance'); //deposit balance has to be changed here. Field: deposit Balance
	nlapiLogExecution('DEBUG','source_afterSubmit()','depositbal ='+depositbal);
	var unbilledord = custObj.getFieldValue('unbilledorders'); //unbilled orders has to be changed here this is field : unbilled Orders.
	nlapiLogExecution('DEBUG','source_afterSubmit()','unbilledord ='+unbilledord);
	var custdate = custObj.getFieldValue('custentity43'); //Cust 43 is last Transaction date
	nlapiLogExecution('DEBUG','source_afterSubmit()','custdate ='+custdate);
	var difference = parseFloat(depositbal) - parseFloat(unbilledord);
	
	if (difference < 0  && !(_logValidation(custdate)))
	{
		var soCreateddate = soObj.getFieldValue('trandate');
		nlapiLogExecution('DEBUG','source_afterSubmit()','soCreateddate ='+soCreateddate);
		//custObj.setFieldValue('custentity43',soCreateddate);na
		//Here set the timestamp
		nlapiSubmitField('customer',customer,'custentity43',soCreateddate);
		
		
	}
	
		}
			
	//	------------------------------------------------------------------------------------------------------------
			if (customer == '1779') //Williams Trading goes here
		{
	var custObj = nlapiLoadRecord('customer',customer);
	nlapiLogExecution('DEBUG','source_afterSubmit()','custObj ='+custObj);
	
	var depositbal = custObj.getFieldValue('depositbalance'); //Deposit balance has to be changed here. Field: deposit balance
	nlapiLogExecution('DEBUG','source_afterSubmit()','depositbal ='+depositbal);
	var unbilledord = custObj.getFieldValue('unbilledorders');
	nlapiLogExecution('DEBUG','source_afterSubmit()','unbilledord ='+unbilledord);
	var custdate = custObj.getFieldValue('custentity43'); //cust 43 is last transaction date
	nlapiLogExecution('DEBUG','source_afterSubmit()','custdate ='+custdate);
	var difference = parseFloat(depositbal) - parseFloat(unbilledord);
	
	if (difference < 10000  && !(_logValidation(custdate)))
	{
		var soCreateddate = soObj.getFieldValue('trandate');
		nlapiLogExecution('DEBUG','source_afterSubmit()','soCreateddate ='+soCreateddate);
		//custObj.setFieldValue('custentity43',soCreateddate);
		nlapiSubmitField('customer',customer,'custentity43',soCreateddate); //cust 43 is last transaction date
		
		
	}
	
		}
		
	nlapiSubmitRecord(soObj);
	
}

function _logValidation(value) 
{
 if(value!='null' && value != null && value != null && value != '' && value != undefined && value != undefined && value != 'undefined' && value != 'undefined'&& value != 'NaN' && value != NaN) 
 {
  return true;
 }
 else 
 { 
  return false;
 }
}
	