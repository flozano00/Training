// For more than one customer you just specify which sales rep is for which customRecord.
/**
 * Additional comment by Purna.
 * Declare the value for key as an array which contains internalid for both,
 * ** commision schedule list and commision transaction list internal id's. So it becomes
 * ** easy to get the custom record internal id's. These can be later used by the search.
 */
 //JSON file the process sales r
var customRecord = {
    "Wanda" : "customrecord_vee_customrecord_salesrep5"
};

//replace vijay moturi with different sales rep and replace custom record with related sales reo commision schedule list

function salesResp_customRecord_so(type)
{
    if (type == 'create' || type == 'edit')
    {
        try{
            var record = nlapiLoadRecord(nlapiGetRecordType(), nlapiGetRecordId());
            var salesRep = record.getFieldText('salesrep');
            nlapiLogExecution('DEBUG','salesrep',salesRep);
            var discountPercentage = parseFloat(record.getFieldValue('discountrate'));
            if(discountPercentage < 0)
                discountPercentage *= -1;
            var customer = record.getFieldValue('entity');
            var total = record.getFieldValue('total');
            var sodate = record.getFieldValue('trandate');//So Date
            var Ordernum = record.getFieldValue('tranid');//order num
            if (_logValidation(salesRep))
            {
                var filter = [];
                nlapiLogExecution('DEBUG','filter object',filter.length);
                nlapiLogExecution('DEBUG','filter object',filter);
                if(_logValidation(discountPercentage) && !isNaN(discountPercentage)) {
                    nlapiLogExecution('DEBUG','discount Percentage', discountPercentage);
                    filter.push(new nlobjSearchFilter('custrecord_vee_salesrep5_discount5',null,'equalto',discountPercentage));//discount percentage from commission schedule list record
                } else {
                    filter.push(new nlobjSearchFilter('custrecord_vee_salesrep5_discount5',null,'between',[0,100]));
                }
                var customRecord = searchCustomRecord(salesRep, filter);
                var searchIndex = 0;
                //nlapiLogExecution('DEBUG','customRecord Value',customRecord.length);
                if(!_logValidation(customRecord)) {
                    nlapiLogExecution('DEBUG','customRecord Value','into IF');
                    filter.pop();
                    filter.push(new nlobjSearchFilter('custrecord_vee_salesrep5_discount5',null,'between',[discountPercentage,100]));
                    customRecord = searchCustomRecord(salesRep, filter);
                    // nlapiLogExecution('DEBUG','customRecord Value inside IF',customRecord.length);
                }
                if(!_logValidation(customRecord)) {
                    nlapiLogExecution('DEBUG','customRecord Value','into Second IF');
                    filter.pop();
                    filter.push(new nlobjSearchFilter('custrecord_vee_salesrep5_discount5',null,'between',[0,discountPercentage]));
                    customRecord = searchCustomRecord(salesRep, filter);
                    searchIndex = customRecord.length - 1;
                    // nlapiLogExecution('DEBUG','customRecord Value inside IF',customRecord.length);
                }
                var comsionPercent = parseFloat(customRecord[searchIndex].getValue("custrecord_vee_salesrep5_comission5"));
                var comsionRate = (comsionPercent*total)/100 ;
                if(isNaN(discountPercentage))
                    discountPercentage = customRecord[searchIndex].getValue("custrecord_vee_salesrep5_discount5");
                // ----**** Additional code added. ****----
                /**
                * Added check, if the custom record is created for the sales order, it is updated else new custom record is created.
                */
                //Change the Benny Comission Transaction
                var customRecordUpdate = recordPresent(Ordernum, salesRep);
                if(_logValidation(customRecordUpdate)) {
                    var recInternalId = customRecordUpdate[0].getValue('internalid');
                //Change the Customer Record Type here as well.
                    var recordType = 'customrecord_vee_crecord_transaction4';
                    nlapiSubmitField(recordType, recInternalId, 'custrecord_vee_wandatransaction_comissio',comsionPercent);
                    nlapiSubmitField(recordType, recInternalId, 'custrecord_vee_wandatransaction_percent', discountPercentage);
                    nlapiSubmitField(recordType, recInternalId, 'custrecord_vee_wandatransaction_totalamo', total);
                } else {
                    var newCustomRecord = nlapiCreateRecord('customrecord_vee_crecord_transaction4');
                    newCustomRecord.setFieldValue('custrecord_vee_wandatransaction_cname', customer);//setting customer in new custom record
                    newCustomRecord.setFieldValue('custrecord_vee_wandatransaction_percent', discountPercentage);//Setting Discount in new custom record
                    newCustomRecord.setFieldValue('custrecord_vee_wandatransaction_salesrep', salesRep);//Setting SalesRep in new custom record
                    newCustomRecord.setFieldValue('custrecord_vee_wandatransaction_totalamo', total);//Setting total in new custom record
                    newCustomRecord.setFieldValue('custrecord_vee_wandatransaction_comissio', comsionPercent);//Setting Commission in new custom record
                    newCustomRecord.setFieldValue('custrecord_vee_wandacomission_currency', comsionRate);//Setting Commission Amount in new custom record
                    newCustomRecord.setFieldValue('custrecord_vee_wandatransaction_date', sodate);//Setting SalesOrder date in new custom record
                    newCustomRecord.setFieldValue('custrecord_vee_wandatransaction_order', Ordernum);//Setting Ordernum in new custom record
                    nlapiSubmitRecord(newCustomRecord, false, true);
                } //Stop Here on Customer Record
            }
        } catch (e) {
            nlapiLogExecution('DEBUG','execption',e);
        }
    }//type==create end loop
}

// ----**** Additional change ****----
/**
 * This function does a search on the custom record
 * @param ordernum -> sales order #
 * @param salesrep -
 * @return searchObj -> search object (searches custom record from present salesrep with present sales order)
 */
function recordPresent(ordernum, salesrep) {
    // need to know the custom record Internal id.
    // need to know the present record Internal id -> which is order num.
    var filters = [];
    var columns = [];
    filters.push(new nlobjSearchFilter('custrecord_vee_marktransaction_order',null,'is',ordernum));
    columns.push(new nlobjSearchColumn('internalid'));
    var searchObj = nlapiSearchRecord('customrecord_vee_crecord_transaction1',null,filters, columns);
    return searchObj;
}

// customrecord_vee_customrecord_salesrep4
function searchCustomRecord(salesRep, filter) {
    var cols = [];
    cols.push(new nlobjSearchColumn("custrecord_vee_salesrep5_discount5",null,null));
    cols.push(new nlobjSearchColumn("custrecord_vee_salesrep5_comission5",null,null));
    cols.push(new nlobjSearchColumn("internalid",null,null));
    var search = nlapiSearchRecord(customRecord[salesRep],null,filter,cols);
    return search;
}

function _logValidation(value) {
    if (value != null && value != '' && value != undefined && value != ' ') {
        return true;
    } else {
        return false;
    }
}