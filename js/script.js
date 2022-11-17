$(function(){
    "use strict"

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // MixitUP
    var mixer = mixitup('.portfolio_filter');


    // Progress bar js
    $('.html').LineProgressbar({
        percentage:90,
        radius: '3px',
        height: '20px',
        });

       

    // let main_grid = document.querySelector(".main_grid");
    // let youtube = document.querySelector(".youtube");
    // let vimeo = document.querySelector(".vimeo");

    // console.log(youtube.clientWidth);
    // console.log(vimeo.clientWidth);

    // vimeo.style.position = "absolute"
    // vimeo.style.left = youtube.clientWidth + "px" || "0px";

    let skill_item = document.querySelector(".item");
    console.log(skill_item);

    window.addEventListener("scroll", function(){
        let value = window.scrollY;
        console.log(value);
        if (value > 2888) {
            skill_item.classList.add("html")
        }else{
            skill_item.classList.remove("html")
        }
    })

})