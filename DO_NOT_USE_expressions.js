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
