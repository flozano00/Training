/**You would have to do something like:
1) Initialize a script-level Boolean variable `showTermsWarning` to `true`
2) On `fieldChanged` for `entity` field, set `showTermsWarning` to `false`
3) On `postSourcing` for `entity` field, set `showTermsWarning` back to `true`
4) In `fieldChanged` for `terms`, check `showTermsWarning` before showing alert
*/

var showTermsWarning = true;

function fieldChanged(name) {
  if (name === "entity") {
    showTermsWarning = false; // turn off warning while Customer's dependent fields are changing
  } else if (name === "terms") {
    if (!showTermsWarning) { return; } // don't do anything when showTermsWarning is false
    
    // existing code here
  }
}

function postSourcing(name) {
  if (name === "entity") {
    showTermsWarning = true; // after all dependent fields have updated, turn warning back on
  }
}

/**
 * Yep; `postSourcing` is a bit confusing with how it works, but that's the gist of it
[5:23] 
note that `postSourcing` does not fire at all for fields that have no dependent fields
 */