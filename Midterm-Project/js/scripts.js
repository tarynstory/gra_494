$(document).ready(function () {
  $(".lightbox-close").click(function () {
      var iframeSrc = $(".lightbox-target iframe").attr("src");
      $(".lightbox-target iframe").attr("src", "");
      $(".lightbox-target iframe").attr("src", iframeSrc);
  });
});

$('.menu-button').click(function () {

  $('nav').toggleClass('open');

});
