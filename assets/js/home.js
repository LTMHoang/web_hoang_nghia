$(document).ready(function() {
    
//Để làm scrollTop

    $(window).scroll(function() {
        if($(this).scrollTop() > 100){
            $('#back-home').fadeIn();
        } else{
            $('#back-home').fadeOut();
        }
    });


    $('#back-home').click(function() {
        $('html, body').animate( {
            scrollTop: 0
        }, 1000);
    });

//Làm hỗ trợ nhanh
    $('#quickIcon').click(function() {
        $('#quickIcon').hide('slow');

        $('#quickMess').css('transform', 'translateY(0)');
        $('#quickMess').css('transition', 'transform 0.7s linear');
    });   
    
    $('#quickClose').click(function() {
        $('#quickIcon').show('slow');

        $('#quickMess').css('transform', 'translateY(100%)');
        $('#quickMess').css('transition', 'transform 0.7s linear');
    });

//Để làm slider teacher mobile

    $('.teacher_next').click(function() {
        let currentATeacher = $('.teacher_active');
        let nextATeacher = currentATeacher.next();

        if(nextATeacher.length) {
            currentATeacher.removeClass('teacher_active');
            nextATeacher.addClass('teacher_active').css('animation', 'sliderLtR 1.5s 1');
        }
    });

    $('.teacher_prev').click(function() {
        let currentATeacher = $('.teacher_active');
        let prevATeacher = currentATeacher.prev();

        if(prevATeacher.length) {
            currentATeacher.removeClass('teacher_active');
            prevATeacher.addClass('teacher_active').css('animation', 'sliderRtL 1.5s 1');
        }
    });

//Để làm slider comment

    $('.next').click(function() {
        let currentA = $('.active');
        let nextA = currentA.next();

        if(nextA.length) {
            currentA.removeClass('active');
            nextA.addClass('active').css('animation', 'sliderLtR 1.5s 1');
        }
    });

    $('.prev').click(function() {
        let currentA = $('.active');
        let prevA = currentA.prev();

        if(prevA.length) {
            currentA.removeClass('active');
            prevA.addClass('active').css('animation', 'sliderRtL 1.5s 1');
        }
    });
});