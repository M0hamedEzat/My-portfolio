/* $(document).ready(function () {
  $(".container").click(function () {
    $(this).addClass("bounce");
    setTimeout(function () {
      $(".container").removeClass("bounce");
    }, 2000);
  });
});
$(document).ready(function () {
  $("#header").bind("selectstart", function () {
    return false;
  });

  $("header").bind("mousedown", function () {
    return false;
  });
});
$(document).ready(function () {
  $("#header").on("animationend", function () {
    $(this).toggleClass("reverse");
  });
});
 */

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
