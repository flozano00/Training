//Field Changed Function allows for Field Change to occur within Transaction Column Fields.
//The type parameter
//the type relates to the subtab. the name is the field ID.
// type {string} [required] - The sublist internal ID (for example, use price as the ID for the Pricing sublist). 
//In the NetSuite Help Center, see SuiteScript Supported Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
//What does ir mean? Item Reciept

function ir_quantity_set_FC(type, name) {
// the 'custcol_no_of_cases' field is labeled NO: OF Cases
	if(type == 'item' && name == 'custcol_no_of_cases') {
//Here we are getting the information from the item record and the field is called 'custcol_no_of_cases'
		var noOfCases = nlapiGetCurrentLineItemValue('item','custcol_no_of_cases');
//Here we are getting the value for Number of Cases Quantity the field id is 'custcol_case_quantity'
//Always use Current Line item due to the fact that you are highlighting the current section.
		var caseQunatity = nlapiGetCurrentLineItemValue('item','custcol_case_quantity');
// In essence we are taking the multiplication of noOfCase value aswell as caseQunatity and multiplying them.
		if(_logValidation(noOfCases) && _logValidation(caseQunatity)) {
			var value = parseInt(noOfCases) * parseInt(caseQunatity);
/*Here once we multiply we get the result on the value parameter. 
 *Questions: The second paramter is the field that is being implemented?
 */

			nlapiSetCurrentLineItemValue('item','quantity', value);
		}
	}
}

//This _logvaludation function allows the value to not be any of the below. This allows for the validation to stay true.
//The value  must not be null,blank string, undefined, infinity, and Not a Number. Therefor it must be a number.
//The reason of logvalidation is that it has to be a value. the reason when you use this is somestimes your script is based on the field and their is nothing their then this will assess
function _logValidation(value){
    if (value != null && value != '' && value != undefined && value != Infinity && value != NaN) {
        return true;
    }
    else {
        return false;
    }
}

/**
Questions: 
2) Will this code work on other scripts aswell? 
*.