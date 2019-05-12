$(function() {
    $('.left a,.right a').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollLeft: $($(this).attr('href')).offset().left}, 500, 'swing');
    });
  });
$(function() {
  $('.up a,.down a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'swing');
  });
});

