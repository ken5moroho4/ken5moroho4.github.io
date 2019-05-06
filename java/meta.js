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
$(window).on('load scroll', function() {
    add_class_in_scrolling($('.gazou1'));
    add_class_in_scrolling($('.gazou2'));
    add_class_in_scrolling($('.gazou3'));
});

// スクロールで要素が表示された時にclassを付与する
function add_class_in_scrolling(target) {
    var winScroll = $(window).scrollTop();
    var winHeight = $(window).height();
    var scrollPos = winScroll + winHeight;

    if(target.offset().top < scrollPos) {
        target.addClass('is-show');
    }
}
