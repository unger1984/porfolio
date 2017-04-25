/**
 * Created by AlexWiseman aka unger1984@gmail.com on 25.04.17.
 */

jQuery(function($){

    $(".fancybox").fancybox({
        'autoScale'		: false,
        'transitionIn'		: 'elastic',
        'transitionOut'		: 'elastic',
        'opacity'		: true,
        'overlayShow'           : true,
        'type'			: 'image'
    });

    $('.logo').click(function(){
        self.location = '/';
    })
});