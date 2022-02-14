
window.addEventListener("load", function () {
    const loader = document.querySelector(".sesi-cover");
    loader.className += " hidden"; // class "loader hidden"
    document.body.style.overflow = "hidden";
});

$(document).ready(() => {
    getUrl();
  });
  
  function getUrl(){
    var url = window.location.href;
    var str = url.split('%');
    var name = str.pop();
    $('#name').html(name);
  
  }




$(window).on("load",function(){
    
    // home section slideshow
    let slideindex = $(".slide.active").index();
    const slideLen =$(".slide").length;

    function slideshow(){
        $(".slide").removeClass("active").eq(slideindex).addClass("active")
        if(slideindex == slideLen-1){
            slideindex=0;
        }
        else{
            slideindex++;
        }
        setTimeout(slideshow,5000);
    }
    slideshow();

    // audio
    $(".fa-pause").click(function(){
        if($(this).hasClass("pause")){
            $("#myAudio")[0].play();
            console.log("play");
        }
        else{
            $("#myAudio")[0].pause();
            console.log("pause");
        }
        $(this).toggleClass("pause");
    })
    let btn = document.querySelector(".toogle");
    let icon = btn.querySelector(".fa-pause");

    btn.onclick = function (){
        if(icon.classList.contains("fa-pause")){
            icon.classList.replace("fa-pause", "fa-play");  
        }
        else{
            icon.classList.replace("fa-play", "fa-pause"); 
        }
    }

    //scrollIt
    $.scrollIt({
        topOffset: 0
    });


    //galeri popup
    const wHeight = $(window).height();
    $(".galeri-popup .gpimg").css("max-height",wHeight + "px");

    let itemIndex = 0;
    const totalGaleriItem = $(".galeri-item").length;
    
    $(".galeri-item").click(function(){
        itemIndex = $(this).index()
        $(".galeri-popup").addClass("open")
        $(".galeri-popup .gp-img").hide();
        gpSlideShow();
    })
    $(".gp-controls .next").click(function(){
        if(itemIndex == totalGaleriItem-1){
            itemIndex = 0;
        }
        else{
            itemIndex++;
        }
        $(".galeri-popup .gp-img").fadeOut(function(){
            gpSlideShow();
        })
    })
    $(".gp-controls .prev").click(function(){
        if(itemIndex == 0){
            itemIndex = totalGaleriItem-1;
        }
        else{
            itemIndex--;
        }
        $(".galeri-popup .gp-img").fadeOut(function(){
            gpSlideShow();
        })
    })

    function gpSlideShow(){
        const imgSrc = $(".galeri-item").eq(itemIndex).find("img").attr("data-large");
        $(".galeri-popup .gp-img").fadeIn().attr("src",imgSrc);
        $(".gp-counter").text((itemIndex+1) +"/"+ totalGaleriItem);
    }

    //close popup

    $(".gp-close").click(function(){
        $(".galeri-popup").removeClass("open");
    })
})

$(window).scroll(function(){    
   if($(this).scrollTop() > 800){
       $(".header").addClass("fixed")
   }
   else{
       $(".header").removeClass("fixed");
   }
})

$(".sesi-cover .container1 .cover1 h2").click(function(){
    document.body.style.overflow = "visible";
    $("#myAudio")[0].play();
})




