

function linelevel_fc(type, name){
	try {
nlapiLogExecution('Audit', 'Field Change Line Item', 'Begin');
 	if (type == 'item' && name == "custcol_hc_date1"){
 	var date1 = nlapiGetCurrentLineItemValue('item', "custcol_hc_date1");
 	nlapiLogExecution('Debug', 'First Date: ', date1);
 	var myDate1 = nlapiStringToDate(date1);
 	nlapiLogExecution('Debug', "First Date", "First Date: " + myDate1);
 	var date2 = nlapiGetCurrentLineItemValue('item', "custcol_hc_date2");
 	var myDate2 = nlapiStringToDate(date2);
 	nlapiLogExecution('Debug', "Second Date", "Second Date: " + myDate2);
 	var date3 = nlapiGetCurrentLineItemValue('item', "custcol_hc_date3");
 	var myDate3 = nlapiStringToDate(date3);
 	nlapiLogExecution('Debug', "Third Date", "Third Date: " + myDate3);
 	var date4 = nlapiGetCurrentLineItemValue('item', 'custcol_hc_date4');
 	 if ((_logvalidation(date1) > _logvalidation(date2)) && (_logvalidation(date1)) > _logvalidation(date3)){
 	   	nlapiSetCurrentLineItemValue('item', 'custcol_hc_date4', myDate1);
 	  	
 	 }
 	 else if ((myDate2 > myDate1) && (myDate2 > myDate3)){
 	    nlapiSetCurrentLineItemValue('item', 'custcol_hc_date4', myDate2);
 		
 	 }
 	 else if ((myDate3 > myDate1) && (myDate3 > myDate2)){
 	 	nlapiSetCurrentLineItemValue('item', 'custcol_hc_date4', myDate3);
 	 }
 	 else if ((myDate1 > myDate2) && (myDate1 > myDate3)){
 	nlapiLogExecution('Debug', 'Custom Field Date 4 Value:', date4);
 	}
 	else if ((myDate1 == myDate2) && (myDate1 === myDate3)){
 		nlapiSetCurrentLineItemValue('item', 'custcol_hc_date4', "");
 	}





nlapiLogExecution('Audit', 'Field Change Line Item', 'End');

	}
	catch(e){
nlapiLogExecution('Debug', "Field Change Line Item Exception:", e);

	}

}

function _logvalidation(value){
	if (value != "" && value != null && value != undefined && value != Infinity && value != NaN){
		return true;
	}
	else {
		return false;
	}
}

function validateLine