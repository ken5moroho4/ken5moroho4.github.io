jQuery(function() {
  var nav = jQuery('ul');
  var navTop = nav.offset().top;
  jQuery(window).scroll(function () {
    var winTop = jQuery(this).scrollTop();
    if (winTop > navTop) {
      nav.addClass('fixed')
    } else if (winTop <= navTop) {
      nav.removeClass('fixed')
    }
  });
});
