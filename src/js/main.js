//@prepros-prepend components/_theme.js
//@prepros-prepend components/_navbar.js

$(function() {
  $('[target="_blank"]').each(function() {
    $(this)
      .append("&nbsp;<i class='fa fa-fw fa-external-link themed-text'></i>")
      .after("&nbsp;");
  });
  $("[download]").each(function() {
    $(this)
      .append("&nbsp;<i class='fa fa-fw fa-download themed-text'></i>");
  });
  $(".back-to-top")
    .click(function() {
      $("body, html").animate({ scrollTop: "0" });
    });
});