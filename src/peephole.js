(function(win, undefined) {
	'use strict';
	var $;

	function peephole(opts) {
		opts = $.extend({
			elSelector: '> img',
			center: true,
			upscale: true,
			downscale: true,
			useClasses: true
		}, opts);

		return this.each(function() {
			var $container = $(this),
				$el = $(opts.elSelector, $container),
				containerWidth = $container.width(),
				containerHeight = $container.height();

			function align() {
				var $el = $(this),
					width = $el.width(),
					height = $el.height(),
					newWidth,
					newHeight;

				var widthScale = containerWidth / width,
					heightScale = containerHeight / height,
					scale = Math.max(widthScale, heightScale);

				if((opts.upscale === true && scale > 1) || (opts.downscale === true && scale < 1)) {
					// Do scaling
					newWidth = width * scale;
					newHeight = height * scale;

					$el.width(newWidth);
					$el.height(newHeight);
				} else {
					newWidth = width;
					newHeight = height;
				}

				if(opts.center === true) {
					// Do centering
					var pullLeft = 0,
						pullTop = 0;

					pullLeft = (newWidth - containerWidth) / 2;
					pullTop = (newHeight - containerHeight) / 2;

					$el.css({
						'margin-left': (-pullLeft) + 'px',
						'margin-top': (-pullTop) + 'px'
					});
				}

				if(opts.useClasses === true) {
					$container
						.removeClass('is-loading')
						.addClass('is-scaled');
				}
			}

			if(opts.useClasses === true) {
				$container.addClass('is-loading');
			}

			if($el.prop('nodeName') === 'IMG') {
				if($el.prop('complete') === true) {
					align.call($el[0]);
				} else {
					$el.on('load', align);
				}
			} else {
				align();
			}

		});
	}

	function _do(jQuery) {
		$ = jQuery;
		$.fn.peephole = peephole;
	}

	if (typeof define === 'function' && define.amd) {
		define(['jquery'], _do);
	} else {
		_do(jQuery);
	}
}(window));
