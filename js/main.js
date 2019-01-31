(function($) {

    $(document).ready(function() {
        
        // NAV
        $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
        });

        // Scrolling Effect
        $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                $('nav').addClass('black');
            }

            else {
                $('nav').removeClass('black');
            }
        })

        // LightGallery
        $("#lightgallery").lightGallery();

        // DATE PICKER
        var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        $('#startDate').datepicker({
            uiLibrary:    'bootstrap4',
            iconsLibrary: 'fontawesome',
            minDate:      today,
            maxDate:      function() {
                return $('#endDate').val();
            }
        });

        $('#endDate').datepicker({
            uiLibrary:    'bootstrap4',
            iconsLibrary: 'fontawesome',
            minDate:      function() {
                return $('#startDate').val();
            }
        });

        // BX SLIDER
        $('.slider').bxSlider();

        var slider = $('.bxslider').bxSlider({
            auto: true,
        });

        // $(window).resize(function(){
        //   slider.reloadSlider();
        // });

        // PROFILE TAB
        var $tabButtonItem = $('#tab-button li'),
            $tabSelect     = $('#tab-select'),
            $tabContents   = $('.tab-contents'),
            activeClass    = 'is-active';

        $tabButtonItem.first().addClass(activeClass);
        $tabContents.not(':first').hide();

        $tabButtonItem.find('a').on('click', function(e) {
            var target = $(this).attr('href');

            $tabButtonItem.removeClass(activeClass);
            $(this).parent().addClass(activeClass);
            $tabSelect.val(target);
            $tabContents.hide();
            $(target).show();
            e.preventDefault();
        });

        $tabSelect.on('change', function() {
            var target          = $(this).val(),
                targetSelectNum = $(this).prop('selectedIndex');

            $tabButtonItem.removeClass(activeClass);
            $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
            $tabContents.hide();
            $(target).show();
        });

        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
        }

    });
    
})(jQuery); 


  

