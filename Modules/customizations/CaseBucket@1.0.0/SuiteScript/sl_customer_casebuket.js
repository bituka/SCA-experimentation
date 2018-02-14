function getCustomer(request, response)
{

    // Define search filters
    var searchFilters = new Array();
    searchFilters[0] = new nlobjSearchFilter ('custentity_cust_field_team_name', null, 'anyof', 1);

    // Define search columns
    var searchColumns = new Array();
    searchColumns[0] = new nlobjSearchColumn('email');
    searchColumns[1] = new nlobjSearchColumn('companyname');
    searchColumns[2] = new nlobjSearchColumn('custentity_case_queue_number');
    searchColumns[3] = new nlobjSearchColumn('custentity_cust_last_grabbed_case');
    searchColumns[4] = new  nlobjSearchColumn('internalid');	
  
    var searchResults = nlapiSearchRecord('customer', null, searchFilters, searchColumns);

    var supportReps = [];
    
    for (var i=0; i < searchResults.length; i++)
    {

        var searchResult = searchResults[i];

        var email = searchResult.getValue('email');
        var name = searchResult.getValue('companyname');
        var case_queue_number = searchResult.getValue('custentity_case_queue_number');
        var last_grabbed_case = searchResult.getValue('custentity_cust_last_grabbed_case');
        var internalid = searchResult.getValue('internalid');

        supportReps.push({
            email: email,
            name: name,
            case_queue_number: case_queue_number,
            last_grabbed_case: last_grabbed_case,
            internalid: internalid
        });
    }
    response.setContentType('JSON');
    nlapiLogExecution('DEBUG', 'reps from SL', JSON.stringify(supportReps));
    response.write(JSON.stringify(supportReps));


}

