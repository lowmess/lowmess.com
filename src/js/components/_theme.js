$(function() {
  var themeColor    = $('meta[name="theme-color"]').attr("content"),
      isBright      = false,
      isWhite       = false,
      isOrange      = false,
      brightMeter   = 0.5,
      myWhite       = "#f5f5f5",
      myWhiteHover  = $.Color(themeColor).transition(myWhite, 0.5),
      myBlack       = "#191919",
      myBlackHover  = $.Color(themeColor).transition(myBlack, 0.3),
      myOrange      = "#f39c12",
      myOrangeHover = $.Color(themeColor).transition(myOrange, 0.5),
      themeSelect   = ".dropdown, header, footer",
      themeText     = ".themed-text, .dropdown, header, footer",
      themeLinks    = ".back-to-top, .dropdown a, header a, footer a",
      //bodyText      = ".landing, .page, .project, .404",
      bodyLinks     = ".landing a, .page a, .project a, .four04 a, .four03 a";

  $(themeSelect + ", body").css("background-color", themeColor);
  // $(bodyLinks + "," + themeText).css("color", themeColor);
  $(themeText).css("color", themeColor);
  $(bodyLinks)
    .css("border-color", themeColor)
    .hover(
      function() { $(this).css("background-color", themeColor); },
      function() { $(this).css("background-color", "transparent");
    });

  if ( themeColor == myWhite || themeColor == "#ffffff" ) { isWhite = true; }
  if ( themeColor == myOrange ) { isOrange = true; }
  if ( $.Color(themeColor).lightness() >= brightMeter ) { isBright = true; }

  if (isWhite) {
    $(themeSelect + "," + themeLinks).css("color", myOrange);
    $("header a").css("border-color", myOrange);
    $(themeLinks).hover(
      function() { $(this).css({"color": myOrangeHover, "fill": myOrangeHover, "border-color": myOrangeHover}); },
      function() { $(this).css({"color": myOrange, "fill": myOrange, "border-color": myOrange});
    });
    $(".dropdown__logo, .footer__icon").css("fill", myOrange);
  } else if ( isBright && !isOrange ) {
    $(themeSelect + "," + themeLinks).css("color", myBlack);
    $("header a").css("border-color", myBlack);
    $(themeLinks).hover(
      function() { $(this).css({"color": myBlackHover, "fill": myBlackHover, "border-color": myBlackHover}); },
      function() { $(this).css({"color": myBlack, "fill": myBlack, "border-color": myBlack});
    });
    $(".dropdown__logo, .footer__icon").css("fill", myBlack);
  } else if ( !isBright || isOrange ) {
    $(themeSelect + "," + themeLinks).css("color", myWhite);
    $("header a").css("border-color", myWhite);
    $(themeLinks).hover(
      function() { $(this).css({"color": myWhiteHover, "fill": myWhiteHover, "border-color": myWhiteHover}); },
      function() { $(this).css({"color": myWhite, "fill": myWhite, "border-color": myWhite});
    });
    $(".dropdown__logo, .footer__icon").css("fill", myWhite);
  }

  $(".preview").each(function() {

    var preID            = '.' + $(this).attr("class").split(" ").pop().toString(),
        preColor         = $(preID + ' pre[name="preview-color"]').attr("content"),
        preLinks         = preID + " a",
        myPreWhiteHover  = $.Color(preColor).transition(myWhite, 0.5),
        myPreBlackHover  = $.Color(preColor).transition(myBlack, 0.3),
        myPreOrangeHover = $.Color(preColor).transition(myOrange, 0.5),
        preIsBright,
        preIsWhite,
        preIsOrange;

    $(preID).css("background-color", preColor);

    if ( preColor == myWhite || preColor == "#ffffff" ) { preIsWhite = true; }
    if ( preColor == myOrange ) { preIsOrange = true; }
    if ( $.Color(preColor).lightness() >= brightMeter ) { preIsBright = true; }

    if ( preIsWhite) {
      $(preID).css("color", myOrange);
      $(preLinks).css("color", myOrange);
      $(preID).hover(
        function() { $(this).css("color", myPreOrangeHover); },
        function() { $(this).css("color", myOrange);
      });
    } else if ( preIsBright && !preIsOrange ) {
      $(preID).css("color", myBlack);
      $(preLinks).css("color", myBlack);
      $(preID).hover(
        function() { $(this).css("color", myPreBlackHover); },
        function() { $(this).css("color", myBlack);
      });
    } else if ( !preIsBright || preIsOrange ) {
      $(preID).css("color", myWhite);
      $(preLinks).css("color", myWhite);
      $(preID).hover(
        function() { $(this).css("color", myPreWhiteHover); },
        function() { $(this).css("color", myWhite);
      });
    }
  });

});