/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
	npm install
	bitbucket repo



	goryotripko.dev/c.TSTDRV1073973/sca-dev-kilimanjaro/shopping-local.ssp#/casebucket


	add to shooping in distro.json
	"modules": {
        "customizations/CaseBucket": "1.0.0",

    also shopping.js

	add to localhost - 64.89.45.13 goryotripko.dev
*/

//@module CaseBucket
define('CaseBucket'
,	[	'CaseBucket.Router'
	,	'underscore'

	]
,	function (
		Router
	,	_
	)
{
	'use strict';

	// @class Balance @extends ApplicationModule
	return	{
		// MenuItems: {
		// 	name: _('Billing').translate()
		// ,	id: 'billing'
		// ,	index: 3
		// ,	children: [{
		// 		id: 'balance'
		// 	,	name: _('Account Balance').translate()
		// 	,	url: 'balance'
		// 	,	index: 1
		// 	}]
		// }

	//,	mountToApp: function (application)
		mountToApp: function (application)
		{
			return new Router(application);
		}
	};
});
