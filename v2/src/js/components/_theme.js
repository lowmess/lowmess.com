// makeLinkUnderline() function
// Creates themed underline
// Uses box-shadow method to create a thicker underline than standard in combination with border-bottom
// **NOT** directly chainable, must be used inside of a .css call. Working on rectifying this.
// @color: the color of the underline
var makeLinkUnderline = function(color) {
  return {"border-bottom": "0.15em solid "+color, "box-shadow": "0 -0.15em 0 "+color+" inset"};
};

$(function() {
  // Initialize variables
  var themeColor    = $('meta[name="theme-color"]').attr("content"),
      // Booleans for evaluating themeColor
      isBright,
      isWhite,
      isOrange,
      isBlack,
      // Threshold for isBright
      brightMeter   = 0.5,
      // Common colors used throughout the site & themed hover varieties
      cubone       = "#f5f5f5",
      cuboneHover  = $.Color(themeColor).transition(cubone, 0.5),
      haunter       = "#191919",
      haunterHover  = $.Color(themeColor).transition(haunter, 0.3),
      dragonite      = "#f39c12",
      dragoniteHover = $.Color(themeColor).transition(dragonite, 0.5),
      // Selector groups for DRYness
      themeSelect   = ".dropdown, header, footer",
      themeLinks    = ".back-to-top, .dropdown a, footer a, .dropdown__close",
      headerSelect  = ".project__header, .page__header, .landing__header",
      bodyLinks     = ".landing__main-content a, .page__main-content a, .project__main-content a";

  // Evaluate theme color
  // Adjust boolean values based on themeColor
  isBright = ($.Color(themeColor).lightness() >= brightMeter ) ? true : false;
  isWhite = ( themeColor == cubone || themeColor == "#ffffff" ) ? true : false;
  isOrange = ( themeColor == dragonite ) ? true : false;
  isBlack = ( themeColor == haunter || themeColor == "#000000" ) ? true : false;

  // Basic theming
  // Body and large blocks are given base coat o' themeColor
  // Links in the body of an article are colored
  $(themeSelect + ", body").css("background-color", themeColor);
  $(".is-themed").css("color", themeColor);
  // Black theme fix
  // Really basic, if the theme is black don't highlight links black, else theme normally
  isBlack ? (
    $(bodyLinks)
      .css(makeLinkUnderline(dragonite))
      .hover(
        function() { $(this).css("background-color", dragonite); },
        function() { $(this).css("background-color", "transparent");
      })
  ) : (
    $(bodyLinks)
      .css(makeLinkUnderline(themeColor))
      .hover(
        function() { $(this).css("background-color", themeColor); },
        function() { $(this).css("background-color", "transparent");
      })
  );

  // Header theming
  // Assign classes to header for CSS theming and adjust link color in dropdown & footer
  if ( isWhite ) {
    $(headerSelect).addClass("header--is-white");
    $(themeSelect + "," + themeLinks).css({"color": haunter, "fill": haunter});
    $(themeLinks).hover(
      function() { $(this).css({"color": dragonite, "fill": dragonite}); },
      function() { $(this).css({"color": haunter, "fill": haunter});
    });
  } else if ( isBright && !isOrange ) {
    $(headerSelect).addClass("header--is-bright");
    $(themeSelect + "," + themeLinks).css({"color": haunter, "fill": haunter});
    $(themeLinks).hover(
      function() { $(this).css({"color": haunterHover, "fill": haunterHover}); },
      function() { $(this).css({"color": haunter, "fill": haunter});
    });
  } else if ( !isBright || isOrange ) {
    $(headerSelect).addClass("header--is-dark");
    $(themeSelect + "," + themeLinks).css({"color": cubone, "fill": cubone});
    $(themeLinks).hover(
      function() { $(this).css({"color": cuboneHover, "fill": cuboneHover}); },
      function() { $(this).css({"color": cubone, "fill": cubone});
    });
  }

  // *********
  // PREVIEWS
  // *********
  // Uses many of the same techniques as main theming
  $(".preview").each(function() {
    // Initialize variables
    // preID takes the last class on each preview and uses it to identify specific previews
    var preID            = '.' + $(this).attr("class").split(" ").pop().toString(),
        preColor         = $(preID + ' pre[name="preview-color"]').attr("content"),
        // New hover colors specific to each preview
        previewCuboneHover  = $.Color(preColor).transition(cubone, 0.5),
        previewHaunterHover  = $.Color(preColor).transition(haunter, 0.3),
        previewDragoniteHover = $.Color(preColor).transition(dragonite, 0.5),
        // Booleans for evaluating preColor
        preIsBright,
        preIsWhite,
        preIsOrange;

    // Set the background to preColor
    $(preID).css("background-color", preColor);

    // Evaluate preColor
    // Adjust booleans based on preColor
    preIsBright = ( $.Color(preColor).lightness() >= brightMeter ) ? true : false;
    preIsWhite = ( preColor == cubone || preColor == "#ffffff" ) ? true : false;
    preIsOrange = ( preColor == dragonite ) ? true : false;

    // Preview theming
    // Assign classes and add hover effects to previews
    if ( preIsWhite ) {
      $(preID)
        .addClass("pre--is-white")
        .hover(
          function() { $(this).css("color", previewDragoniteHover); },
          function() { $(this).css("color", dragonite);
        });
    } else if ( preIsBright && !preIsOrange ) {
      $(preID)
        .addClass("pre--is-bright")
        .hover(
          function() { $(this).css("color", previewHaunterHover); },
          function() { $(this).css("color", haunter);
        });
    } else if ( !preIsBright || preIsOrange ) {
      $(preID)
        .addClass("pre--is-dark")
        .hover(
          function() { $(this).css("color", previewCuboneHover); },
          function() { $(this).css("color", cubone);
        });
    }
  });

});