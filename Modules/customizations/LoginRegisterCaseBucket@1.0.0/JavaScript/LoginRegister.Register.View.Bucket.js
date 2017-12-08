define('LoginRegister.Register.View.Bucket', [
    'LoginRegister.Register.View',
    'underscore',
    'jQuery'
], function LinkToReviews(
    LoginRegisterRegisterView,
    _,
    jQuery
) {
    'use strict';

    // events for all instances
    /*
    _.extend(LoginRegisterRegisterView.prototype.events, {
        'click .item-details-rating-header-rating': 'onClickRating'
    });
    */

    _.extend(LoginRegisterRegisterView.prototype, {
        // methods for all instances
        onClickRating: function clickItemDetailsRatingHeader(e) {
            e.preventDefault();
            jQuery('body').animate({
                scrollTop: this.$('.item-details-product-review-content').offset().top
            }, 'fast');
        },
        // methods for all instances
        anotherMethod: function anotherMethod() {

        },
        // properties for all instances
        page_header: _('New page Header').translate()
    });


});