$(function () {
  "use strict";
  // Back to top scrolling  line progress
  const process_line = document.querySelector(".process_line");
  window.addEventListener("scroll", function () {
    let height = document.documentElement;
    let scroll_top = height.scrollTop;
    let scroll_height = height.scrollHeight;
    let percent = (scroll_top / (scroll_height - height.clientHeight)) * 100;
    let percentRound = Math.round(percent);
    // console.log(percentRound);
    process_line.style.height = `${percentRound}%`;
  });

  // Custom Cursor
  let cursor_round = document.querySelector(".cursor_round");
  let cursor_point = document.querySelector(".cursor_point");
  let portfolio_item = document.querySelectorAll(".portfolio_item");

  window.addEventListener("mousemove", (e) => {
    cursor_round.setAttribute(
      "style",
      `left:${e.pageX - 15}px; top:${e.pageY - 15}px`
    );
    cursor_point.setAttribute("style", `left:${e.pageX}px; top:${e.pageY}px`);
    
  });

  function handleMouseEnter() {
    cursor_round.classList.add("big_mouse");
    cursor_point.classList.add("big_mouse");
  }
  function handleMouseLeave() {
    cursor_round.classList.remove("big_mouse");
    cursor_point.classList.remove("big_mouse");
  }
  portfolio_item.forEach((item) => {
    item.addEventListener("mouseenter", handleMouseEnter);
    item.addEventListener("mouseleave", handleMouseLeave);
  })


  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  // MixitUP
  var mixer = mixitup(".portfolio_filter");

  // Progress bar js
  $(".html").LineProgressbar({
    percentage: 90,
    radius: "3px",
    height: "20px",
  });




  jQuery(document).ready(function () {
    "use strict";
    dizme_tm_cursor();
  });
  
  function dizme_tm_cursor() {
    "use strict";
    var myCursor = jQuery(".mouse-cursor");
    if (myCursor.length) {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
          }),
          $("body").on("mouseleave", "a, .cursor-pointer", function () {
            ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
              (e.classList.remove("cursor-hover"),
              t.classList.remove("cursor-hover"));
          }),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
  }

})


