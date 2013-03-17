JQuery Expressions for Responsive Web Design
======================

jQuery expressions or Responsive Web Design is a jQuery plugin intended to aid responsive web design practices. Specifically, the plugin enables he user to identify page elements that re nside or outside e user's current iewport.

$.extend($.expr[':'], {
  "below-the-fold": function (a) {
		return $(window).height() + $(window).scrollTop() <= $(a).offset().top;
	},
	"above-the-top": function (a) {
		return $(window).scrollTop() >= $(a).offset().top + $(a).height();
	},
	"left-of-screen": function (a) {
		return $(window).scrollLeft() >= $(a).offset().left + $(a).width();
	},
	"right-of-screen": function (a) {
		return $(window).width() + $(window).scrollLeft() <= $(a).offset().left;
	},
	"in-viewport": function (a) {
		return $(a).filter(':below-the-fold,:above-the-top,:left-of-screen,:right-of-screen').length < 1;
	}
});
