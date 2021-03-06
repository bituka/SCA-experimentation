define(
	'CaseBucket.ServiceController'
,	[
		'Application'
	,	'ServiceController'
	,	'CaseBucket.Model'
	]
,	function(
		Application
	,	ServiceController
	,	CaseBucketModel
	)
	{
		'use strict';

		// @class Case.ServiceController Manage support cases
		// @extend ServiceController
		return ServiceController.extend({

			// @property {String} name Mandatory for all ssp-libraries model
			name: 'CaseBucket.ServiceController'

			// @property {Service.ValidationOptions} options. All the required validation, permissions, etc.
			// The values in this object are the validation needed for the current service.
			// Can have values for all the request methods ('common' values) and specific for each one.
		/*
		,	options: {
				common: {
					requireLogin: true
				,	requirePermissions: {
						list: [
							'lists.listCase.1'
						]
					}
				}
			}
		*/
			// @method get The call to Case.Service.ss with http method 'get' is managed by this function
			// @return {Array<Case.Model.Attributes>}
		,	get: function()
			{

				var id = this.request.getParameter('internalid') || this.data.internalid;
				if(id)
				{
					return CaseBucketModel.get(id);
				}
				else
				{

				//Display list
					return CaseBucketModel.list();

				/*
					var list_header_data = {
						filter: this.request.getParameter('filter')
					,   order: this.request.getParameter('order')
                    ,   sort: this.request.getParameter('sort')
                    ,   from: this.request.getParameter('from')
                    ,   to: this.request.getParameter('to')
                    ,   page: this.request.getParameter('page')
					};
					return CaseModel.search(nlapiGetUser() + '', list_header_data);
				*/
				}
			}

			// @method post The call to Case.Service.ss with http method 'post' is managed by this function
			// @return {Case.Model.Attributes}
		/*
			,	post: function()
			{
				var new_case_id = CaseModel.create(nlapiGetUser() + '', this.data);
				return CaseModel.get(new_case_id);
			}
		*/
			// @method put The call to Case.Service.ss with http method 'put' is managed by this function
			// @return {Case.Model.Attributes}
		,	put: function()
			{
				var id = this.request.getParameter('internalid') || this.data.internalid;
				CaseBucketModel.update(id, this.data);
				return CaseBucketModel.get(id);
			}
		});
	}
);