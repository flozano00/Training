/**
 * Why are you Creating this ?
 * This will allow me to provide better use in regards to Suite Scripting and understanding Record Id's and Types.
 */

/**
 * Can I put variables in global scope in regards to these API calls?
 * Awnser: Yes you can.
 */
/**
 * What are these two variables For?
 * recordId = will give me the record Id.
 * recordType = Will get me the record Type.
 */
var recordId = nlapiGetRecordId();
var recordType = nlapiGetRecordType();

//In beforeLoad we strictly use nlapiGetFieldValue  for example
//var phone = nlapiGetFieldValue('');

function beforeLoad (type){

nlapiLogExecution('Debug', 'This is the Record Id = ', recordId);
nlapiLogExecution('Debug', "This is the Record Type = ", recordType);


};

/**
 * The Individual Wants to know the Reference Order Number of the Sales Order.
 * Awnser: This worked Aswell!
 */
/**
 * On afterSubmit we have to use nlapiLoadRecord to get the information.
 */

function afterSubmit (type){

	var recObj = nlapiLoadRecord(recordType, recordId);
 	var referencerec = recObj.getFieldValue("otherrefnum");
 	nlapiLogExecution('Debug', "This is the Reference Number = ", referencerec);
 	var setLabel = recObj.setFieldValue('custbody27', referencerec);
 	nlapiLogExecution('debug', 'Label Has set too = ', setLabel);
 	nlapiSubmitRecord(recObj, true, true);


}

//--------------------------------------------------------------------------------------
/**
 *  Monday August 28, 2017
 */

/**
 * What did you learn on Monday August 28, 2017.
 * Here we learned how to extract information from the metadata in regards to objects.
 * In this case Venky taught me how to use the JSON.stringify method that allows me to use extract all the information from the newRecord.
 * On Line 80 we used the JSON method to allow us to extract information.
 * 
 */

var recordId = nlapiGetRecordId();
var recordType = nlapiGetRecordType()

function beforeSubmit(type){
	nlapiLogExecution('debug', "Record Id = ", recordId);

};



function afterSubmit(type){
nlapiLogExecution('debug', "Record Type = ", recordType);

 var currentRecord = nlapiGetNewRecord();
 nlapiLogExecution('debug', 'current record value', JSON.stringify(currentRecord));
 var rec = nlapiLoadRecord(nlapiGetRecordType(), nlapiGetRecordId());//, initializeValues)
 nlapiLogExecution('debug', 'rec value', JSON.stringify(rec));
 var referenceNumber = currentRecord.getFieldValue('otherrefnum');
 nlapiLogExecution('debug', 'Reference number = ' , referenceNumber);
 if (referenceNumber == "0002"){

 rec.setFieldValue("otherrefnum", "0003");
 nlapiLogExecution('debug','Status = ', referenceNumber);
 	var newRec = nlapiSubmitRecord(rec, false, true);

 //The JSON.stringify helps anaylze the object in JSON format Venky used this for a better analysis of the properties Names and Values.
 	nlapiLogExecution('debug', 'new Record', JSON.stringify(newRec));
}


};
//------------------------------------------------------------------------------------
//Notes Tuesday, August 29, 2017


function afterSubmit(type){
	try {
		var i_context = nlapiGetContext();
	nlapiLogExecution('debug', 'afterSubmit()','The context is : '+i_context);

	}
	catch (exception){
 	nlapiLogExecution('Debug', 'catch Exception', 'exception : '+exception);


	}
}



function _logvalidation(value){
	if (value != null && value != undefined && value != Infinity && value != " " && value != NaN && value != 'Infinity' && value != 'null' && value != 'undefined'){
		return true;
	}
	else {
		return false;
	}
}


//------------------------------------------------------------------------------------------------

/**
 * Wednesday August 30, 2017
 * What did I learn : Catch?
 */

function afterSubmit(type){
	try {
		var i_context = nlapiGetContext();
	nlapiLogExecution('debug', 'afterSubmit()','The context is : '+i_context);

	}
	catch (exception){
 	nlapiLogExecution('Debug', 'catch Exception', 'exception : '+exception);


	}
}



function _logvalidation(value){
	if (value != null && value != undefined && value != Infinity && value != " " && value != NaN && value != 'Infinity' && value != 'null' && value != 'undefined'){
		return true;
	}
	else {
		return false;
	}
}

/**
 * I also learned how to use the Throw function within the try catch error. This will allow me to catch better errors.
 * The throw function allows me to catch the error message and send it as user event.
 * We also learned the nlapiGetLineItem Value aswell the beforeload function.
 * Within the beforeload function we have to use the nlapiGetFieldValue & nlapiGetFieldValue.
 * 
 */


/**
 * What did you Learn?
 * I learned the try ,catch, throw functions within SuiteScript. This only works on User Event scripts by allowing me to display error
 * I also Learned alot of the 
 */



/**
 * 
 * Deployment on Sales Order.
 * 
 */
