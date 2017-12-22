define('LoginRegister.Register.View.Bucket', [
    'LoginRegister.Register.View',
    'underscore',
    'jQuery',
    'Backbone',
    'Backbone.CompositeView',
    'Backbone.CollectionView'
], function LinkToReviews(
    LoginRegisterRegisterView,
    _,
    jQuery,
    Backbone,
    BackboneCompositeView,
    BackboneCollectionView
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
        /*
        onClickRating: function clickItemDetailsRatingHeader(e) {
            e.preventDefault();
            jQuery('body').animate({
                scrollTop: this.$('.item-details-product-review-content').offset().top
            }, 'fast');
        },
        */
        // methods for all instances
        // anotherMethod: function anotherMethod() {

        // },
        // properties for all instances
        // page_header: _('Case Bucket Register').translate()

        /*
        events: _.extend(LoginRegisterRegisterView.prototype.events,{
            'click #clear-cart':'clearCart'
        })
        */

        //TODO
        bindings: _.extend(LoginRegisterRegisterView.prototype.bindings,{
            '[name="teamname"]': 'teamname'
        })

        //TODO
     ,  getContext: _.extend(LoginRegisterRegisterView.prototype.getContext,{
          // var teams = new Backbone.Collection(_.map(this.model.get('rating_per_attribute'), function (value, key)

          /*
            var teams = new Backbone.Collection(_.map(this.model.get('rating_per_attribute'), function (value, key)
                    {
    					//@class CreditCard.PaymentMetod
    					return {
    						//@property
  //  						hidden: !(self.model.isNew() || selected_payment_method && paymentmethod.key === selected_payment_method.key)
   // 					,	icon: paymentmethod.imagesrc
    						internalid: paymentmethod.internalid
    					,	key: paymentmethod.key
    					,	name: paymentmethod.name
    					,	selected: selected_payment_method && paymentmethod.key === selected_payment_method.key
    					};
    				})
    	    */
        })

    });


});
