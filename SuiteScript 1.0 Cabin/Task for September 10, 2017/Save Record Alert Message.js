function fieldchanged_payment(type, name){
		nlapiLogExecution('Audit', 'Funcion Begins:', 'Begins');

 	if (name == "terms"){
 		
 		nlapiLogExecution('Debug', 'field Name: ', name);
 		var termMethod = nlapiGetFieldValue("terms");
 		var termMessage = nlapiGetFieldText('terms');

  		nlapiLogExecution('Debug', 'Terms: ', "The Terms are: " + termMethod);
  		if (termMethod > 0){
  			if(alert("You Can't Choose a Payment Method") == true){
 			 	nlapiSetFieldText('paymentmethod', 0);
 				return true;




  			};




  			return true;
  		}

 
  	}
 	};











