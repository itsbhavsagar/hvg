$(function () {
  'use strict';
  var f = 0.3,
    d = 0.7,
    n = !1,
    e = window
      .getComputedStyle(document.querySelector('body'), '::before')
      .getPropertyValue('content')
      .replace(/"/g, '')
      .replace(/'/g, '');
  function t() {
    'desktop' == e
      ? window.requestAnimationFrame
        ? window.requestAnimationFrame(o)
        : o()
      : $('.menu-section')
          .find('.full-container')
          .removeAttr('style')
          .find('.half-container')
          .removeAttr('style'),
      $(window).scrollTop() < $(window).height() / 2
        ? $('.vertical-nav .prev').addClass('inactive')
        : $('.vertical-nav .prev').removeClass('inactive'),
      $(window).scrollTop() >
      $(document).height() - (3 * $(window).height()) / 2
        ? $('.vertical-nav .next').addClass('inactive')
        : $('.vertical-nav .next').removeClass('inactive');
  }
  function o() {
    var s = $(window).scrollTop(),
      c = $(window).height(),
      l = $(window).width();
    $('.menu-section').each(function () {
      var e,
        n,
        t = $(this),
        o = s - t.offset().top,
        i = 1,
        a = l / 2 + 'px';
      -c <= o && o <= 0
        ? ((r = i = 1), (a = (0.5 * l * (-o / c)).toFixed(0) + 'px'))
        : (r =
            0 < o && o <= c
              ? ((a = '0px'),
                (i = (1 - (o * f) / c).toFixed(5)),
                (1 - o / c).toFixed(5))
              : o < -c
              ? ((a = l / 2 + 'px'), (i = 1))
              : 0),
        (e = (parseInt(a.replace('px', '')) * d) / 20),
        (n = t.find('.full-container')),
        (i = i),
        (r = r),
        n.css({
          '-moz-transform': 'scale(' + i + ')',
          '-webkit-transform': 'scale(' + i + ')',
          '-ms-transform': 'scale(' + i + ')',
          '-o-transform': 'scale(' + i + ')',
          transform: 'scale(' + i + ')',
          opacity: r,
        });
      var i = t.is(':nth-of-type(even)') ? '-' : '+',
        r = t.is(':nth-of-type(even)') ? '+' : '-';
      t.find('.half-container') &&
        (p(t.find('.half-container').eq(0), i + a, e),
        p(t.find('.half-container').eq(1), r + a, e)),
        0 <= o && o < c
          ? t.addClass('is-visible')
          : t.removeClass('is-visible');
    });
  }
  function p(e, n, t) {
    var o = Math.ceil(Math.abs(n.replace('px', '')));
    o >= $(window).width() / 2 ? (t = 0) : 20 < o && (t = d),
      e.css({
        '-moz-transform': 'translateX(' + n + ')',
        '-webkit-transform': 'translateX(' + n + ')',
        '-ms-transform': 'translateX(' + n + ')',
        '-o-transform': 'translateX(' + n + ')',
        transform: 'translateX(' + n + ')',
        'box-shadow': '0px 0px 40px rgba(0,0,0,' + t + ')',
      });
  }
  function i() {
    n ||
      (0 < $('.menu-section.is-visible').next().length &&
        r($('.menu-section.is-visible').next()));
  }
  function a() {
    var e;
    n ||
      (0 < (e = $('.menu-section.is-visible')).length &&
      $(window).scrollTop() != e.offset().top
        ? r(e)
        : 0 < e.prev().length &&
          $(window).scrollTop() == e.offset().top &&
          r(e.prev('.menu-section')));
  }
  function r(e) {
    (n = !0),
      $('body,html').animate({ scrollTop: e.offset().top }, 500, function () {
        n = !1;
      });
  }
  $(window).on('resize', function () {
    e = window
      .getComputedStyle(document.querySelector('body'), '::before')
      .getPropertyValue('content')
      .replace(/"/g, '')
      .replace(/'/g, '');
  }),
    t(),
    $(window).on('scroll', function () {
      t();
    }),
    $('.vertical-nav .prev').on('click', function () {
      a();
    }),
    $('.vertical-nav .next').on('click', function () {
      i();
    }),
    $(document).keydown(function (e) {
      '38' == e.which
        ? (a(), e.preventDefault())
        : '40' == e.which && (i(), e.preventDefault());
    });
});
