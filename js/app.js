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
var sections = document.querySelectorAll("section");
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

window.onscroll = function () {
  sections.forEach(function (active) {
    if (
      active.getBoundingClientRect().top >= -500 &&
      active.getBoundingClientRect().top <= 450
    ) {
      active.classList.add("your-active-class");
    } else {
      active.classList.remove("your-active-class");
    }
  });

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
};

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
$(document).ready(function () {
  $("#sub-btn").click(function () {
    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();
    const inputs = [name, email, message];

    if (inputs.some((input) => input === "")) {
      const empty = alert("Please fill all the fields");
      return empty;
    } else {
      // All inputs are filled, continue with the function
      const success = alert("Your message has been received. Thank you!");
      return success;
    }
  })
});
