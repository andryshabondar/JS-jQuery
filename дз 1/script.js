$(function () {
    $('.min2').show(0,
        function () {
            $('.black').fadeIn().animate({
                height: '324px',
            }, 60000, 'easeOutCubic',
                function () {
                    $('.min2').hide();
                    $('.min1').show();
                    $('.black').animate({
                        height: '0px'
                    }, 60000, 'easeOutCubic',
                        function () {
                            $('.min1').hide();
                            $('.min0').show();
                        })
                })
        })
})
