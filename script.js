(function ($) {
  $(document).ready(function () {
    $("#scroll-left").click(function () {
      $(".scrolling-wrapper").scrollLeft(
        $(".scrolling-wrapper").scrollLeft() - 450
      );
    });
    $("#scroll-right").click(function () {
      $(".scrolling-wrapper").scrollLeft(
        $(".scrolling-wrapper").scrollLeft() + 450
      );
    });
  });
})(jQuery);
