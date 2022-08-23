$(document).ready(function() {

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

//Làm slider tự động
    setInterval(function () {
        let head = $('.slider-inner a:first-child');
        let tail = $('.slider-inner a:last-child');

        let current = $('.active');
        let next = current.next();


        if(current.attr('rel') == tail.attr('rel'))
            {
                current.removeClass('active');
                next = head;
                next.addClass('active').css('animation', 'sliderLtR 1.5s 1');
            }

        current.removeClass('active');
        next.addClass('active').css('animation', 'sliderLtR 1.5s 1');

        
    }, 5000);   
    
    setInterval(function () {
        let headT = $('.teacher_slider-inner a:first-child');
        let tailT = $('.teacher_slider-inner a:last-child');

        let currentT = $('.teacher_active');
        let nextT = currentT.next();


        if(currentT.attr('rel') == tailT.attr('rel'))
            {
                currentT.removeClass('teacher_active');
                nextT = headT;
                nextT.addClass('teacher_active').css('animation', 'sliderLtR 1.5s 1');
            }

        currentT.removeClass('teacher_active');
        nextT.addClass('teacher_active').css('animation', 'sliderLtR 1.5s 1');

        
    }, 5000);   
})