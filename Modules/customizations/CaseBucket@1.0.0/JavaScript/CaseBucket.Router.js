
//@module CaseBucket
define('CaseBucket.Router'
,	[	'CaseBucket.View'
	,	'CaseBucket.List.View'
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
		}

	,	initialize: function (application)
		{
			this.application = application;
    //        this.options = options;
		}

	,	caseBucket: function ()
		{
			new CaseBucketView({
				application: this.application
			}).showContent();
		}

	, caseBucketList: function ()
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
