/**
 * Suite Script Notes Advanced 1.0 Part 1
 * Friday, September 15, 2017
 */
//---------------------------------------------------------------------------------------
/**
 *  Always perform nlapiLogExecution to view the progress of your importance.
 *  Script: User Event Script.
 */

function afterSubmit_email(type){
//Here we begin to create a log execution to view the beginning of the function.
	nlapiLogExecution('Audit', 'After Submit Function', 'Begin');
//Here use the try function to catch errors and understand more the javascript engine.
	try{
		if (type == "create"){
		 	var recordId = nlapiGetRecordId();
//When their is a drop down use nlapiGetFieldText in order to retrieve the string value.
//Make sure to use nlapiLogExecution to see the value.
		 	var customer = nlapiGetFieldText("entity");
	nlapiLogExecution('Debug', 'Customer : ', "The customer is " + customer);
   			var recordObj = nlapiGetNewRecord();
   	nlapiLogExecution('Debug', 'Sales Order: ', 'The Sales Order Object is ' + recordObj);
//How do we extract the information and store it within a PDF file.
	var printPdf = nlapiPrintRecord('Transaction', 'recordId', 'PDF', null);
// 	var rec = []; || rec = new Array();
//	Understand the concept that arrays can be set new Array() and [];
	var rec = new Array();
//	I don't understand this concept?
 	rec['transaction'] = nlapiGetRecordId();
 	nlapiLogExecution('Emergency', 'Rec ???', "output" + rec);

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
 * What does 11th to replyTo? */
 
 nlapiSendEmail(3134,'flozano00@gmail.com','Hello ' + customer +' Thank you for purchasing from HoneyComb your Sales Order is attached at the bottom ', "Thank you for purchasing attached at the bottom of this email is your sales order.", null, null, rec, printPdf);
		}
//This importance of Submit Record is crucial in User Event Scripts. 
//If your values aren't being changed make sure to submit your record.		
	nlapiSubmitRecord(recordObj, true, true);

	}
//Every error gets thrown in here. Each issue that the engine doesn't spot will be viewed here.
	catch (e){
    nlapiLogExecution('Emergency', 'Exception Error', 'The Exception error' + e);
	}
}

//----------------------------------------------------------------------------------------