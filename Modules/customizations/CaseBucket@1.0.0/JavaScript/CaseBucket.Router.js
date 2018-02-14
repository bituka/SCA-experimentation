
//@module CaseBucket
define('CaseBucket.Router'
,	[	'CaseBucket.View'
	,	'CaseBucket.List.View'
	,	'CaseBucket.Edit.View'
	,	'Backbone'
	,	'CaseBucket.Model'
	,	'CaseBucket.Collection'
	]
,	function (
		CaseBucketView
	,	CaseBucketListView
	,	CaseBucketEditView
	,	Backbone
	,	CaseBucketModel
	,	CaseBucketCollection
	)
{
	'use strict';

	//@class CaseBucket.Router @extend Backbone.Router
	return Backbone.Router.extend({

	routes: {
			'/':'caseBucketList'
		,	'casebucket': 'caseBucket'
		,	'casebucketlist': 'caseBucketList'
		, 'casebucket/:id': 'caseBucketDetails'
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

		, caseBucketDetails: function (id)
    {
      var model = new CaseBucketModel()
    , self = this;

      model.fetch({data: {internalid: id}}).done(function ()
      {
        var view = new CaseBucketEditView
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

	});
});
