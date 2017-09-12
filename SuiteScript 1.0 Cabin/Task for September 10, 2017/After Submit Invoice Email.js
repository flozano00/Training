/*
 *	Write a script to automatically email the customer the PDF copy of the invoice as soon as the invoice is created and approved.
 *	CUSTOM FORM: Z -HM Invoice Form
 *  Location: Test
 *  Item: ACC00001
 */

function afterSubmit_email(type){
nlapiLogExecution('Audit', 'After Submit Function', 'Begin');
	try {
 	if (type == "create"){
 	var recordId = nlapiGetRecordId();
 	var customer = nlapiGetFieldText("entity"); //I extracted the individual's name but using nlapiGetFieldText on a drop down category.
 	nlapiLogExecution('Debug', 'The Customer name is : ', "The customer: " + customer) // 1237 Here we use nlapiGetFieldText to get the actual value of string. It's still not working!!!
 	nlapiLogExecution('Debug', 'Record Id', 'The Record Id : ' + recordId);
 	//Understand the concept of nalpiGetNewRecord();
 	var recordObj = nlapiGetNewRecord();
 	nlapiLogExecution('Debug', 'Sales Order: ', 'The Sales Order Object is ' + recordObj);
 	var printPdf = nlapiPrintRecord('Transaction', recordId, 'PDF', null);

//What does the rec do exactly?

 	var rec = new Array();

rec['transaction'] = nlapiGetRecordId(); // dynamically getting internal id of the transaction record on which the script is deployed
/*
 * Issue: the email won't function properly.
 */


/**
 * ----------------Understand the nlapiSendEmail parameters.-------------------------------------------------------------------
 * nlapiSendEmail(author, recipient, subject, body, cc, bcc, records, attachments, notifySenderOnBounce, internalOnly, replyTo)
 * the 1 is the author or from. In this case the internal id of 3134 equates to Frank Lozano within the company. It's the employee ID.
 * The 2 is the to part of the recpient. Where you would like this email to be sent to.
 * The 3 is the upper header of the email.
 * The 4 parameter is the body content of the API call
 * the 5 parameter is the cc portion which allows for cc
 * What does the 6th parameter do? What is BBC?
 * What does 7th paramter do? What does records do?
 * The 8th paramter is where you put any files (pdf, xml, .doc);
 * What does 9th notifySenderOnBounce?
 * What does 10th do internalOnly?
 * What does 11th to replyTo?
 */
nlapiSendEmail(3134,'flozano00@gmail.com','Hello ' + customer +' Thank you for purchasing from HoneyComb your Sales Order is attached at the bottom ', "Thank you for purchasing attached at the bottom of this email is your sales order.", null, null, rec, printPdf);
/**
 * The SubmitRecord closes the function.
 */
nlapiSubmitRecord(recordObj, true, true);





 	}
 	
 	nlapiLogExecution('Audit', 'After Submit Function', 'End');
	}
	catch (exception) {
		nlapiLogExecution('Debug', 'Exeception: ', 'The Exception is : ' + exception);
	}
}


/**
 * Source: http://codeboxllc.com/ksc/2011/12/31/scripting-tip-10-generating-email-with-invoice-pdf-attachment/
 *
 * I'm not sure if this is the problem, but I don't believe your defining rec correctly; it shouldn'bt be an Array, just an Object. 
 * It still might actually work fine the way you have it, but its a bit misleading to define it as an Array. Also it's unnecessary to load the current record using nlapiLoadRecord
 * just use nlapiGetNewRecord
 * var recordObj = nlapiGetNewRecord();
 *
 * Still not the issue. It looks to me like your using nlapiSendEmail correctly; I don't know if NS queues up emails. Are you seeing the email in the Communcations tab of your Employee Record and on the associated
 * Transaction record?
 * 
 */