/**
  */

/**
* The recordType (internal id) corresponds to the "Applied To" record in your script deployment. 
 * @appliedtorecord recordType
*   
 * @param {String} type Operation types: create, edit, view, copy, print, email
* @param {nlobjForm} form Current form
* @param {nlobjRequest} request Request object
* @returns {Void}
*/
function disableEditButton_beforeLoad(type, form){
      if (type == 'view') {
            var getStatus = nlapiGetFieldValue('status');
            nlapiLogExecution('DEBUG', 'disableEditButton_beforeLoad', 'getStatus-'+getStatus);
            if (getStatus == 'Billed') {
                  var editButton = form.getButton('edit');
                  nlapiLogExecution('DEBUG', 'disableEditButton_beforeLoad', 'EditButton-'+editButton);
                  if(editButton) {
                        editButton.setDisabled(true);
                  }
            }
      }
      
      if(type == 'edit')
      {
            var approval_status = nlapiGetFieldValue('status');
            if(approval_status == 'Billed')
            {
                  throw "You cannot edit approved Purchase order";
                  return false ;
            }     
      }
}

/**
* The recordType (internal id) corresponds to the "Applied To" record in your script deployment. 
 * @appliedtorecord recordType
* 
 * @param {String} type Operation types: create, edit, delete, xedit
*                      approve, reject, cancel (SO, ER, Time Bill, PO & RMA only)
*                      pack, ship (IF)
*                      markcomplete (Call, Task)
*                      reassign (Case)
*                      editforecast (Opp, Estimate)
* @returns {Void}
*/
function userEventBeforeSubmit(type)
{
      nlapiLogExecution('DEBUG', 'userEventBeforeSubmit', 'type-'+type);
      if(type == 'xedit') 
      {
            var recordId = nlapiGetRecordId();
            var recordType = nlapiGetRecordType();
            var obj_so = nlapiLoadRecord(recordType, recordId);
            nlapiLogExecution('DEBUG', 'userEventBeforeSubmit', 'recordId-'+recordId);
            var approval_status = obj_so.getFieldValue('status');
            nlapiLogExecution('DEBUG', 'userEventBeforeSubmit', 'approval_status-'+approval_status);
            if(approval_status == 'Billed')
            {
                  throw "You cannot edit approved Purchase order";
                  return false ;
            }     
      }
      if(type == 'edit') 
      {
            
      
            var approval_status = nlapiGetFieldValue('status');
            nlapiLogExecution('DEBUG', 'userEventBeforeSubmit', 'approval_status-'+approval_status);
            if(approval_status == 'Billed')
            {
                  throw "You cannot edit approved Purchase order";
                  return false ;
            }     
      }
      
}

/**
* The recordType (internal id) corresponds to the "Applied To" record in your script deployment. 
 * @appliedtorecord recordType
* 
 * @param {String} type Operation types: create, edit, delete, xedit,
*                      approve, cancel, reject (SO, ER, Time Bill, PO & RMA only)
*                      pack, ship (IF only)
*                      dropship, specialorder, orderitems (PO only) 
 *                      paybills (vendor payments)
* @returns {Void}
*/
function userEventAfterSubmit(type)
{
  
}

