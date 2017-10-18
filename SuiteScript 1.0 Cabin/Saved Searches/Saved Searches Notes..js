/**
 * This has to be set within the console browser.
 * I want to analyze a specific search within the console log.
 * Helps analyze the saved search faster.
 */

/**
 * Suite Script export for saved search.
 * @type {Transaction}
 */

// First create a variable with the API Call nlapiSearchRecord
// 1) sure you set the type .
// 2) The Internal Id of the Saved Search
// 3) Filters of the search if any
// 4) the columns of  all those saved searches.

// Once loaded to the console you will get a value called undefined.
var search = nlapiSearchRecord(type, id, filters, columns) //undefined

search[0];