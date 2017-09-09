function po_quantity() 
{
//What does Cli mean?
//What does try do? To find out what is wrong the with the script. It will automatically show you the issue.
//Why are we creating a new array?
	try {
		var flag = 0;
		var lesQuantity = new Array();
		var lesQuantityCount = 0;
		var caseQuan = new Array();
		var caseQuanCount = 0;
		var miniError = new Array();
		var miniErrorCount = 0;
		for(var i =1; i <= nlapiGetLineItemCount('item'); i++) {
			var item = nlapiGetLineItemValue('item','item',i);
			//var item_quantity = nlapiLookupField('item',item,'custitem_item_minimum_quantity');
			//nlapiLogExecution('DEBUG','item_quantity',item_quantity);
			//nlapiSetLineItemValue('item', 'custcol_po_minimum_quantity', i, item_quantity);
			//item_quantity = nlapiLookupField('item',item,'custitem_case_quantity_on_po');
			//nlapiLogExecution('DEBUG','item_quantity_case',item_quantity);
			//nlapiSetLineItemValue('item','custcol_po_case_quantity', i, item_quantity);
			var quantity = parseInt(nlapiGetLineItemValue('item', 'quantity', i));
			var so_minQuan = parseInt(nlapiGetLineItemValue('item', 'custcol_purchaseorder_moq', i));
			var so_caseQuan = parseInt(nlapiGetLineItemValue('item', 'custcol_case_quantity', i));
			if(_logValidation(so_minQuan)) 
			{
//First Condition 
//lesQuantity is an array in which
				if(quantity < so_minQuan) 
				{
					//return false;
					flag = 1;
					lesQuantity[lesQuantityCount] = "Quantity of Item " + nlapiGetLineItemText('item','item',i)+" At Line "+i;
					lesQuantityCount += 1;
					//return false;
				}
			}
//Second Condition
			if(_logValidation(so_caseQuan)) {
				if(_logValidation(so_minQuan)) { 
					if(quantity >= so_minQuan && quantity%so_caseQuan !== 0)
					{
						flag = 1;
						caseQuan[caseQuanCount] = "Quantity of Item " + nlapiGetLineItemText('item','item',i)+" At Line "+i;
						caseQuanCount += 1;
					}
				} else {
					flag = 1;
					miniError[miniErrorCount] = "Quantity of Item " + nlapiGetLineItemText('item','item',i)+" At Line "+i;
					miniErrorCount += 1;
				}	
			}
		}
		if(flag == 1) 
		{
			var msg = "";
			if(lesQuantityCount > 0)
				msg += "*** Less Quantity Than Minimum Quantity ***"+"\n";
			for(var i = 0; i < lesQuantityCount; i++) {
				msg += lesQuantity[i]+"\n";
			}
			if(caseQuan.length > 0)
				msg += "\n"+"*** Quantity Not Multiple Of Case Quantity ***"+"\n";
			for(var i = 0; i < caseQuan.length; i++) {
				msg += caseQuan[i]+"\n";
			}
			if(miniError.length > 0)
				msg += "\n"+"*** Minimum Quantity Not Present But Case Quantity Present. Check it ***"+"\n";
			for(var i = 0; i < miniError.length; i++) {
				msg += miniError[i]+"\n";
			}
			alert(msg);
			return false;
		}
		return true;
	} catch(e) {
		nlapiLogExecution('DEBUG','execption',e);
	}
}

//Ask vijay what exactly this is for!

function _logValidation(value)
{
    if (value != null && value != '' && value != undefined && value != Infinity && value != NaN) 
    {
        return true;
    }
    else 
    {
        return false;
    }
}
/*function validate_field(type, name) {
	if(type == 'item' && name == 'quantity') {
		var quantity = nlapiGetCurrentLineItemValue('item', 'quantity');
		var so_minQuan = nlapiGetCurrentLineItemValue('item', 'so_minimum_quantity');
		var so_caseQuan = nlapiGetCurrentLineItemValue('item', 'so_case_quantity');
		if(quantity > so_minQuan) {
			if(quantity%so_caseQuan === 0)
					return true;
			alert('Quantity should be a multiple of Case Quantity');
			return false;
		}
		alert('Quantity should be Greater or Equal to Minimum Quantity');
		return false;
	}
	return true;
}*/