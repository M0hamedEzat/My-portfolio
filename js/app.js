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
const sections = document.querySelectorAll("section");

window.onscroll = function () {
  sections.forEach(function (active) {
    // loops for all the sections
    if (
      active.getBoundingClientRect().top >= -500 &&
      active.getBoundingClientRect().top <= 450
    ) {
      //Add class
      active.classList.add("your-active-class"); // active the class, when the if statment is true
    } else {
      // Remove class
      active.classList.remove("your-active-class"); // remove active class, when one of the if statment is false
    }
  });
};