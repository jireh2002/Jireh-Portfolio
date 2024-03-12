$(document).ready(function() {
    let menuIcon = $('#menu-icon');
    let navbar = $('.navbar');
  
    menuIcon.click(function() {
      menuIcon.toggleClass('bx-x');
      navbar.toggleClass('active');
    });
  
    let sections = $('section');
    let navLinks = $('header nav a');
  
    $(window).scroll(function() {
      sections.each(function() {
        let top = $(window).scrollTop();
        let offset = $(this).offset().top - 150;
        let height = $(this).outerHeight();
        let id = $(this).attr('id');
  
        if (top >= offset && top < offset + height) {
          navLinks.removeClass('active');
          $('header nav a[href*=' + id + ']').addClass('active');
        }
      });
  
      let header = $('header');
      header.toggleClass('sticky', $(window).scrollTop() > 100);
  
      menuIcon.removeClass('bx-x');
      navbar.removeClass('active');
    });
  
    ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
    });
  
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .activity-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img, .about-content a', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
  
    const typed = new Typed('.multiple-text', {
      strings: ['UI Designer', 'Website Developer', 'Programmer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });
  });
  