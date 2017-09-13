## Using Saved Searches on Scripts

**Important** : In order to use nlapiSearchRecord on Console Browser you must make sure you are first logged in Netsuite in order to use this API calls on browser. Also important to understand that you don't need to be on the saved search concept while using nlapiSearchRecord. It can be used anywhere in the Netsuite page. Also you have to put the saved search ID in order to access the saved search. The Id can be found on the url as searchid =. the number is the designated interal id of the Saved Search.

**Methods of Saved Search**: There are several methods within the saved search such as

 **1.** getAllColumns 

 **2.**  getId 

 **3.**  getKey 

 **4.**  getRecordType 

 **5.**  getText
 
 **6.**  getValue. 

 These methods can be found within the console browser . Once accessed you are able to query out the information. In other words using Saved searches on the browser is the simplst method of analyzing data on Netsuite.

 Saved Searches start at 0 based indexing, therefore the first line of detail starts at 0.
