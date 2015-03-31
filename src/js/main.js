//@prepros-prepend components/_theme.js
//@prepros-prepend components/_navbar.js

$(function() {
  // Add icons to certain links
  // Add external link icon to any link that opens in a new window
  $('[target="_blank"]').each(function() {
    $(this)
      .append("&nbsp;<i class='fa fa-fw fa-external-link'></i>")
      .after("&nbsp;");
  });
  // Add download icon to any link that points to a download
  $("[download]").each(function() {
    $(this)
      .append("&nbsp;<i class='fa fa-fw fa-download'></i>");
  });

  // Animate scroll to top link
  $(".back-to-top")
    .click(function(e) {
      //e.preventDefault; - not necessary
      $("body, html").animate({ scrollTop: "0" });
    });
});