$(document).keydown(function(e) {
    if (e.ctrlKey == true && (e.which == '61' || e.which == '107' || e.which == '109')) {
        e.preventDefault();
    }
    // 107 Num Key  +
    // 109 Num Key  -
    // 173 Min Key  hyphen/underscor Hey
    // 61 Plus key  +/= key
});

window.onresize = function() {
    var zoom = window.devicePixelRatio;
    document.body.style.zoom="100%";
}
$('.up a,.down a,.bar a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 800, 'swing');
});

// function openPage(pageName) {
//     var i, tabcontent;
//     tabcontent = document.getElementsByClassName("tabcontent3");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     document.getElementById(pageName).style.display = "block";
// }
document.getElementById("DFO").click();

function openNav() {
    document.getElementById("Idk").style.width = "50%";
}

function closeNav() {
    document.getElementById("Idk").style.width = "0%";
}