function beforeSubmit(type){
	try {
		var phoneNumber = nlapiGetFieldValue('custbody16');
		var email = nlapiGetFieldValue('custbody14');
 		nlapiLogExecution('Debug', 'Phone Number : ', +phoneNumber);
 		nlapiLogExecution('Debug', 'Email :', +email);
 		if (email == 0 && phoneNumber == 0){
 //In User Event Scripts throw work's not alert.
 			throw("Please Enter Email & Phone Number.");
 //The throw initiates the expected error. It is important to use through so that the program will not allow the submit function.
 			return false;
 		}
 		else if (email == 0){
 			throw ("Please Enter Email");
 		}
 		else if (phoneNumber == 0){
 			throw ("Please Enter Phone");
 		}
 //Know the difference between nlapiGetCurrentLineItemValue and LineItemValue.
 	var ifCheckBox = nlapiGetLineItemValue('item', 'custcol_hc_salesorder_ifremoved',1);
 	nlapiLogExecution('Debug', 'If Check Box: ', "Check Box(T/F) : " + ifCheckBox);
 		if (ifCheckBox == 'T'){
 			nlapiRemoveLineItem("item", 1);

 		}


 		
}
	catch (exception){
		nlapiLogExecution('Debug','Exception' , 'Exception: ' + exception);
		if(exception == "Please Enter Phone" || exception == "Please Enter Email" || exception == "Please Enter Email & Phone Number.");
//This concept is important because through will have the ability to send out the message.
			throw exception;
	}
};


//----------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
 * -------------------------------------------------------------------------------------------------------------------------------------------------------------------
 *  
 */


/**
 * What did you Learn?
 * I learned the try ,catch, throw functions within SuiteScript. This only works on User Event scripts by allowing me to display error
 * 
 */



/**
 * 
 * Deployment on Sales Order.
 * 
 */

/**
 * Here I satisfied the Third Assignment A, B, C.
 * 
 * 
 */

/**
 * 1) Deploy a script on Sales Order & copy the record using copy API , source the Start Date & End Date as of after one year. I.e.if Current SO Start Date ?
 * 4 April 2017 , then the Start Date of copied Sales Order ?  4 April 2018 ( a year ahead of start date)
 * 2) Deploy a script of any transaction & if remove check-box is checked then remove  that line from that transaction using Remove Line API
 * 3)Deploy a script on Customer  and perform below operations –
 
              A.)    If the email , phone  does not contain any values throw message as “ Please enter  Email & Phone”
              B.)    If Email does not contain any values throw message as “ Please enter Email”
              C.)    If Phone does not contain any values throw message as “ Please enter Phone”

       4.    Disable button ‘Edit’ , ‘Cancel’ 
       5.    Create Pop Up Messages on Save Record Client Script. 
      
 * 
 * 
 */ 
function beforeSubmit(type){
	 	var ifCheckBox = nlapiGetLineItemValue('item', 'custcol_hc_salesorder_ifremoved',1);
 	nlapiLogExecution('Debug', 'beforeSubmit():  ', "Check Box(T/F) : " + ifCheckBox);
 		if (ifCheckBox == 'T'){
 			nlapiRemoveLineItem("item", 1);

 		};
}


function afterSubmit(type){
	try {
		var phoneNumber = nlapiGetFieldValue('custbody16');
		var email = nlapiGetFieldValue('custbody14');
 		nlapiLogExecution('Debug', 'Phone Number : ', +phoneNumber);
 		nlapiLogExecution('Debug', 'Email :', +email);
 		if (email == 0 && phoneNumber == 0){
 //In User Event Scripts throw work's not alert.
 			throw("Please Enter Email & Phone Number.");
 //The throw initiates the expected error. It is important to use through so that the program will not allow the submit function.
 			return false;
 		}
 		else if (email == 0 || email == NaN){
 			throw ("Please Enter Email");
 		}
 		else if (phoneNumber == 0 || email == NaN){
 			throw ("Please Enter Phone");
 		}
 //Know the difference between nlapiGetCurrentLineItemValue and LineItemValue.



 		
}
	catch (exception){
		nlapiLogExecution('Debug','Exception' , 'Exception: ' + exception);
		if(exception == "Please Enter Phone" || exception == "Please Enter Email" || exception == "Please Enter Email & Phone Number.");
//This concept is important because through will have the ability to send out the message.
			throw exception;
	}
};

/**
 * ------------------------------------------------------------------------------------------------------------------------------
 * 
 */
// Here we learned the PageInit function also rename the functions differently to make sure a better format.
 
function alert_pageInit(){
	var context = nlapiGetContext();	
	var user = context.getName();
	nlapiLogExecution('Debug', 'User: ', 'The User is :' + user);
	alert("Hello: " + user + "Begin the demo !");
 	return true;

 }

 /*
 * Wensday, September 6, 2017
 * The issue was on line 331. Here we realized that if their isn't a value make sure to leave the value as "" NOT " ". The space is also another character.
 */







