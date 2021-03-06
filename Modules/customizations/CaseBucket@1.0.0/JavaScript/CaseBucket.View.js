/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module CaseBucket
define('CaseBucket.View'
,	[
	'Backbone'
,	'casebucket.tpl'
	]
,	function (
	Backbone
,	casebucket_tpl
	)
{
	'use strict';

	//@class Balance.View @extend Backbone.View
	return Backbone.View.extend({

		template: casebucket_tpl

	});
});