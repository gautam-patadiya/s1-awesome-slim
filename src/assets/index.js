// Remove the following lines, if you do not need any of Bootstrap's JavaScript features
import Popper from "popper.js";
window.jQuery = $;
window.$ = $;

require("bootstrap");
require("jquery-mousewheel/jquery.mousewheel.js");
require('malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min');

// Remove this demo code, that's only here to show how the .env file works!
if (process.env["HELLO"]) {
    console.log(`Hello ${process.env.HELLO}!`);
}

(function ($) {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover()

    $(".sidebar-menu").mCustomScrollbar({
        axis: "y", // horizontal scrollbar
        // autoHideScrollbar:true,
        theme: "light",
        documentTouchScroll: true,
        scrollInertia: 0,
        keyboard:{ enable: true },
        scrollButtons:{ scrollAmount: 10 },
        scrollbarPosition: "inside",
        mouseWheel: {enable: true},
    });

    $('.sidebar-menu').css('height', $(window).height());

    $("#close-sidebar").click(function () {
        $(".s-theme").removeClass("toggled").addClass("mini");
    });

    $("#show-sidebar").click(function () {
        $(".s-theme").addClass("toggled").removeClass("mini");
    });

    $("#close-sidebar-sm").click(function () {
        $(".s-theme").removeClass("toggled").addClass("mini");
    });

    handleScreenResize();
})(jQuery);

// First level Submenu
$(document).on('click', ".s-theme:not(.mini).toggled li.sidebar-dropdown.has-submenu > a", function () {
    const $parent = $(this).parent();
    const $subMenuSelector = $parent.find('.submenu:first');

    if ($subMenuSelector.hasClass('open')) {
        $subMenuSelector.slideUp(200).removeClass('open');
    } else {
        $subMenuSelector.slideDown(200).addClass('open');
    }

    if ($parent.hasClass("active")) {
        $parent.removeClass("active");
    } else {
        $parent.addClass("active")
    }
});

// Nested level Submenu

$(document).on('click', ".s-theme:not(.mini).toggled li.nested-dropdown > a", function () {
    const $parent = $(this).parent();
    const $subMenuSelector = $parent.find('.nested-menu:first');

    if ($subMenuSelector.hasClass('open')) {
        $subMenuSelector.slideUp(200).removeClass('open');
    } else {
        $subMenuSelector.slideDown(200).addClass('open');
    }

    if ($parent.hasClass("active")) {
        $parent.removeClass("active");
    } else {
        $parent.addClass("active")
    }
});

$(window).bind("resize", function () {
    handleScreenResize()
});

$(".bg_overlay").click(function () {
    $(".s-theme").removeClass("toggled");
});

function handleScreenResize() {
    $('.sidebar-menu').css('height', $(window).height());
    var $sTheme = $('.s-theme');
    var width = window.innerWidth;
    $sTheme.removeClass('mbt');

    if (width < 768) {
        $sTheme.addClass('mbt');
    } else if(width >= 768) {
        $sTheme.removeClass('mbt')

        if(!$sTheme.hasClass('toggled') && !$sTheme.hasClass('mini')) {
            $sTheme.addClass('mini')
        }
    }
}
