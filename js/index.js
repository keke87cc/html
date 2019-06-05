$(document).keydown(function(e) {
    if (e.ctrlKey == true && (e.which == '61' || e.which == '107' || e.which == '109')) {
        e.preventDefault();
    }
    // 107 Num Key  +
    // 109 Num Key  -
    // 173 Min Key  hyphen/underscor Hey
    // 61 Plus key  +/= key
});

// window.onresize = function() {
//     var zoom = window.devicePixelRatio;
//     document.body.style.zoom="100%";
// }
window.onresize = function() {
    var zoom = window.devicePixelRatio;
    document.body.style.zoom = (100 / zoom) + "%";
}
$('.up a,.down a,button a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 800, 'swing');
});

$(document).ready(function() {
    $("#More,#MoreOption").hover(function() {
        document.getElementById("MoreOption").style.width = "10%";
    }, function() {
        document.getElementById("MoreOption").style.width = "0%";
    });
});

function openPage(Name) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("ex");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(Name).style.display = "block";
}