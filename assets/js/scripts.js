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