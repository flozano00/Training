/**4 types of portlets
1. form portlet
2. link portlet 
3. html portlets
4. List portlets - The list portlets allows for 2 saved searches to be in a logical format and it's more flexible and make sure a better format.

The first portlet parameter is an actual object. creates the canvas for the portlet  and allows the area to show creation
**/

/**
 *  The bottom portlet is a form portlet with a SUITELET script. It's important to create a SUITELET script outside of the actual JS File.
 *  We use the Submit button by using the SUITELET.
 */
function portlets(portlet, column) {
	nlapiLogExecution('debug', 'test', 'deta');
	portlet.setTitle("Form Portlet"); // This is the first method within the portlet of Object.
	portlet.addField('custpage_frank', 'text', 'FRANK') // the add field whenever you create a field with scripting you should prefix it with custpage. If you don't use custpage then you will create an error.
//	portlet.addField(name, type, label, source); //these four parameters allow for proper use,
//	the first paramter is custpage_frank which is the internal id of the field. The field must have custpage on it.
//	The second parameter is the type of field which is text.
//	The third parameter is the field label which is the name.
//	The fourth parameter is the source from another employee record.

//	Please help Venkly explain these parameters in regards to nlapiResolveURL.
//	
//	nlapiResolveURL(resourceType, identifier, id, displayMode);
//	// the Identifier is the Script ID.
//	// the Id is the deployment ID.
//	// The display mode shows view or edit if it's only suitelet.
	portlet.setSubmitButton(nlapiResolveURL('SUITELET', 'customscript_test_suitelet', 
		'customdeploy_test_suitelet'), 'SUBMIT');

};