/*O-ppear 0.1.0
 *
 *
 *Copyright (C) 2015 BeginnerO
 *BOSlider is released under MIT license.
 *http://opensource.org/licenses/MIT
 */
(function($){
    $.fn.Oppear = function(parms){

        return this.each(function(){
            var $Opp = $(this);
            $(document).on('ready',function(){
                var OppPosition = $Opp.offset().top;
                $Opp
                    .css('opacity','0')
                    .css('transition','2s')
                    .css('transform','translateY(50px)');

                var RTC = setInterval(function(){
                    if($(document).scrollTop() + $(window).height() > OppPosition){
                        $Opp
                            .css('opacity','1')
                            .css('transform','translateY(0px)');

                        clearInterval(RTC);
                    }
                },200);
            })
        })
    }

})(jQuery);