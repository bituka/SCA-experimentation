define(
	'LoginRegisterCaseBucket.Model'
,	[
		'SC.Model'
	,	'underscore'
	,	'Application'
	]
,	function (
		SCModel
	,	_
	,	Application
	)
{
	'use strict';
	return SCModel.extend({

		name: 'CaseBucket'

		, list: function list() {

		//	console.log('SS CaseBucket.Model has been called');

			var suiteletURL = nlapiResolveURL('SUITELET',  'customscript_suiteletteam', 'customdeploy_suiteletteam_deploy', true);
			var headers = new Array();
			headers['Content-Type'] = 'application/json';
			headers['User-Agent-x'] = 'SuiteScript-Call';

			var supportTeams = nlapiRequestURL(suiteletURL, null, headers, 'GET');

			// nlapiLogExecution('DEBUG', 'reps', JSON.stringify(supportReps));

		//	console.log(JSON.stringify(supportReps));

			return supportTeams.getBody();


		/* permission error
	      var searchResults;

	      var searchFilters = [
	        new nlobjSearchFilter('custentity_cust_field_team_name', null, 'is', 'Test Team')
	      ];

	      var searchColumns = [
	        new nlobjSearchColumn('email')
	      , new nlobjSearchColumn('companyname')
	      ];
	      var searchResults = Application.getAllSearchResults('customer', searchFilters, searchColumns);

	      if (searchResults) { // && searchResults.length > 0)

	      	return _.map(searchResults, function (result) {
		        return {
		          email: result.getValue('email')
		        , name: result.getValue('companyname')

		        }
	      })
	      }
	      return searchResults;

	      */
	    }
	});
});