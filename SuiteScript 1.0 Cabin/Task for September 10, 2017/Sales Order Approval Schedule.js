/**
 * TYPE User Event
 * NAME Sales Order Approval Schedule
 *
 * 
 */

var context = nlapiGetContext();
var startdate = new Date().getTime();


function salesOrder_Approval(type){
	try{
		nlapiLogExecution('Audit', 'Sales Order Approval Fuction', 'Begin');
		/*var recordType = nlapiGetRecordType();
		var recordId = nlapiGetRecordId();



		nlapiLogExecution("Debug", "The Record Type is: ", "Record Type: " + recordType);
		nlapiLogExecution("Debug", "The Record Id is: ", "The Record ID: " + recordId);*/
			var salesOrderSearch = '';
			var salesId = new Array();
			var lastInternalId = 0;
			var previousInternalId = 0;
			do {
				nlapiLogExecution('Emergency', 'Status Change', 'Begin');

				salesOrderSearch = nlapiSearchRecord("salesorder",null,
				//Modify this portion at the bottom if the details show null.
				[
				   ["type","anyof","SalesOrd"], 
				   "AND",
				   ["internalidnumber","greaterthan",previousInternalId],
				   "AND", 
				   ["status","anyof","SalesOrd:A"], 
				   "AND", 
				   ["mainline","is","T"],
				   "AND",
				   ["trandate", "within", "9/13/2017"]
				], 
				[
				   new nlobjSearchColumn("internalid",null,null)
				]
				);

				/**
				 * If your value is 	Debug	Saved Search	9/13/2017	8:56 am	Frank Lozano	Saved Search Details: null
				 * Then make sure to edit your filters due to the fact that the results aren't showing.
				 */
				nlapiLogExecution('Debug', 'Saved Search', 'Saved Search Details: ' + JSON.stringify(salesOrderSearch));

				for (var i = 0; i < salesOrderSearch.length; i++){

					//I only want the internal Id Field Results and pushing it into an array.
					//This is the propery way of pushing the array make sure the [i] is next to salesOrderSearch
					/**
					 * ------------------------------IMPORTANT CONCEPT ------------------------------------------------------------
					 **/
					 lastInternalId = salesOrderSearch[i].getValue('internalid') 
					 salesId.push(lastInternalId);
				}
				previousInternalId = lastInternalId;

			} while(salesOrderSearch!=null && salesOrderSearch!=undefined && salesOrderSearch!='' && salesOrderSearch.length == 1000);

			nlapiLogExecution('Debug', 'Sales Id for loop', 'Sales Id Result: ' + JSON.stringify(salesId));

			var salesRecordID = salesId;
			nlapiLogExecution('Debug', 'Dynamic Sales Record ID', 'The Sales Record ID is: ' + salesRecordID);





			// Change the record ID with the Sales Record ID that relates to the saved search.
			// 
			// Keep on practing loops



			//The loop will allow you to individual get every single record ID dynamically.
			for (var i = 0; i < salesRecordID.length; i++){



			//Make sure to set the type here.
			/**
			 * 
			 *------------------------IMPORTANT CONCEPT-------------------------------------------------------
			 * var salesObj = nlapiLoadRecord('salesorder', salesRecordID[i]);
			 */
				var salesObj = nlapiLoadRecord('salesorder', salesRecordID[i]);
				nlapiLogExecution("Debug", "The Sales Object is ", "The Sales Object " + salesObj);
				var salesStatus = salesObj.getFieldText('orderstatus');
				nlapiLogExecution('Debug', 'Sales Status', 'The Sales Status : ' + JSON.stringify(salesStatus));

				if (salesStatus == "Pending Approval"){
				//Issue is that you we were using setFieldValue
				//Make sure to use setFieldText if this issue persist.
				//nlapiSetFieldText('orderstatus', 'Pending Fulfillment');
					salesObj.setFieldText('orderstatus', 'Pending Fulfillment');
					 var approved = salesObj.getFieldValue('orderstatus');
				//Always make sure to get the field value of the approved before doing log executions!
					nlapiLogExecution('Debug', 'Sales Status Change: ', "The Approved Status " + approved);
					nlapiSubmitRecord(salesObj, true, true);
					//nlapiLogExecution('Debug', 'Sales Status Change: ', "The Approved Status " + approved)
					nlapiLogExecution("Audit", "Sales Order Approval Schedule", "End");
				}
				checkUsage();

			}



		nlapiLogExecution('Emergency', 'Status Change', 'End');
	}
	catch(exception){
		nlapiLogExecution('Debug', 'Exception: ', "The Exception is " + exception);
	}
}


/**
 * Learn this Function
 */

function checkUsage() {
 //nlapiLogExecution('DEBUG', 'Script USAGE ', context.getRemainingUsage());
 var time = new Date().getTime();
 var diff = time - startdate;
 if(diff>3000*100) {//time in millisec[should be greater than 3600 sec] for the script to yield
  startdate = time;
  nlapiLogExecution('AUDIT', 'RESECHUDILING Script at '+diff, context.getRemainingUsage());
  nlapiYieldScript();
 }
 if (context.getRemainingUsage() <= 100) {
  startdate = time;
  nlapiLogExecution('AUDIT', 'RESECHUDILING Script at ', context.getRemainingUsage());
  nlapiYieldScript();
 }
}