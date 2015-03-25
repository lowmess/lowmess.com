$(function () {
  // Initialize variables
  var scrollPos = $(window).scrollTop(),
      blockLinks,
      // shift() function
      // Toggles classes to accomplish the following:
      // * Open and close .dropdown
      // * Prevent scrolling while .dropdown is open
      // * Toggle .dropdown transparency if window is scrolled to the top
      shift = function() {
        $("#dropdown").toggleClass("dropdown--closed dropdown--open");
        $(".container").toggleClass("container--closed container--open");
        $("#dropdown__logo__caret").toggleClass("dropdown__logo__caret--rotated");
        $("html, body").toggleClass("noscroll");
        if ($("#dropdown").hasClass("dropdown--open")) {
          $("body").bind("touchmove", function(e){ e.preventDefault() });
          $("body").bind('mousewheel DOMMouseScroll',function(e){  e.preventDefault() });
        } else {
          $("body").unbind("touchmove");
          $("body").unbind('mousewheel DOMMouseScroll');
        }
        if (scrollPos < 5) {
          $("#dropdown").toggleClass("dropdown--trans");
        }
      }; // End shift() function
      // End variables

  // Detect window scroll
  $(window).scroll( function(e) {
    // Update scrollPos to most current value
    scrollPos = $(this).scrollTop();
    // Toggle .dropdown transparency if window is scrolled more than 5px
    if (scrollPos < 5) {
      $("#dropdown").addClass("dropdown--trans");
    } else {
      $("#dropdown").removeClass("dropdown--trans");
    }
  }); // End scroll

  // Detect clicks used to open or close .dropdown
  $(".dropdown__logo, .dropdown__close, .block-links").click(function () {
    // Toggle blockLinks
    blockLinks = !blockLinks;
    // Open/close .dropdown
    shift();
    // Dynamically create & destroy .block-links DOM element
    if (blockLinks) {
      $("body").append("<div class='block-links'></div>");
      $(".block-links").addClass("block-links--fade");
    } else if (blockLinks == false) {
      $(".block-links").removeClass("block-links--fade");
      setTimeout(function() { $(".block-links").remove(); }, 201);
    }
  }); // End click

  // Enable user to close .dropdown by clicking outside of the elemnt while it is open
  // Detect clicks on body
  $("html, .block-links").click(function() {
    // Close .dropdown if a  click is registered outside .dropdown while it's open
    if ($("#dropdown").hasClass("dropdown--open")) {
      // Toggle blockLinks
      blockLinks = !blockLinks;
      // Close .dropdown and toggle everything back to default state
      shift();
      // Destroy .block-links DOM element
      $(".block-links").removeClass("block-links--fade");
      setTimeout(function() { $(".block-links").remove(); }, 201);
    }
  }); // End click ("html")
  // Make clicks inside of .dropdown not bubble up the DOM tree (which would then close the menu and do everything above)
  $("#dropdown").click(function(e) {
    e.stopPropagation();
  });

});