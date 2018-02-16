define(
	'CaseBucket.Model'
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

		
		//Learned from  Working with Commerce Data: Elevated Permissions, Searches, SuiteScript 2.0 and Bootstrapping
		// https://developers.suitecommerce.com/working-with-commerce-data-elevated-permissions-searches-suitescript-20-and-bootstrapping
		
		, get: function (id)
    	{
				var filters = [	
					new nlobjSearchFilter('internalid', null, 'is', id)
				]

				, columns = [	
						new nlobjSearchColumn('internalid')
				  , new nlobjSearchColumn('companyname')
				//  , new nlobjSearchColumn('custrecord_favething_reason')
					]

				, search = nlapiSearchRecord('customer', null, filters, columns);

					if (search && search.length === 1)
					{
						return {
							internalid: search[0].getValue('internalid')
						, name: search[0].getValue('companyname')
					//	, faveReason: search[0].getValue('custrecord_favething_reason')
						}
					}

					else
					{
						throw notFoundError;
					}
			}

		// This is in SUITELET
		, list: function list() 
			{
		
		//	console.log('SS CaseBucket.Model has been called');

			var suiteletURL = nlapiResolveURL('SUITELET', 1192, 1, true);
			var headers = new Array();
			headers['Content-Type'] = 'application/json';
			headers['User-Agent-x'] = 'SuiteScript-Call';

			var supportReps = nlapiRequestURL(suiteletURL, null, headers, 'GET');
			
			// nlapiLogExecution('DEBUG', 'reps', JSON.stringify(supportReps));

		//	console.log(JSON.stringify(supportReps));

			return supportReps.getBody();


		/* permission error but now fixed *******
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
			
			, update: function (id, data)
				{
				//	this.validate(data);

					var record = nlapiLoadRecord('customer', id);
					record.setFieldValue('custentity_cust_last_grabbed_case', data.grabbedcase);
					
					return nlapiSubmitRecord(record)
				}
	});
});