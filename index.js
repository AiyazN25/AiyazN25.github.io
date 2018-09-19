(function(){

    "use strict";
    window.onload = function(){
        var resumeBtn = document.getElementById("resume-btn");
        resumeBtn.addEventListener("click", function(){
            window.location.href = "./Resume - Aiyaz Noor.pdf";
        })

        var MLBProjectCard = document.getElementById("mlb-project-card");
        var MLBLearnMoreBtn = document.getElementById("mlb-lm-btn");
        var MLBCloseBtn = document.getElementById("mlb-close");
        var MLBSourceCodeLink = document.getElementById("view-source-mlb");
        var MLBDeployedAppLink = document.getElementById("view-app-mlb");
        MLBLearnMoreBtn.addEventListener("click", function(){
            MLBProjectCard.classList.add("flipped");
        })
        MLBCloseBtn.addEventListener("click", function(){
            MLBProjectCard.classList.remove("flipped");
        })
        MLBSourceCodeLink.addEventListener("click", function(){
            window.location.href = "https://github.com/AiyazN25/MLB-scoreboard-app";
        })
        MLBDeployedAppLink.addEventListener("click", function(){
            window.location.href = "https://calm-reef-60580.herokuapp.com/";
        })

        var WBProjectCard = document.getElementById("wb-project-card");
        var WBLearnMoreBtn = document.getElementById("wb-lm-btn");
        var WBCloseBtn = document.getElementById("wb-close");
        var WBSourceCodeLink = document.getElementById("view-source-wb");
        var WBDeployedAppLink = document.getElementById("view-app-wb");
        WBLearnMoreBtn.addEventListener("click", function(){
            WBProjectCard.classList.add("flipped");
        })
        WBCloseBtn.addEventListener("click", function(){
            WBProjectCard.classList.remove("flipped");
        })
        WBSourceCodeLink.addEventListener("click", function(){
            window.location.href = "https://github.com/AiyazN25/WBPage";
        })
        WBDeployedAppLink.addEventListener("click", function(){
            window.location.href = "https://wb-users-page.herokuapp.com/";
        })

        $(".nav-link").click(function(){
            document.getElementById("navbar").classList.remove("responsive");
            // Underline clicked navlink
            $(this).parent().find('.nav-link').removeClass('underlined');
            $(this).addClass('underlined');
            // Scroll to correct location on page
            let pageId = $(this).attr("data-page");
            $("html, body").animate({ scrollTop: $("#"+pageId).offset().top - 63 }, 1000);
        });

        $("#come-in-btn").click(function(){
            $("html, body").animate({ scrollTop: $("#about").offset().top - 63 }, 1000);
        });

        document.getElementById("bars-icon").addEventListener("click", function(){
            // console.log("clicked");
            // console.log(document.getElementById("navbar").className);
            // if(document.getElementById("navbar").className === null){
            //     document.getElementById("navbar").classList.add("responsive");
            // }
            // else{
            //     document.getElementById("navbar").classList.remove("responsive");
            // }
            document.getElementById("navbar").classList.toggle("responsive");
        })

    }

    window.onscroll = function() {
        stickNavBar();
        highlightNavLink();
    }

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function stickNavBar() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }

    function highlightNavLink() {
        $('.section').each(function() {
            if($(window).scrollTop() >= $(this).offset().top - 64) {
                var id = $(this).attr('id');
                $('.nav-link').removeClass('underlined');
                $('.nav-link[data-page='+ id +']').addClass('underlined');
            }
        });
    }


}());