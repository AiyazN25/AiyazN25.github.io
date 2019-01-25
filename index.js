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

        var FCProjectCard = document.getElementById("fc-project-card");
        var FCLearnMoreBtn = document.getElementById("fc-lm-btn");
        var FCCloseBtn = document.getElementById("fc-close");
        var FCSourceCodeLink = document.getElementById("view-source-fc");
        var FCDeployedAppLink = document.getElementById("view-app-fc");
        FCLearnMoreBtn.addEventListener("click", function(){
            FCProjectCard.classList.add("flipped");
        })
        FCCloseBtn.addEventListener("click", function(){
            FCProjectCard.classList.remove("flipped");
        })
        FCSourceCodeLink.addEventListener("click", function(){
            window.location.href = "https://github.com/AiyazN25/fancy-cars";
        })
        FCDeployedAppLink.addEventListener("click", function(){
            window.location.href = "https://fancy-cars-aiyaz.herokuapp.com/";
        })

        var i3ProjectCard = document.getElementById("i3-project-card");
        var i3LearnMoreBtn = document.getElementById("i3-lm-btn");
        var i3CloseBtn = document.getElementById("i3-close");
        var i3DeployedAppLink = document.getElementById("view-app-i3");
        i3LearnMoreBtn.addEventListener("click", function(){
            i3ProjectCard.classList.add("flipped");
        })
        i3CloseBtn.addEventListener("click", function(){
            i3ProjectCard.classList.remove("flipped");
        })        
        i3DeployedAppLink.addEventListener("click", function(){
            window.location.href = "https://i3institute.netlify.com/index.html";
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