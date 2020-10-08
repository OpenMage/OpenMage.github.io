$.noConflict();

function getContributorsList() {
    jQuery.get("https://api.github.com/repos/OpenMage/magento-lts/contributors", function(data, statusTxt, xhr){
        if(statusTxt == "success") {
            let contributorsList = '';

            for (x = 0; x < data.length; x++) {
                if (data[x].avatar_url && data[x].login != 'LeeSaferite' && data[x].login != 'drobinson' && data[x].login != 'Flyingmana' ) {
                    contributorsList += "<a class='contributor__thumbnail-wrapper' href='" + data[x].html_url + "' target='_blank'><img class='contributor__thumbnail' src='" + data[x].avatar_url + "'/></div>";
                }
            }

            jQuery('#js-contributor__thumbnails').append(contributorsList);
        }

        if(statusTxt == "error") {
            console.log("Error: " + xhr.status + ": " + xhr.statusText);
        }
    });
}

function getProjectStats() {
    jQuery.get("https://api.github.com/repos/openmage/magento-lts", function(data, statusTxt, xhr){
        if(statusTxt == "success") {
            // Get values
            const forksCount = data.forks_count;
            const watchers = data.watchers;

            // Set values on page
            jQuery('#js-active-info__stats-value--forks').html(forksCount);
            jQuery('#js-active-info__stats-value--stars').html(watchers);
        }

        if(statusTxt == "error") {
            console.log("Error: " + xhr.status + ": " + xhr.statusText);
        }
    });
}

function getReleasesInfo() {
    jQuery.get("https://api.github.com/repos/OpenMage/magento-lts/releases", function(data, statusTxt, xhr){
        if(statusTxt == "success") {
            // Do something
            console.log(data);

            for (x = 0; x < data.length; x++) {
                let name = data[x].name;
                let branch = name.substring(0, 3);
                let version = name.substring(1);
                let date = (data[x].published_at).substring(0, 10);
                let link = data[x].html_url;

                let description = data[x].body;
                // let descAfterSomething = description.replace(/#/gi, '<br>');

                let switcher =  "<div class='changelog-switcher' data-item='"+ version +"'>" +
                                    "<div class='changelog-switcher__wrapper'>" +
                                        "<div class='changelog-switcher__version'>"+ version +"</div>" +
                                        "<div class='changelog-switcher__date'>"+ date +"</div>" +
                                    "</div>" +
                                "</div>";

                let tab =       "<div class='changelog-item' data-item='"+ version +"'>" +
                                    "<div class='changelog-item__intro'>" +
                                        "<div class='changelog-item__intro-label'>" +
                                            "<div class='changelog-item__intro-label-text'>"+ version +"</div>" +
                                        "</div>" +
                                        "<div class='changelog-item__intro-text'>Release date "+ date +"</div>" +
                                    "</div>" +
                                    "<div class='changelog-item__wrapper'>" +
                                        "<div class='changelog-item__content-box'>" +
                                            "<p>"+ description +"</p>" +
                                        "</div>" +
                                        "<div class='changelog-item__button'>" +
                                            "<a href='"+ link +"' class='btn btn-primary' target='_blank'>View on GitHub <img class='changelog-item__button-icon' src='/assets/svg/github-light.svg' alt='GitHub' /></a>" +
                                        "</div>" +
                                    "</div>" +
                                "</div>";

                if (branch == 'v19') {
                    jQuery('.changelog-version__wrapper--branch-19 .changelog-items__switchers-list').append(switcher);
                    jQuery('.changelog-version__wrapper--branch-19 .changelog-items__items-list').append(tab);
                } else if (branch == 'v20') {
                    jQuery('.changelog-version__wrapper--branch-20 .changelog-items__switchers-list').append(switcher);
                    jQuery('.changelog-version__wrapper--branch-20 .changelog-items__items-list').append(tab);
                }
            }

            // Set active elements for each branch
            jQuery('.changelog-version__wrapper .changelog-items__switchers-list .changelog-switcher:first-of-type').addClass('active');
            jQuery('.changelog-version__wrapper .changelog-items__items-list .changelog-item:first-of-type').addClass('active');
        }

        if(statusTxt == "error") {
            console.log("Error: " + xhr.status + ": " + xhr.statusText);
        }
    });
}

