## Using Saved Searches on Scripts

**Important** : In order to use nlapiSearchRecord on Console Browser you must make sure you are first logged in Netsuite in order to use this API calls on browser. Also important to understand that you don't need to be on the saved search UI while using nlapiSearchRecord. It can be used anywhere in the Netsuite page. Also you have to put the saved search ID in order to access the saved search. The Id can be found on the url as searchid =. the number is the designated internal id of the Saved Search.

**Methods of Saved Search**: There are several methods within the saved search such as

 **1.** getAllColumns 

 **2.**  getId 

 **3.**  getKey 

 **4.**  getRecordType 

 **5.**  getText
 
 **6.**  getValue. 

 These methods can be found within the console browser . Once accessed you are able to query out the information. In other words using Saved searches on the browser is the simplist method of analyzing data on Netsuite.

 Saved Searches start at 0 based indexing, therefore the first line of detail starts at 0.



  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ## Friday, September 15, 2017
  ### Notes and Understanding
  #### The Concept of Saved Searches are as SQL. Understand the dynamic Portion are both relevant to each other.


  The concept of Saved Searches within Netsuite. The ability to write queries within the console browser is important due to the fact 
  faster manner of analyzing data within Netsuite aswell the ability to dynamically set fields . 
 


  nlapiSearchRecord(type, id, filters, columns);
  1.	The first prameter is type. Here we see type as Job.
  2.	The Second parameter is access to the saved search without actually going through the UI.
  3.	The third parameter is the criteria portion of the Saved Search. This will give me the ability. in SQL it's the WHERE clause. 
  - 	The SQL WHERE Clause. The WHERE clause is used to filter records.
  4.	the columns parameter allows for the results to show. Therefore the new nlobjSearchColumn are the results and the ability to view the results.
 
### Example 1.1


'var jobSearch = nlapiSearchRecord("job",null,
[
   ["internalid","anyof","1660","1666","1667","1668","1669","1670","1671","1672","1675"]
], 
[
   new nlobjSearchColumn("custentity_client",null,null), 
   new nlobjSearchColumn("jobtype",null,null), 
   new nlobjSearchColumn("percentcomplete",null,null), 
   new nlobjSearchColumn("companyname",null,null), 
   new nlobjSearchColumn("entitystatus",null,null), 
   new nlobjSearchColumn("title","projectTask",null)
]
);'