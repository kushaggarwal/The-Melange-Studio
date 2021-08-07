function vh(v) {
  var h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return (v * h) / 100;
}

(function ($) {
  $(document).ready(function () {
    // hide .navbar first
    $(".navbar").hide();
    console.log("hide");

    // fade in .navbar
    $(function () {
      $(window).scroll(function () {
        // set distance user needs to scroll before we start fadeIn
        if ($(this).scrollTop() > vh(90)) {
          $(".navbar").show();
          console.log("show");
        } else {
          $(".navbar").hide();
        }
      });
    });
  });
})(jQuery);
