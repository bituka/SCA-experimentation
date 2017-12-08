
//@module CaseBucket
define('CaseBucket.Router'
,	[	'CaseBucket.View'
	,	'CaseBucketList.View'
	,	'Backbone'
	,	'CaseBucket.Model'
	,	'CaseBucket.Collection'
	]
,	function (
		CaseBucketView
	,	CaseBucketListView
	,	Backbone
	,	CaseBucketModel
	,	CaseBucketCollection
	)
{
	'use strict';

	//@class CaseBucket.Router @extend Backbone.Router
	return Backbone.Router.extend({

		routes: {
			'casebucket': 'caseBucket'
		,	'casebucketlist': 'caseBucketList'
		,	'casebucket/:id': 'details'
		}

	,	initialize: function (application)
		{
			console.log(application);
			this.application = application;

		}

	,	caseBucket: function ()
		{
			new CaseBucketView({
				application: this.application
			}).showContent();
		}
	, 	details: function (id)
	    {
		    var model = new CaseBucketModel()
		    , self = this;

      		model.fetch({data: {internalid: id}}).done(function ()
		{
	        var view = new EditView
	        ({
				application: self.application
				, model: model
			});
				view.showContent();
				view.model.on('sync change destroy reset add', function (model)
				{
					Backbone.history.navigate('casebucket', {trigger: true});
				});
			});
	    }
	, 	caseBucketList: function ()
	    {

	      var collection = new CaseBucketCollection()
	    , view = new CaseBucketListView
	      ({
	        collection: collection
	      , application: this.application
	      });

	      collection.fetch().done(function ()
	      {
	        view.showContent();
	      });
	    }

	});
});
