define('CaseBucket.List.View'
, [
    'Backbone'
  , 'Backbone.CollectionView'

  , 'GlobalViews.Confirmation.View'

  , 'CaseBucket.Details.View'
  , 'casebucket_list.tpl'
  ]
, function
  (
    Backbone
  , CollectionView

  , ConfirmationView

  , DetailsView
  , Template
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

  , events: {
      'click button[data-action="remove"]': 'removeRecord'
    }

  , getBreadcrumbPages: function ()
    {
      return [{
        text: _('Example SuiteScript').translate()
      , href: '/casebucket'
      }]
    }

  , initialize: function (options)
    {
      this.options = options;
      this.application = options.application;

      var self = this;
      this.collection.on('reset sync add remove change destroy', function() {
        self.render();
      });
    }

  , removeModel: function (options)
    {
      var model = options.context.collection.get(options.id);
      model.destroy();
    }

  , removeRecord: function (e)
    {
      e.preventDefault();
      var view = new ConfirmationView
      ({
        title: _.translate('Remove Favorite Thing')
      , body: _.translate('Are you sure you want to remove this favorite thing?')
      , callBack: this.removeModel
      , callBackParameters: {
          context: this
        , id: jQuery(e.target).data('id')
        }
      , autohide: true
      });
      this.application.getLayout().showInModal(view);
    }

  , template: Template

  , title: _('Example SuiteScript Page').translate()
  });
});