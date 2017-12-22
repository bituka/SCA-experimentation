function suiteletTeam(request, response)
{
    if (request.getMethod() == "GET")
    {
        // Define search filters
        // var searchFilters = new Array();
        // searchFilters[0] = new nlobjSearchFilter ('custentity_cust_field_team_name', null, 'anyof', 1);

        // Define search columns
        var searchColumns = new Array();
        searchColumns[0] = new nlobjSearchColumn('internalId');
        searchColumns[1] = new nlobjSearchColumn('name');

        var searchResults = nlapiSearchRecord(' customrecord_custlist_team_name ', null, null, searchColumns);

        var teamName = [];

        for (var i=0; i < searchResults.length; i++)
        {

            var searchResult = searchResults[i];

            var internalId = searchResult.getValue('internalId');
            var teamname = searchResult.getValue('name');

            supportReps.push({
                internalId: internalId,
                teamname: teamname
            });

        response.setContentType('JSON');
        nlapiLogExecution('DEBUG', 'reps from SL', JSON.stringify(supportReps));
        response.write(JSON.stringify(supportReps));

        }
    }

}