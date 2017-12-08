define(
  [
    'N/search'
  ]
, function CaseBucketSuitelet
  (
    search
  )
{
function getCustomer(context)
{

    // Define search filters
    var searchFilters = new Array();
    searchFilters[0] = new nlobjSearchFilter ('custentity_cust_field_team_name', null, 'anyof', 1);

    // Define search columns
    var searchColumns = new Array();
    searchColumns[0] = new nlobjSearchColumn('email');
    searchColumns[1] = new nlobjSearchColumn('companyname');

    var searchResults = nlapiSearchRecord('customer', null, searchFilters, searchColumns);

    var supportReps = [];

    for (var i=0; i < searchResults.length; i++)
    {

        var searchResult = searchResults[i];

        var email = searchResult.getValue('email');
        var name = searchResult.getValue('companyname');

        supportReps.push({
            email: email,
            name: name
        });

        context.response.setHeader({
          name: 'Content-Type'
        , value: 'application/json'
        });

        context.response.write({
          output: JSON.stringify(supportReps) || {}
        });

    }

}

return {
    onRequest: getCustomer
  };
});




function getCustomerOld(request, response)
{
    /*
    var searchFilters = [
        new nlobjSearchFilter('custentity_cust_field_team_name', null, 'anyof', 'Test Team')
    ];

    var searchColumns = [
        new nlobjSearchColumn('email')
    ,   new nlobjSearchColumn('companyname')
    ];
    */


    // Define search filters
    var searchFilters = new Array();
    searchFilters[0] = new nlobjSearchFilter ('custentity_cust_field_team_name', null, 'anyof', 1);

    // Define search columns
    var searchColumns = new Array();
    searchColumns[0] = new nlobjSearchColumn('email');
    searchColumns[1] = new nlobjSearchColumn('companyname');

    var searchResults = nlapiSearchRecord('customer', null, searchFilters, searchColumns);

    var supportReps = [];

    for (var i=0; i < searchResults.length; i++)
    {

        var searchResult = searchResults[i];

        var email = searchResult.getValue('email');
        var name = searchResult.getValue('companyname');

        supportReps.push({
            email: email,
            name: name
        });

    response.setContentType('JSON');
    response.write(JSON.stringify(supportReps));

    }

}