// Detect a mobile device
if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    jQuery('.lang-switch').addClass('mobile');

    jQuery('#js-lang-switch__link--first').on('click', function() {
        jQuery('.lang-switch__wrapper').toggleClass('active');
    });
} else {
    jQuery('.lang-switch').addClass('desktop');
}

// Homepage scripts
if (jQuery('#js-homepage').length) {
    jQuery(document).ready(function( $ ) {
        setTimeout(function(){
            $('.js-hero-image-animation').addClass('animate');
        }, 500);

        getProjectStats();
    });

    jQuery(window).on('load', function( $ ){
        getContributorsList();
    });
}

// Partners page scripts
if (jQuery('#js-partners-page').length) {
    jQuery('.navbar-nav .nav-link[href$="partners/index.html"]').addClass('active');
}

// About Project page scripts
if (jQuery('#js-about-page').length) {
    jQuery('.owl-carousel').owlCarousel({
        dots: false,
        margin: 20,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1310: {
                items: 4
            }
        }
    });

    jQuery(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        jQuery(this).ekkoLightbox();
    });
}

// Blog page scripts
if (jQuery('#js-blog-page').length) {
    if (jQuery('.blog--last .blog__item').length > 6) {
        jQuery('#js-blog__show-more-link').parent().removeClass('blog__show-more--hide');
    }

    jQuery('#js-blog__show-more-link').on('click', function() {
        // Show all posts
        jQuery('.blog--last .blog__item--hide').each(function() {
            jQuery(this).removeClass('blog__item--hide');
        });

        // Hide link
        jQuery(this).hide();
    });
}

// Changelog page
if (jQuery('#js-changelog-page').length) {
    getReleasesInfo();

    // Click on tab on mobile view
    jQuery('.changelog-items__items-list').on('click', '.changelog-item__intro', function() {
        if (jQuery(window).width() < 992 && !(jQuery(this).parent().hasClass('active'))) {
            let choosedItemId = jQuery(this).parent().attr('data-item');

            // Activate appropriate switcher
            jQuery(this).parents('.changelog-version__box').find('.changelog-switcher.active').removeClass('active');
            jQuery(this).parents('.changelog-version__box').find('.changelog-switcher[data-item="'+ choosedItemId +'"]').addClass('active');

            // Activate appropriate tab
            jQuery(this).parents('.changelog-items__items-list').find('.changelog-item.active').removeClass('active');
            jQuery(this).parent().addClass('active');
        }
    });

    // Click on switcher on desktop view
    jQuery('.changelog-items__switchers-list').on('click', '.changelog-switcher', function() {
        if (!(jQuery(this).hasClass('active'))) {
            let choosedItemId = jQuery(this).attr('data-item');
            let switchersListHeight = jQuery(this).parent().outerHeight();
            let tabMinHeight = switchersListHeight + 50;

            // Activate appropriate switcher
            jQuery(this).parent().find('.changelog-switcher.active').removeClass('active');
            jQuery(this).addClass('active');

            // Activate appropriate tab
            jQuery(this).parents('.changelog-version__box').find('.changelog-item.active').removeClass('active');
            jQuery(this).parents('.changelog-version__box').find('.changelog-item[data-item="'+ choosedItemId +'"]').addClass('active');

            // Set appropriate height for selected tab
            if (jQuery(this).parents('.changelog-version__box').find('.changelog-item.active').outerHeight() < tabMinHeight) {
                jQuery(this).parents('.changelog-version__box').find('.changelog-item .changelog-item__content-box').removeAttr('style');
                jQuery(this).parents('.changelog-version__box').find('.changelog-item.active .changelog-item__content-box').css('min-height', switchersListHeight - 70);
            }
        }
    });
}