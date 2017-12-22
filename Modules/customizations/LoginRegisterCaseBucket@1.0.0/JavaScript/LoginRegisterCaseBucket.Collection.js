define('LoginRegisterCaseBucket.Collection'
, [
    'Backbone'
  , 'LoginRegisterCaseBucket.Model'
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
    url: Utils.getAbsoluteUrl('services/LoginRegisterCaseBucket.Service.ss')
  , model: Model
  })
});