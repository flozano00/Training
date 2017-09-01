//This is a Field Changed Function
function field_change_Set_Promocode(type,name)
{
	nlapiLogExecution('DEBUG','started','Started');
	if(name == 'entity')
	{
		nlapiLogExecution('DEBUG','name',name);
//Why are we getting the field value for?
		var customer = nlapiGetFieldValue('entity');
		if(_logValidation(customer))
		{
//What are these three parameters for ?
			var promotion_code = nlapiLookupField('customer', customer, 'custentity_customer_promotion');
			//nlapiLogExecution('DEBUG','promotion_code',promotion_code);
		    if(_logValidation(promotion_code))
		    {
				nlapiLogExecution('DEBUG','promotion_code',promotion_code);
		    	nlapiSetFieldValue('promocode',promotion_code);
		    }	
				
		}
	}
}


function Save_Function()
{
//Here we are getting the promo code function.
	var promo_code_text = nlapiGetFieldText('promocode');
	if(_logValidation(promo_code_text))
//We are alerting the end user if you want to apply the promotion code? If it's not true then set the promocode & discountitem value " " blank.
	{
		if(confirm("Are sure you want to select "+promo_code_text+" Promocde!") != true)
		{
			nlapiSetFieldValue('promocode','');
          nlapiSetFieldValue('discountitem','');
		return true;	
		}	
	}
	return true;
}

//Ask vijay about this function I assume it's to make sure that the argument is a number.
function _logValidation(value){
    if (value != null && value != '' && value != undefined && value != Infinity && value != NaN) {
        return true;
    }
    else {
        return false;
    }
}
