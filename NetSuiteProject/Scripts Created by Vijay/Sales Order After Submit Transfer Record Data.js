// For more than one customer you just specify which sales rep is for which customRecord.
var customRecord = {
    "Vijay Moturi" : "customrecord_vee_customrecord_salesrep4"
};

//replace vijay moturi with different sales rep and replace custom record with related sales reo commision schedule list

function salesResp_customRecord_so(type)
{
    if (type == 'create')
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
                filter.push(new nlobjSearchFilter('custrecord_vee_salesrep4_discount4',null,'equalto',discountPercentage));//discount percentage from commission schedule list record
            } else {
                filter.push(new nlobjSearchFilter('custrecord_vee_salesrep4_discount4',null,'between',[0,100]));
            }
            var customRecord = searchCustomRecord(salesRep, filter);
            var searchIndex = 0;
            //nlapiLogExecution('DEBUG','customRecord Value',customRecord.length);
            if(!_logValidation(customRecord)) {
                nlapiLogExecution('DEBUG','customRecord Value','into IF');
                filter.pop();
                filter.push(new nlobjSearchFilter('custrecord_vee_salesrep4_discount4',null,'between',[discountPercentage,100]));
                customRecord = searchCustomRecord(salesRep, filter);
                // nlapiLogExecution('DEBUG','customRecord Value inside IF',customRecord.length);
            }
            if(!_logValidation(customRecord)) {
                nlapiLogExecution('DEBUG','customRecord Value','into Second IF');
                filter.pop();
                filter.push(new nlobjSearchFilter('custrecord_vee_salesrep4_discount4',null,'between',[0,discountPercentage]));
                customRecord = searchCustomRecord(salesRep, filter);
                searchIndex = customRecord.length - 1;
                // nlapiLogExecution('DEBUG','customRecord Value inside IF',customRecord.length);
            }
            var comsionPercent = parseFloat(customRecord[searchIndex].getValue("custrecord_vee_salesrep4_percentage4"));
            var comsionRate = (comsionPercent*total)/100 ;
            if(isNaN(discountPercentage))
                discountPercentage = customRecord[searchIndex].getValue("custrecord_vee_salesrep4_discount4");
            var newCustomRecord = nlapiCreateRecord('customrecord_vee_crecord_transaction1');
            newCustomRecord.setFieldValue('custrecord_vee_marktransaction_cname',customer);//setting customer in new custom record
            newCustomRecord.setFieldValue('custrecord_vee_marktransaction_percent',discountPercentage);//Setting Discount in new custom record
            newCustomRecord.setFieldValue('custrecord_vee_marktransaction_salesrep',salesRep);//Setting SalesRep in new custom record
            newCustomRecord.setFieldValue('custrecord_vee_marktransaction_totalamo',total);//Setting total in new custom record
            newCustomRecord.setFieldValue('custrecord_vee_marktransaction_comission',comsionPercent);//Setting Commission in new custom record
            newCustomRecord.setFieldValue('custrecord_vee_marktransaction_currency',comsionRate);//Setting Commission Amount in new custom record
			newCustomRecord.setFieldValue('custrecord_vee_marktransaction_date',sodate);//Setting SalesOrder date in new custom record
            newCustomRecord.setFieldValue('custrecord_vee_marktransaction_order',Ordernum);//Setting Ordernum in new custom record
			nlapiSubmitRecord(newCustomRecord, false, true);
        }
    } catch (e) {
        nlapiLogExecution('DEBUG','execption',e);
    }
    }//type==create end loop
}
// customrecord_vee_customrecord_salesrep4
function searchCustomRecord(salesRep, filter) {
    var cols = [];
    cols.push(new nlobjSearchColumn("custrecord_vee_salesrep4_discount4",null,null));
    cols.push(new nlobjSearchColumn("custrecord_vee_salesrep4_percentage4",null,null));
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