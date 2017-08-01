/* This is called validate_line_discontinue 
* 
*/
//Validate Line Function...
function validate_line_Discontinue(type)
{
// What does item mean? How many types are there?
//the 'item' shows within the subtab	
	if (type == 'item')
	{
//Question: What are both these parameters for?
//The first is the subtab item and the second is within the subtab
		var item = nlapiGetCurrentLineItemValue('item','item');
      	if(_logValidation(item)) {
//Question: What are these three parameters for ?
//What is nlapiLookupField?
//if the field value is present in a different record. For example in Sales Order if you want to go to customer record and you want to get th evlaue on the customer record. You are deploying it on
//the first parameter is the item subtab, the second parameter is item record and the third paramter is internal id of the field.
          var Discontinued_status = nlapiLookupField('item', item, 'custitem2');
//This tells me that if the disconinuted status wich is a list field is a 2 you can't select this.
//the logValidation is to make sure their is an actual value.
          if(_logValidation(Discontinued_status) && Discontinued_status == '2')
          {
              alert("You cannot select this Item as It is Externally Discontinued, Please select another item");
              return false;

          }
          else
          {
          return true;		
          }
        }
	}
}

//This is a Save Record Function.
function Discontinue_saverec() 
{
//What is this loop for ?
//the look is to stop the mutiple item portion of the script.
//What is the nlapiGetLineItemCount?
//Give me  how many lines on sales record. On field changed you can't get the line item count but on Saved Record  you are able to do so.
	 var line_count = nlapiGetLineItemCount('item');
	 if(_logValidation(line_count))
		{     
			for(var t=1;t<=line_count;t++)
			{
				var item_ID = nlapiGetLineItemValue('item','item',t)
				 var Disc_status = _getdiscontinuestatus(item_ID);
       				 if (Disc_status == true)
					 {
					 alert("You cannot select this line as It is Externally Discontinued, Please select another item");
					// recordOBJ.removeLineItem('item', t);
					 return false;
					 }
			}
		}
return true;
}

//What does this function do?
// You are able to export saved search from script.
//Why is the third parameter an array?
function _getdiscontinuestatus(item_ID)
{
	var itemSearch = nlapiSearchRecord("item",null,
			[
			   
			   ["internalid","anyof",item_ID],
			   "AND", ["custitem2","anyof","2"]
			], 
			[
			  new nlobjSearchColumn("internalid",null,null)
			]
			);
	if (_logValidation(itemSearch))
	{		
		return true;
	}
	else
		{
		return false;
		}
}



//This log validation makes sure that the value is a number!
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

