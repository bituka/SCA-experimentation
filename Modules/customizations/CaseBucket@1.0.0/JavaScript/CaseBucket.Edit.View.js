define('CaseBucket.Edit.View'
, [
    'Backbone'
  , 'Backbone.FormView'

  , 'casebucket_edit.tpl'
  ]
, function
  (
    Backbone
  , FormView

  , Template
  )
{
  'use strict';

  return Backbone.View.extend({
    events:
    {
      'submit form': 'saveForm'
    }

  , getBreadcrumbPages: function ()
    {
        return [
          {text: _('Bucket Manager').translate(), href: '/casebucketlist'}
        , {text: 'Enter Grabbed Case - ' + this.model.get('name'), href: '/casebucket/' + this.model.get('internalid')}
        ]
    }

  , getContext: function ()
    {
      return {
        id: this.model.get('internalid')
      //  isNew: this.model.isNew()
      // favething: this.model.get('faveThing')
      //, favereason: this.model.get('faveReason')
      }
    }

  , initialize: function (options)
    {
      this.application = options.application;
      this.model = options.model;
      FormView.add(this);
    }

  , template: Template
  })
})