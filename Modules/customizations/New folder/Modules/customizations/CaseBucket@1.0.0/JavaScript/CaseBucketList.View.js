
define('CaseBucketList.View', ['Backbone', 'Backbone.CompositeView', 'Backbone.CollectionView', 'RecordViews.View', 'CaseBucket.Details.View', 'underscore', 'jQuery', 'casebucketlist.tpl'],
    function (Backbone, BackboneCompositeView, BackboneCollectionView, RecordViewsView, CaseBucketDetailsView, _, jQuery, casebucketlist_tpl)
{
    'use strict';
//TODO
    //@class Balance.View @extend Backbone.View
    return Backbone.View.extend({

        template: casebucketlist_tpl

    ,   attributes:
        {
          'class': 'examplesuitescript-container'
        }

    ,   initialize: function initialize(options) {

debugger;
            this.options = options;
            this.application = options.application;

            var self = this;
            this.collection.on('reset sync add remove change destroy', function() {
            self.render();
            });
        }


    , childViews: {
        'Rep.List': function ()
        {

                return new BackboneCollectionView({
                    childView: CaseBucketDetailsView
                ,   collection: this.collection
                ,   viewsPerRow: 1
                });

            }
        }


    ,   getContext: function getContext()
        {
          return {
            hellogoryo: 'Hello Goryo'
          , hasReps: this.collection.length
          , content: JSON.stringify(this.collection.toJSON())
          }
        }
    });
});