define('CaseBucket.List.View'
, [
    'Backbone'
  , 'Backbone.CollectionView'

  , 'GlobalViews.Confirmation.View'

  , 'CaseBucket.Details.View'
  , 'casebucket_list.tpl'
  , 'underscore'
  ]
, function
  (
    Backbone
  , CollectionView

  , ConfirmationView

  , DetailsView
  , Template
  , _
  )
{
  'use strict'

  return Backbone.View.extend ({
    attributes:
    {
      'class': 'casebucket-container'
    }

  , childViews:
    {
      'CaseBucket.Collection': function ()
      {
        return new CollectionView({

          'childView': DetailsView,
          'collection': this.collection,
          'viewsPerRow': 1
        });
      }
    }

  , getBreadcrumbPages: function ()
    {
      return [{
        text: _('Bucket Manager').translate()
      , href: '/casebucketlist'
      }]
    }

  , initialize: function (options)
    {
      this.options = options;
      this.application = options.application;
      this.model = options.model;

      var self = this;
      
      this.collection.on('reset sync add remove change destroy', function() {
        self.render();
      });
 
    }

  , template: Template

  , title: _('Bucket Manager').translate()
  });
});


