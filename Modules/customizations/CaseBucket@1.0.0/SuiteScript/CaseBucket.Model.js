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

			// @method get
		// @param {String} id
		// @returns {Case.Model.Attributes}
		, list: function list() {

	      var searchResults;

	      var searchFilters = [
	        new nlobjSearchFilter('custentity_cust_field_team_name', null, 'is', 'Test Team')
	      ];

	      var searchColumns = [
	        new nlobjSearchColumn('email')
	      , new nlobjSearchColumn('name')
	      ];
	      var searchResults = Application.getAllSearchResults('customer', searchFilters, searchColumns);

	      if (searchResults) { // && searchResults.length > 0)

	      	return _.map(searchResults, function (result) {
		        return {
		          email: result.getValue('email')
		        , name: result.getValue('name')

		        }
	      })
	      }
	      return searchResults;
	    }



	});
});