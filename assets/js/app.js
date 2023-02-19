var PIXELSIGNS = PIXELSIGNS || {};

(function($) {

    /*!----------------------------------------------
    	# This beautiful code written with heart
    	# by Mominul Islam <hello@mominul.me>
    	# In Dhaka, BD at the PixelSigns Theme workstation.
    	---------------------------------------------*/

    // USE STRICT
    "use strict";

    PIXELSIGNS.initialize = {

        init: function() {
            PIXELSIGNS.initialize.general();
            PIXELSIGNS.initialize.tab();
            PIXELSIGNS.initialize.sectionBackground();
            PIXELSIGNS.initialize.sectionSwitch();
            PIXELSIGNS.initialize.portfolio();
            PIXELSIGNS.initialize.countUp();
            PIXELSIGNS.initialize.swiperSlider();
            PIXELSIGNS.initialize.googleMap();
            PIXELSIGNS.initialize.contactFrom();
        },

        /*========================================================*/
        /*=           Collection of snippet and tweaks           =*/
        /*========================================================*/

        general: function() {


            if ($('.tabs-box').length) {
                $('.tabs-box .pricing-tab  .tab-btn').on('click', function(e) {
                    e.preventDefault();
                    var target = $($(this).attr('data-tab'));

                    if ($(target).is(':visible')) {
                        return false;
                    } else {
                        //target.parents('.tabs-box').find('.pricing-tab ').find('.tab-btn').removeClass('active-btn');
                        //$(this).addClass('active-btn');
                        //target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                        //target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
                        //$(target).fadeIn(300);
                        //$(target).addClass('active-tab animated fadeIn');
                    }
                });
            }

            // Show first content by default
            $('#pix-tabs-nav li:nth-child(1)').addClass('active');
            $('#pix-tabs-content .content').hide();
            $('#pix-tabs-content .content:nth-child(1)').show();

            // click function
            $('#pix-tabs-nav li').on('click', function() {
                $('#pix-tabs-nav li').removeClass('active');
                $(this).addClass('active');
                $('#pix-tabs-content .content').hide();

                var activeTab = $(this).find('a').attr('href');
                $(activeTab).fadeIn(400);
                return false;
            });

         

        },

        /*====================================*/
        /*=           Swiper Slider          =*/
        /*====================================*/

        swiperSlider: function() {
            

        },

        /*==============================*/
        /*=           Portfolio          =*/
        /*==============================*/

        portfolio: function() {

            
        },

        /*==================================*/
        /*=           Mobile Menu          =*/
        /*==================================*/

        mobileMenu: function() {

           
        },

        /*==========================================*/
        /*=           Section Background           =*/
        /*==========================================*/

        sectionBackground: function() {

            
        },


        /*===================================*/
        /*=           Progressbar           =*/
        /*===================================*/
        progressBar: function() {
            
        },

        /*=====================================*/
        /*=           Section Switch          =*/
        /*=====================================*/

        sectionSwitch: function() {
            
        },

        /*==============================*/
        /*=           Tabs          =*/
        /*==============================*/
        tab: function() {
            
           

        },

        /*==============================*/
        /*=           Countup          =*/
        /*==============================*/

        countUp: function() {
            
        },

        /*=================================*/
        /*=           Google Map          =*/
        /*=================================*/

        googleMap: function() {
        },

        /*=================================*/
        /*=           Contact Form          =*/
        /*=================================*/

        contactFrom: function() {
        }

    };

    PIXELSIGNS.documentOnReady = {
        init: function() {
            PIXELSIGNS.initialize.init();

        },
    };


    // Initialize Functions
    $(document).ready(PIXELSIGNS.documentOnReady.init);
    

})(jQuery);