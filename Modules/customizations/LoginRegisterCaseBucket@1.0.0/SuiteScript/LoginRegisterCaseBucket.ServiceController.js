define(
	'LoginRegisterCaseBucket.ServiceController'
,	[
		'Application'
	,	'ServiceController'
	,	'LoginRegisterCaseBucket.Model'
	]
,	function(
		Application
	,	ServiceController
	,	LoginRegisterCaseBucketModel
	)
	{
		'use strict';


		return ServiceController.extend({

			name: 'LoginRegisterCaseBucket.ServiceController'

		,	get: function()
			{

				//TODELETE or refactor???
				var id = this.request.getParameter('internalid') || this.data.internalid;
				if(id)
				{
					return LoginRegisterCaseBucketModel.get(id);
				}
				else
				{

				//Display list
					return LoginRegisterCaseBucketModel.list();

				}
			}

	/*
		,	post: function()
			{
				var new_case_id = CaseModel.create(nlapiGetUser() + '', this.data);
				return CaseModel.get(new_case_id);
			}

			// @method put The call to Case.Service.ss with http method 'put' is managed by this function
			// @return {Case.Model.Attributes}
		,	put: function()
			{
				var id = this.request.getParameter('internalid') || this.data.internalid;
				CaseModel.update(id, this.data);
				return CaseModel.get(id);
			}
			*/
		});
	}
);