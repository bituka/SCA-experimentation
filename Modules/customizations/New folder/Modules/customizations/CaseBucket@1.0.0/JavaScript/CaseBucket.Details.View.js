define('CaseBucket.Details.View'
, [
    'Backbone'

  , 'casebucket_details.tpl'
  ]
, function
  (
    Backbone

  , Template
  )
{
  'use strict';

  return Backbone.View.extend ({
    template: Template

  , getContext: function ()
    {
      return {
        name: this.model.get('name')
      , email: this.model.get('email')
      , internalid: this.model.get('internalid')
      }
    }
  })
});