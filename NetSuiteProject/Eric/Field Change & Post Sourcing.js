/**You would have to do something like:

1) Initialize a script-level Boolean variable `showTermsWarning` to `true`
2) On `fieldChanged` for `entity` field, set `showTermsWarning` to `false`
3) On `postSourcing` for `entity` field, set `showTermsWarning` back to `true`
4) In `fieldChanged` for `terms`, check `showTermsWarning` before showing alert

*/
/**
 * Initially not to show any warning.
 * 
 */
var showTermsWarning = false;


/**
 *
 * Understand Validate Field
 */
function validateField(type, name) {
	nlapiLogExecution('debug', 'field change', name);
  if (name === "paymentmethod") {
    if(showTermsWarning == true) {
	    alert("U cannot Choose a Payment method.");
	    return false;
	}
  } 
  else return true;
}

function postSourcing(type, name) {
  if (name === "entity") {
    showTermsWarning = true; // after all dependent fields have updated, turn warning back on
  }
}

/**
 * Yep; `postSourcing` is a bit confusing with how it works, but that's the gist of it


[5:23] 
note that `postSourcing` does not fire at all for fields that have no dependent fields
 */


/**
 * What is post sourcing & Field Changed ?
 *
 * Field change the ability of function trigger a script when their is field value is changing 
 *
 * 
 */