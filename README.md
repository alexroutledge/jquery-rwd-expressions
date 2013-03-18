JQuery Expressions for Responsive Web Design
======================

jQuery expressions or Responsive Web Design is a jQuery plugin intended to aid responsive web design practices. Specifically, the plugin enables the user to identify page elements that are inside or outside the user's current viewport.

Some example use cases are:

-Lazy loading content based on a user's scrolling activity

-Performing DOM manipulations on elements currently in the user's viewport

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
