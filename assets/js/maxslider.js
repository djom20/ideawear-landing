// 'use strict';

$(function() {
    $.fn.maxSlider = function() {
        var $this = $(this);

        function init() {
            // Bullets
            var numli = $this.find('li').size(),
                numChild = (numli > 0) ? numli : 3, // Cantidad de elementos agregados por el usuario
                limit = numChild,
                ind = 1,
                bullets = $('<ol/>', {
                    'class': 'bullets'
                });

            if (numChild > 0) {
                for (var i = 1; i <= numChild; i++) {
                    console.info('create item#' + i);
                    bullets.append(
                        $('<li/>', {
                            'class': (i == 1) ? 'active' : ''
                        }).attr('data-slide-to', i).click(function(e) {
                            e.preventDefault();
                            console.info('click bullet', $(this).data('slide-to'));
                            changeSlide();
                        })
                    );
                }

                $this.append(
                    bullets
                );

                console.info('insert bullets', bullets);

                // AutoRotate
                setInterval(function() {
                    ind = rotate(ind, limit);
                }, 2000);
            } else {
                console.info('It not successfully created the html for the plugin.');
            }
        }

        function rotate(currentPos, limit) {
            var next = currentPos + 1,
                pos = (next > limit) ? 1 : next;

            console.info('next', next);
            console.info('pos', pos);

            $this.find('li').removeClass('active');
            $this.find('li:nth-child(' + pos + ')').addClass('active');

            $this.find('ul').animate({
                'margin-left': -(pos * $this.width() + 'px')
            });

            return pos;
        }

        function changeSlide() {
            console.log('changeSlide');
        }

        init();
    };
});
