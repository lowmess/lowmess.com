$(function () {

  var scrollPos  = $(window).scrollTop(),
      blockLinks = false,

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
      };

  $(window).scroll( function(e) {
    scrollPos = $(this).scrollTop();
    if (scrollPos > 5) {
      $("#dropdown").removeClass("dropdown--trans");
    } else {
      $("#dropdown").addClass("dropdown--trans");
    }
  });

  $(".dropdown__logo, .dropdown__close, .block-links").click(function () { //toggle classes on click
    blockLinks = !blockLinks;
    shift();
    if (blockLinks) {
      $("body").append("<div class='block-links'></div>");
      $(".block-links").addClass("block-links--fade");
    } else if (blockLinks == false) {
      $(".block-links").removeClass("block-links--fade");
      setTimeout(function() { $(".block-links").remove(); }, 201);
    }
  }); //end click

  //if user clicks outside of dropdown, close menu
  $("html, .block-links").click(function() {
    if ($("#dropdown").hasClass("dropdown--open")) {
      blockLinks = !blockLinks;
      shift();
      $(".block-links").removeClass("block-links--fade");
      setTimeout(function() { $(".block-links").remove(); }, 201);
    }
  });//end click ("html")

  $("#dropdown").click(function(e) {
    e.stopPropagation();
  });

});