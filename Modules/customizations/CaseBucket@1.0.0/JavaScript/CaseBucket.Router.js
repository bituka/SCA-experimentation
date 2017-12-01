
//@module CaseBucket
define('CaseBucket.Router'
,	[	'CaseBucket.View'
	,	'Backbone'
	,	'CaseBucket.Model'
	,	'CaseBucket.Collection'
	]
,	function (
		CaseBucketView
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
		}

	,	caseBucket: function ()
		{
			new CaseBucketView({
				application: this.application
			}).showContent();
		}

	, caseBucketList: function ()
	    {
	    	debugger;
	      var collection = new CaseBucketCollection()
	    , view = new CaseBucketView
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
