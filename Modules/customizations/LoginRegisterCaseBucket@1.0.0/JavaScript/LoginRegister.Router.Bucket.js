define('LoginRegister.Register.View.Bucket', [
    'LoginRegister.Router',
    'underscore',
    'jQuery',
    'LoginRegister.Register.View.Bucket',
    'LoginRegisterCaseBucket.Collection',
    'LoginRegisterCaseBucket.Model'

], function LinkToReviews(
    LoginRegisterRouter,
    _,
    jQuery,
    LoginRegisterRegisterViewBucket,
    LoginRegisterCaseBucketCollection,
    LoginRegisterCaseBucketModel
) {
    'use strict';

    // events for all instances
    // _.extend(LoginRegisterRouter.prototype.events, {
    //     'click .item-details-rating-header-rating': 'onClickRating'
    // });
    _.extend(LoginRegisterRouter.prototype.routes, {
        'caseBucketTeamList': 'caseBucketTeamList'
    });


    _.extend(LoginRegisterRouter.prototype, {
        // methods for all instances
        // onClickRating: function clickItemDetailsRatingHeader(e) {
        //     e.preventDefault();
        //     jQuery('body').animate({
        //         scrollTop: this.$('.item-details-product-review-content').offset().top
        //     }, 'fast');
        // },

        // methods for all instances
        caseBucketTeamList: function caseBucketTeamList()
        {

          var collection = new LoginRegisterCaseBucketCollection()

        , view = new LoginRegisterRegisterViewBucket
          ({
            collection: collection
          , application: this.application
          });


          collection.fetch().done(function ()
          {
            view.showContent();
          });
        },

        // properties for all instances
        page_header: _('Bucket Team List').translate()
    });


});

console.log(this.model);