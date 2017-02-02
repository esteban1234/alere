jQuery(function($) {
    $('.caja_q_1').waypoint(function() {
        $(this).toggleClass('bounceIn animated');
    }, {
        offset: '70%',
        triggerOnce: true
    });

});
