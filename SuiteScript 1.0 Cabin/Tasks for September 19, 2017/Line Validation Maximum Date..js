/**function validateline(type)
{
	if (type == 'item')
		{
		var item = nlapiGetCurrentLineItemValue('item','item');
		if (item == '387')
		{
		alert("You cannot select this line, Please select another item");
		return false;
		}
		else
			{
			alert("line item added");	
			return true;		
			}
		}
} */


function validateLine(type){
try{
nlapiLogExecution('Debug', 'Validate Line', "Begin");
 	if (type == "item"){
 	 	var date1 = nlapiGetCurrentLineItemValue('item', "custcol_hc_date1");
 	nlapiLogExecution('Debug', 'Date 1: ', date1);
 	 	var date2 = nlapiGetCurrentLineItemValue("item", 'custcol_hc_date2');
 	nlapiLogExecution('Debug', 'Date 2: ', date2);
 	 	var date3 = nlapiGetCurrentLineItemValue('item', 'custcol_hc_date3');
 	nlapiLogExecution('Debug', 'Date 3: ', date3);
 	 	var myDate1 = nlapiStringToDate(date1);
 	 	var myDate2 = nlapiStringToDate(date2);
 	 	var myDate3 = nlapiStringToDate(date3);
 	nlapiLogExecution("Debug", 'First Date: ', "First Date in String: " + myDate1);
 	nlapiLogExecution("Debug", 'Second Date: ', "Second Date in String: " + myDate2);
 	nlapiLogExecution('Debug', 'Third Date', "Third Date in String: " + myDate3);
 			if (myDate1 > myDate2 && myDate1 > myDate3){
 	 			var myDateFinal1 = nlapiDateToString(myDate1);
 	nlapiLogExecution('Debug', 'My Date Final 1" ', myDateFinal1);
 		 		nlapiSetCurrentLineItemValue('item','custcol_hc_date4', myDateFinal1);
 				var date4 = nlapiGetCurrentLineItemValue('custcol_hc_date4');
 	nlapiLogExecution('Debug', 'My Date 4: ', date4);
 			}
 			else if (myDate2 > myDate1 && myDate2 > myDate3){
 				var myDateFinal2 = nlapiDateToString(myDate2);
 				nlapiSetCurrentLineItemValue('item', 'custcol_hc_date4', myDateFinal2);
 			}
 			else if (myDate3 > myDate1 && myDate3 > myDate2){
 				var myDateFinal3 = nlapiDateToString(myDate3);
 				nlapiSetCurrentLineItemValue('item', 'custcol_hc_date4', myDateFinal3);

 			}



 	return true;
 	}





nlapiLogExecution('Debug', 'Validate Line', "End");
}
catch(e){
nlapiLogExecution('Emergency', 'Exception Error:', e);
}

}