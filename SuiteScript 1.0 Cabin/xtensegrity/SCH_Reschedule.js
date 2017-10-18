function scheduled_fisrt_script(type) 
{
	try 
	{
		var i_lastInternalID = 0;
		//var previousInternalID = '';
		var obj_Context = nlapiGetContext();
		var start_Usage = obj_Context.getRemainingUsage();
		nlapiLogExecution('DEBUG', 'Schedule Script', 'start_Usage=='+ start_Usage);

	i_lastInternalID = nlapiGetContext().getSetting('SCRIPT','custscriptcustscript_recordid');
		nlapiLogExecution('DEBUG', 'Schedule Script', 'i_lastInternalID=='+ i_lastInternalID);
		if (!_logValidation(i_lastInternalID)) 
		{
			i_lastInternalID = 0;
		}

		var filters = new Array();
		var coloumns = new Array();

		filters[0] = new nlobjSearchFilter('internalidnumber', null,'greaterthan', i_lastInternalID);
		filters[1] = new nlobjSearchFilter('mainline', null, 'is', 'T');
		//filters[1] = new nlobjSearchFilter('role', 'user', 'anyof',role)
		coloumns[0] = new nlobjSearchColumn('internalid');
		var search_object = nlapiSearchRecord('salesorder', null, filters,coloumns)// SERACH Branches
		// consumed 10 usage
		if (_logValidation(search_object)) // IF SERACH RESULT NOT NULL
		{
			for (var i = 0; i < search_object.length; i++) 
			{
				//nlapiLogExecution('DEBUG', 'Start Usage afterSubmit_UpdateRecord', 'Line No == Niventory Line'+status);
				var i_internal_ID = search_object[i].getValue('internalid');
				if (_logValidation(i_internal_ID))
				{

					i_lastInternalID = i_internal_ID;
		var obj_Sales_ord = nlapiLoadRecord('salesorder',i_internal_ID);// 20
		var obj_Sales_ord = nlapiLoadRecord('salesorder',i_internal_ID); //
	    var obj_Sales_ord = nlapiLoadRecord('salesorder',i_internal_ID);
		//var rec_ID = nlapiSubmitRecord(obj_Sales_ord, false, false);// 10
		var remianing_Usage = obj_Context.getRemainingUsage(); // 40
		nlapiLogExecution('DEBUG', 'Schedule Script','remianing_Usage==' + remianing_Usage+ '-> @rec_ID->' + i_internal_ID);
		if (remianing_Usage < 9000) 
		{
	nlapiLogExecution('DEBUG','Start Usage afterSubmit_UpdateRecord','script has been rescheduled.' + i);
	var params = new Array();
	params['status'] = 'scheduled';
	params['runasadmin'] = 'T';
	params['custscriptcustscript_recordid'] = i_lastInternalID;
	var startDate = new Date();
	params['startdate'] = startDate.toString();
	var status = nlapiScheduleScript(obj_Context.getScriptId(), obj_Context.getDeploymentId(),params);
	nlapiLogExecution('DEBUG','Start Usage afterSubmit_UpdateRecord','Line No == Niventory Line' + status);
	break;
	}//end of If loop for remaining usage
	}
	}
	}// end of  if (_logValidation(searchresult_items))

	} // end of try block 
	catch (Exception)
	{
		nlapiLogExecution('DEBUG', ' Exception in SearchProject function ',' Exception =' + Exception);
	}
}
function _logValidation(value) {
	if (value != null && value != 'undefined' && value != undefined&& value != '' && value != 'NaN' && value != ' ')
	{
		return true;
	} else 
	{
		return false;
	}
}



