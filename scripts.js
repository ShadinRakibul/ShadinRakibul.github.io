$(document).ready(function() {
  // Smooth scroll for navbar links
  $('.navbar-nav .nav-link').click(function(e) {
    var target = $(this).attr('href');
    if (target.startsWith("#")) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $(target).offset().top - 80
      }, 800);
    }
  });

  // Fade in sections on scroll
  function revealSections() {
    $('.section-fade-in').each(function() {
      var top_of_element = $(this).offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > top_of_element + 40) {
        $(this).addClass('visible');
      }
    });
  }
  $(window).on('scroll', revealSections);
  revealSections();

  // Contact form modal submit
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();
    $('#formResponse').html('<div class="alert alert-success">Thank you for contacting me!</div>');
    setTimeout(function(){
      $('#contactModal').modal('hide');
      $('#formResponse').html('');
      $('#contactForm')[0].reset();
    }, 1500);
  });
});