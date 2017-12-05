

/**
 * The Client gives the request and server sends the response. The response is what allows for the retrieval of information.
 */
/**
 *  In Suitelet you can request and do responses aswell deal with the UI.
 */

function suitelet(request, response) {
	if(request.getMethod() == 'POST') {
	nlapiLogExecution('Debug', 'Get Method', request.getMethod());
		//In server languages their are 2 requests Get and Post. The same mostly but the only difference between GET and POST.
		/**
		 * What is GET?  In get you can only have limitation with 100
		 * What is POST? IN Netsuite  You use post to hide the data wihtin the URL. Also their is not
		 * of characters within POST. For the most part POST most of the time on BackEND in NetSuite it's mostly post
		 */
		
		var field = request.getParameter('custpage_frank');
		nlapiLogExecution('debug', 'field value', field);
		var rec = nlapiCreateRecord('customrecord_testrecord');
		rec.setFieldValue('custrecord_test_name', field);
		nlapiSubmitRecord(rec, false, true)
	}
}