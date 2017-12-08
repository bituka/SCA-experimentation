define('CaseBucket.Collection'
, [
    'Backbone'
  , 'CaseBucket.Model'
  , 'underscore'
  , 'Utils'
  ]
, function
  (
    Backbone

  , Model
  , _
  , Utils
  )
{
  'use strict';

  return Backbone.Collection.extend({
    url: _.getAbsoluteUrl('services/CaseBucket.Service.ss')

  , model: Model
  , parse: function (response)
    {
    //  console.log('from model' + Model);
    //  console.log(response);
      return response.records;
    }
  })
});