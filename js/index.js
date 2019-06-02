$('.left a,.right a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollLeft: $($(this).attr('href')).offset().left }, 800, 'swing');
});

$('.up a,.down a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 800, 'swing');
});

function openPage(pageName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent3");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "block";
}
document.getElementById("defaultOpen").click();