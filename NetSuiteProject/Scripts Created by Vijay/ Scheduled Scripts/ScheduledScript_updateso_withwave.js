function sch_updateso_withwave(type)
{
//Test here

var salesorderSearch = nlapiSearchRecord("salesorder",null,
[
   ["type","anyof","SalesOrd"],
   "AND",
   ["applyingtransaction.type","anyof","Wave"],
   "AND",
   ["custbody_wave_transaction","anyof","@NONE@"]
],
[
   new nlobjSearchColumn("internalid",null,"GROUP"),
   new nlobjSearchColumn("tranid",null,"GROUP"),
   new nlobjSearchColumn("tranid","applyingTransaction","GROUP"),
   new nlobjSearchColumn("internalid","applyingTransaction","GROUP")
]
);



if (_logValidation(salesorderSearch))
  {
    for (var i = 0; i < salesorderSearch.length; i++)
    {
      try
      {
       var soid = salesorderSearch[i].getValue("internalid",null,"GROUP");
       nlapiLogExecution('DEBUG', 'sch_updateso_withwave', 'soid =' + soid);
       var waveid = salesorderSearch[i].getValue("internalid","applyingTransaction","GROUP");
       nlapiLogExecution('DEBUG', 'sch_updateso_withwave', 'waveid =' + waveid);
       var soobj = nlapiLoadRecord('salesorder',soid);
       soobj.setFieldValue('custbody_wave_transaction', waveid);
       var id =  nlapiSubmitRecord(soobj);
      //checkUsage();
       }
      catch (e) {
      nlapiLogExecution('ERROR', 'Exception', e);
                }
    }


}

}


function _logValidation(value) {
  if (value != 'null' && value != '' && value != undefined && value != 'undefined' && value != 'NaN' && value != NaN) {
    return true;
  } else {
    return false;
  }
}
