$(document).ready(function() {
    
    $("div.back-home").click(function() {
        $("html, body").animate( {
            scrollTop: 0
        }, 1000)
    })

    $('.teacher_next').on('click', function() {
        let currentImgTeacher = $('.teacher_active');
        let nextImgTeacher = currentImgTeacher.next();

        if(nextImgTeacher.length) {
            currentImgTeacher.removeClass('teacher_active');
            nextImgTeacher.addClass('teacher_active');
        }
    })

    $('.teacher_prev').on('click', function() {
        let currentImgTeacher = $('.teacher_active');
        let prevImgTeacher = currentImgTeacher.prev();

        if(prevImgTeacher.length) {
            currentImgTeacher.removeClass('teacher_active');
            prevImgTeacher.addClass('teacher_active');
        }
    })

    $('.next').on('click', function() {
        let currentImg = $('.active');
        let nextImg = currentImg.next();

        if(nextImg.length) {
            currentImg.removeClass('active');
            nextImg.addClass('active');
        }
    });

    $('.prev').on('click', function() {
        let currentImg = $('.active');
        let prevImg = currentImg.prev();

        if(prevImg.length) {
            currentImg.removeClass('active');
            prevImg.addClass('active');
        }
    });

})
