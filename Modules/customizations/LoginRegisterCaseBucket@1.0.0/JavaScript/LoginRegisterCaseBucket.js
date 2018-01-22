/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
	npm install
	bitbucket repo



	http://manggoryo.dev/c.TSTDRV1518125/sca-dev-kilimanjaro/shopping-local.ssp#/casebucketlist


	add to shooping in distro.json
	"modules": {
        "customizations/CaseBucket": "1.0.0",

    also shopping.js

	add to localhost - 64.89.45.13 goryotripko.dev
*/

//@module CaseBucket
define('LoginRegisterCaseBucket'
,	[	'LoginRegister.Router.Bucket'
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

		mountToApp: function (application)
		{
			return new Router(application)
		}
	};
});
