/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Case
define(
	'CaseBucket.Model'
,	[
		'Backbone'
	,	'underscore'
	,	'Utils'
	]
,	function (
		Backbone
	,	_
    ,   Utils
	)
{
	'use strict';

    return Backbone.Model.extend(
    {

        urlRoot: _.getAbsoluteUrl('services/CaseBucket.Service.ss')

    })
});