function saveRecord(){
	try{
		var phoneNumber = nlapiGetFieldValue('custbody16');
		var email = nlapiGetFieldValue("custbody14");
		nlapiLogExecution('Debug', 'phone number', 'The Phone Number is' + phoneNumber);
		nlapiLogExecution('Debug', 'The Current Email : ', 'Email : ' + email);
	//Space is also a character make sure it's not spaced.
		if (phoneNumber == "" && email == ""){
		 alert("Please Enter a Phone Number & Email.");
		 return false;
		}
		else if (phoneNumber == ""){
		alert("Please enter a Phone number.");
		return false;
		}
		else if (email == ""){
		alert("Please enter an Email!")
		return false;
		}



		return true;

	}
	catch (exception){
	nlapiLogExecution('Debug', 'Catch Error: ','The error is: ' + exception);

	}
}

/**
 * --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * Thursday September 7 2017
 * Here we learned how to disable and Hide standard UI Buttons. This will give the ability to understand the Form Object .
 * We learned that we used the Google Chrome to find the Internal ID's for this button. The Importance? It will help segregate duties.
 * What is the request parameter for ?
 *  
 */

function beforeLoad_disableEditButton(type, form, request){
//What is the request parameter for?
//The request parameter these are for REST calls generally this isnt the issue. It gets the vlues from the form and actually and URL and basically the server calls. This value passing or the form then we use the request. the request parameter is important.
	try{
	var status = nlapiGetFieldValue('status');
		if (type == 'view'){
		nlapiLogExecution('debug', 'Before Load Disable Button Status View', 'The current type is :' + type);
			if (status == 'Billed'){
		nlapiLogExecution('debug', 'The Current type of sales order: ', "The current type is : " + status);
				var editButton = form.getButton("edit");
				var returnButton = form.getButton("return");
				nlapiLogExecution('Debug', 'VIEWMODE: before Load Disabled Button Status: ', "View Button Edit " + editButton);
				nlapiLogExecution('Debug', 'VIEWMDOE: before Load Disabled Button Status: ', "View Button Return" + returnButton);
				if(editButton){
					editButton.setVisible(false);
				}
				if(returnButton){
					returnButton.setVisible(false);
				}
			}


		}
		if (type == "edit"){
			nlapiLogExecution('Debug', 'Before Load Disable Button type Edit', 'The Current type is ' + type);
 			if (status == "Billed"){
 			nlapiLogExecution('Debug', 'Before Load Disable Button Status Edit', 'The current status is ' + status);					
 			var calculateTax = form.getButton("custpage_ava_calculatetax");
 			var shipToAddress = form.getButton("custpage_ava_validateshipto");
 			var billToAddress = form.getButton("custpage_ava_validatebillto");
 			//Can't Remove this button.
 			nlapiLogExecution('Debug', 'Before Load Disable add Multiple on edit', 'The Validate Ship To Address Button: ' + shipToAddress);
 			nlapiLogExecution('Debug', 'Before Load Disable Validate Bill To Address', "The Validate Bill to Address Buton: " + billToAddress);
 			//The Calculate Tax Button has been removed.
 			nlapiLogExecution('Debug', 'Before Load Calculate Tax button', "The Calculate Tax Button: " + calculateTax);
 			if (billToAddress){
 				billToAddress.setVisible(false);
 			
 			}
 			if (calculateTax){
 				calculateTax.setVisible(false);
 			}
 			if (shipToAddress){
 				shipToAddress.setVisible(false);
 			}

 			}
			
		}
		

	}
	catch(exception){
		nlapiLogExecution('Debug', 'Exception : ', 'Exception Error :' + exception);


	}
}

/**
 * *-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * Tuesday, September 12, 2017
 * What have you learned? 
 * nlapiGetFieldText the ability to use the text value of a drop down field.
 * nlapiPrintRecord this is the ability to get the PDF from any transaction and allow to send it as an email.
 * How can I make this dynamic ?
 * 
 *
 *
 * 
 */


/*
 *	Write a script to automatically email the customer the PDF copy of the invoice as soon as the invoice is created and approved.
 */

function afterSubmit_email(type){
nlapiLogExecution('Audit', 'After Submit Function', 'Begin');
	try {
 	if (type == "create"){
 	var recordId = nlapiGetRecordId();
 	var customer = nlapiGetFieldText("entity"); //I extracted the individual's name but using nlapiGetFieldText on a drop down category.
 	nlapiLogExecution('Debug', 'The Customer name is : ', "The customer: " + customer) // 1237 Here we use nlapiGetFieldText to get the actual value of string.
 	nlapiLogExecution('Debug', 'Record Id', 'The Record Id : ' + recordId);
 	var recordObj = nlapiGetNewRecord();
 	nlapiLogExecution('Debug', 'Sales Order: ', 'The Sales Order Object is ' + recordObj);
 //An important concept to understand.
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
nlapiSendEmail(3134,'flozano00@gmail.com','Hello ' + customer +' your Sales Order is attached at the bottom ', "Attachment", null, null, rec, printPdf);
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