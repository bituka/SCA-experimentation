define('CaseBucket.Collection'
, [
    'Backbone'
  , 'CaseBucket.Model'
  , 'Utils'
  ]
, function
  (
    Backbone

  , Model

  , Utils
  )
{
  'use strict';
  console.log(Model);
  return Backbone.Collection.extend({
    url: Utils.getAbsoluteUrl('services/CaseBucket.Service.ss')
  , model: Model
  })
});