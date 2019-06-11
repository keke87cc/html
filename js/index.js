$('.up a,.down a,button a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 800, 'swing');
});


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