// window.onresize = function() {
//     var zoom = window.devicePixelRatio;
//     document.body.style.zoom = (100 / zoom) + "%";
// }
$('.up a,.down a,button a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 800, 'swing');
});

// $(document).ready(function() {
//     $("#More,#MoreOption").hover(function() {
//         document.getElementById("MoreOption").style.width = "10%";
//     }, function() {
//         document.getElementById("MoreOption").style.width = "0%";
//     });
// });

function openPage(Name) {
    $("header").addClass("open");
    var i, tab;
    tab = document.getElementsByClassName("ex");
    for (i = 0; i < tab.length; i++) {
        tab[i].style.display = "none";
    }
    document.getElementById(Name).style.display = "block";
}

function closePage(Name) {
    $("header").removeClass("open");
    var i, tab;
    tab = document.getElementsByClassName("ex");
    for (i = 0; i < tab.length; i++) {
        tab[i].style.display = "none";
    }
}

// document.addEventListener("keydown", move_man, false);

// function move_man(event) {
//     var key_event = event.key;
//     var character = document.getElementById("character");
//     var posY = 0,
//         posX = 0;
//     if (key_event === "ArrowUp") {
//         character.style.transform = "rotateX(360deg)";
//         posY = character.offsetTop - 20;
//         if (posY > 0) {
//             character.style.top = posY + "px";
//         }
//     } else if (key_event === "ArrowDown") {
//         // character.style.transform = "rotateX(180deg)";
//         posY = character.offsetTop + 20;
//         if (posY < document.body.offsetHeight - 200) {
//             character.style.top = posY + "px";
//         }

//     } else if (key_event === "ArrowRight") {
//         // character.style.transform = "rotateZ(90deg)";
//         posX = character.offsetLeft + 20;
//         if (posX < document.body.offsetWidth - 120) {
//             character.style.left = posX + "px";
//         }
//         posY = character.offsetTop;

//     } else if (key_event === "ArrowLeft") {
//         // character.style.transform = "rotateZ(-90deg)";
//         posX = character.offsetLeft - 20;
//         if (posX > 0) {
//             character.style.left = posX + "px";
//         }
//         posY = character.offsetTop;
//     }

// }