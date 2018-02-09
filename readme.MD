1. npm install kilimanjaro

2. Download code from the repo below and dev environment 
Repo:
https://gitlab.eng.netsuite.com/gkgarcia/bucket-manager.git

3. add to shooping in distro.json:

	"modules": {
        "customizations/CaseBucket": "1.0.0",

    also in shopping.js

gulp local:
http://manggoryo.dev/c.TSTDRV1518125/sca-dev-kilimanjaro/shopping-local.ssp#/casebucketlist


	add to localhost - 64.89.45.13 manggoryo.dev/casebucketlist


4. Set up Suitelets:

name: sl_customer_casebuket
id: customscript_sl_customer_casebuket
script: sl_customer_casebuket.js

name: suiteletTeam
deployment: customdeploy_suiteletteam_deploy
script: Team Suitelet



//TOFIX
fix blank page just added backboneview form and some others in CaseBucket.List.View