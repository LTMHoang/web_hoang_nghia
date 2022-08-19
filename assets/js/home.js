function closeForm(obj) {
    let overplayClose = document.getElementsByClassName('cal_overplay')[0];
    let formSignupClose = document.getElementsByClassName('form_signup')[0];
    if(confirm('Bạn có chắc chắn muốn hủy đăng ký khóa học?') == true){
        overplayClose.classList.remove('cal_active');
        formSignupClose.classList.remove('cal_active');
    }
}

window.onload = function() {
    //Mở form
    let btnSub = document.querySelectorAll('.calendar_accept');
    let overplayOpen = document.querySelector('.cal_overplay');
    let formSignupOpen = document.querySelector('.form_signup');

    for(let o of btnSub) {
        o.addEventListener('click', function() {
            overplayOpen.classList.add('cal_active');
            formSignupOpen.classList.add('cal_active');
        })
    }

    //Đóng form
    let btnClose = document.querySelector('.cal_close');
    let btnOverlay = document.querySelector('.cal_overplay');

    btnClose.addEventListener('click', function() {
        closeForm(this);
    })

    btnOverlay.addEventListener('click', function() {
        closeForm(this);
    })


}

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

//Kiểm tra đăng ký
    let name = document.getElementById('name');
    let dob = document.getElementById('dob');
    let email = document.getElementById('email');
    let phoneN = document.getElementById('phone_number');
    let address = document.getElementById('address');

    $('.form_signup > input').click(function() {
        if(name.value == "" || dob.value == "" || email.value == "" || phoneN.value == "" || address.value == ""){
            alert('Bạn chưa điền đầy đủ thông tin!!!');
        }

        else{
            alert('CHÚC MỪNG BẠN ĐÃ HOÀN THÀNH VIỆC ĐĂNG KÝ KHÓA HỌC'
                    + '\n\n'
                    + 'Đây là mã khóa học ' + (Math.random()*100000).toFixed(0)
                    + '\n\n'
                    + 'HẸN GẶP LẠI BẠN SỚM NHẤT CÓ THỂ'
                );
            $('.cal_overplay, .form_signup').removeClass('cal_active');
        }
    })

//Thiết kế website
    //Chỉnh course_list 
    let a = document.getElementById('chuong_trinh_dai_han').parentElement;
    let b = document.getElementById('chuong_trinh_ngan_han').parentElement;
    let c = document.getElementById('chuyen_vien_do_hoa_va_web').parentElement;

    $('#thiet_ke_website .course_list > div:nth-child(1)').click(function () {
        $(a).addClass('edu_active');
        $(b).removeClass('edu_active');
        $(c).removeClass('edu_active');

        $('#ky_thuat_vien_thiet_ke_website').removeClass('edu_active');
        $('#Thiet_ke_web').removeClass('edu_active');
        $('#Thiet_ke_giao_dien_website').removeClass('edu_active');
        $('#app_mobile_design').removeClass('edu_active');
        $('#chuyen_vien_thiet_ke_do_hoa_va_website').removeClass('edu_active');
    });
    $('#thiet_ke_website .course_list > div:nth-child(1)').click(function () {
        $('#thiet_ke_website .course_list > div:nth-child(1)').addClass('addBorder');
        $('#thiet_ke_website .course_list > div:nth-child(2)').removeClass('addBorder');
        $('#thiet_ke_website .course_list > div:nth-child(3)').removeClass('addBorder');
    });

    $('#thiet_ke_website .course_list > div:nth-child(2)').click(function () {
        $(a).removeClass('edu_active');
        $(b).addClass('edu_active');
        $(c).removeClass('edu_active');

        $('#ky_thuat_vien_thiet_ke_website').removeClass('edu_active');
        $('#Thiet_ke_web').removeClass('edu_active');
        $('#Thiet_ke_giao_dien_website').removeClass('edu_active');
        $('#app_mobile_design').removeClass('edu_active');
        $('#chuyen_vien_thiet_ke_do_hoa_va_website').removeClass('edu_active');
    });
    $('#thiet_ke_website .course_list > div:nth-child(2)').click(function () {
        $('#thiet_ke_website .course_list > div:nth-child(1)').removeClass('addBorder');
        $('#thiet_ke_website .course_list > div:nth-child(2)').addClass('addBorder');
        $('#thiet_ke_website .course_list > div:nth-child(3)').removeClass('addBorder');
    });

    $('#thiet_ke_website .course_list > div:nth-child(3)').click(function () {
        $(a).removeClass('edu_active');
        $(b).removeClass('edu_active');
        $(c).addClass('edu_active');

        $('#ky_thuat_vien_thiet_ke_website').removeClass('edu_active');
        $('#Thiet_ke_web').removeClass('edu_active');
        $('#Thiet_ke_giao_dien_website').removeClass('edu_active');
        $('#app_mobile_design').removeClass('edu_active');
        $('#chuyen_vien_thiet_ke_do_hoa_va_website').removeClass('edu_active');
    });
    $('#thiet_ke_website .course_list > div:nth-child(3)').click(function () {
        $('#thiet_ke_website .course_list > div:nth-child(1)').removeClass('addBorder');
        $('#thiet_ke_website .course_list > div:nth-child(2)').removeClass('addBorder');
        $('#thiet_ke_website .course_list > div:nth-child(3)').addClass('addBorder');
    });

    //Chỉnh course_infomation
    $('#chuong_trinh_dai_han div:nth-child(1)').click(function () {
        $('#ky_thuat_vien_thiet_ke_website').addClass('edu_active');
        $('#Thiet_ke_web').removeClass('edu_active');
        $('#Thiet_ke_giao_dien_website').removeClass('edu_active');
        $('#app_mobile_design').removeClass('edu_active');
        $('#chuyen_vien_thiet_ke_do_hoa_va_website').removeClass('edu_active');
    });

    $('#chuong_trinh_ngan_han div:nth-child(1)').click(function () {
        $('#ky_thuat_vien_thiet_ke_website').removeClass('edu_active');
        $('#Thiet_ke_web').addClass('edu_active');
        $('#Thiet_ke_giao_dien_website').removeClass('edu_active');
        $('#app_mobile_design').removeClass('edu_active');
        $('#chuyen_vien_thiet_ke_do_hoa_va_website').removeClass('edu_active');
    });

    $('#chuong_trinh_ngan_han div:nth-child(2)').click(function () {
        $('#ky_thuat_vien_thiet_ke_website').removeClass('edu_active');
        $('#Thiet_ke_web').removeClass('edu_active');
        $('#Thiet_ke_giao_dien_website').addClass('edu_active');
        $('#app_mobile_design').removeClass('edu_active');
        $('#chuyen_vien_thiet_ke_do_hoa_va_website').removeClass('edu_active');
    });

    $('#chuong_trinh_ngan_han div:nth-child(3)').click(function () {
        $('#ky_thuat_vien_thiet_ke_website').removeClass('edu_active');
        $('#Thiet_ke_web').removeClass('edu_active');
        $('#Thiet_ke_giao_dien_website').removeClass('edu_active');
        $('#app_mobile_design').addClass('edu_active');
        $('#chuyen_vien_thiet_ke_do_hoa_va_website').removeClass('edu_active');
    });

    $('#chuyen_vien_do_hoa_va_web div:nth-child(1)').click(function () {
        $('#ky_thuat_vien_thiet_ke_website').removeClass('edu_active');
        $('#Thiet_ke_web').removeClass('edu_active');
        $('#Thiet_ke_giao_dien_website').removeClass('edu_active');
        $('#app_mobile_design').removeClass('edu_active');
        $('#chuyen_vien_thiet_ke_do_hoa_va_website').addClass('edu_active');
    });


//Lập trình di động
    //Chỉnh course_list 
    let d = document.getElementById('cac_lop_lap_trinh_vien_di_dong').parentElement;
    let e = document.getElementById('cac_chuyen_de_khac').parentElement;

    $('#lap_trinh_di_dong .course_list > div:nth-child(1)').click(function () {
        $(d).addClass('edu_active');
        $(e).removeClass('edu_active');

        $('#lap_trinh_android').removeClass('edu_active');
        $('#lap_trinh_ios').removeClass('edu_active');
        $('#react_navtive').removeClass('edu_active');
    });
    $('#lap_trinh_di_dong .course_list > div:nth-child(1)').click(function () {
        $('#lap_trinh_di_dong .course_list > div:nth-child(1)').addClass('addBorder');
        $('#lap_trinh_di_dong .course_list > div:nth-child(2)').removeClass('addBorder');
    });

    $('#lap_trinh_di_dong .course_list > div:nth-child(2)').click(function () {
        $(d).removeClass('edu_active');
        $(e).addClass('edu_active');

        $('#lap_trinh_android').removeClass('edu_active');
        $('#lap_trinh_ios').removeClass('edu_active');
        $('#react_navtive').removeClass('edu_active');
    });
    $('#lap_trinh_di_dong .course_list > div:nth-child(2)').click(function () {
        $('#lap_trinh_di_dong .course_list > div:nth-child(1)').removeClass('addBorder');
        $('#lap_trinh_di_dong .course_list > div:nth-child(2)').addClass('addBorder');
    });

    //Chỉnh course_infomation
    $('#cac_lop_lap_trinh_vien_di_dong div:nth-child(1)').click(function () {
        $('#lap_trinh_android').addClass('edu_active');
        $('#lap_trinh_ios').removeClass('edu_active');
        $('#react_navtive').removeClass('edu_active');
    });

    $('#cac_lop_lap_trinh_vien_di_dong div:nth-child(2)').click(function () {
        $('#lap_trinh_android').removeClass('edu_active');
        $('#lap_trinh_ios').addClass('edu_active');
        $('#react_navtive').removeClass('edu_active');
    });

    $('#cac_chuyen_de_khac div:nth-child(1)').click(function () {
        $('#lap_trinh_android').removeClass('edu_active');
        $('#lap_trinh_ios').removeClass('edu_active');
        $('#react_navtive').addClass('edu_active');
    });

//Tin học văn phòng
    //Chỉnh course_list
    let f = document.getElementById('tin_hoc').parentElement;
    let g = document.getElementById('chuyen_de').parentElement;

    $('#tin_hoc_van_phong .course_list > div:nth-child(1)').click(function () {
        $(f).addClass('edu_active');
        $(g).removeClass('edu_active');

        $('#ung_dung_cntt_co_ban').removeClass('edu_active');
        $('#ung_dung_cntt_nang_cao').removeClass('edu_active');
        $('#luyen_thi_nhan_chung_chi').removeClass('edu_active');
        $('#chuyen_de_excel').removeClass('edu_active');
    });
    $('#tin_hoc_van_phong .course_list > div:nth-child(1)').click(function () {
        $('#tin_hoc_van_phong .course_list > div:nth-child(1)').addClass('addBorder');
        $('#tin_hoc_van_phong .course_list > div:nth-child(2)').removeClass('addBorder');
    })

    $('#tin_hoc_van_phong .course_list > div:nth-child(2)').click(function () {
        $(f).removeClass('edu_active');
        $(g).addClass('edu_active');

        $('#ung_dung_cntt_co_ban').removeClass('edu_active');
        $('#ung_dung_cntt_nang_cao').removeClass('edu_active');
        $('#luyen_thi_nhan_chung_chi').removeClass('edu_active');
        $('#chuyen_de_excel').removeClass('edu_active');
    });
    $('#tin_hoc_van_phong .course_list > div:nth-child(2)').click(function () {
        $('#tin_hoc_van_phong .course_list > div:nth-child(1)').removeClass('addBorder');
        $('#tin_hoc_van_phong .course_list > div:nth-child(2)').addClass('addBorder');
    })

    //Chỉnh course_infomation
    $('#tin_hoc div:nth-child(1)').click(function () {
        $('#ung_dung_cntt_co_ban').addClass('edu_active');
        $('#ung_dung_cntt_nang_cao').removeClass('edu_active');
        $('#luyen_thi_nhan_chung_chi').removeClass('edu_active');
        $('#chuyen_de_excel').removeClass('edu_active');
    });

    $('#tin_hoc div:nth-child(2)').click(function () {
        $('#ung_dung_cntt_co_ban').removeClass('edu_active');
        $('#ung_dung_cntt_nang_cao').addClass('edu_active');
        $('#luyen_thi_nhan_chung_chi').removeClass('edu_active');
        $('#chuyen_de_excel').removeClass('edu_active');
    });

    $('#tin_hoc div:nth-child(3)').click(function () {
        $('#ung_dung_cntt_co_ban').removeClass('edu_active');
        $('#ung_dung_cntt_nang_cao').removeClass('edu_active');
        $('#luyen_thi_nhan_chung_chi').addClass('edu_active');
        $('#chuyen_de_excel').removeClass('edu_active');
    });

    $('#chuyen_de div:nth-child(1)').click(function () {
        $('#ung_dung_cntt_co_ban').removeClass('edu_active');
        $('#ung_dung_cntt_nang_cao').removeClass('edu_active');
        $('#luyen_thi_nhan_chung_chi').removeClass('edu_active');
        $('#chuyen_de_excel').addClass('edu_active');
    });

//Tin học văn phòng MOS
    //Chỉnh course_list
    let h = document.getElementById('tin_hoc_vp_mos').parentElement;
    $('#tin_hoc_van_phong_mos .course_list > div:nth-child(1)').click(function () {
        $(h).addClass('edu_active');

        $('#word_mos').removeClass('edu_active');
        $('#excel_mos').removeClass('edu_active');
        $('#powerpoint_mos').removeClass('edu_active');
    });
    $('#tin_hoc_van_phong_mos .course_list > div:nth-child(1)').click(function () {
         $('#tin_hoc_van_phong_mos .course_list > div:nth-child(1)').addClass('addBorder');
    });

    //Chỉnh course_infomation
    $('#tin_hoc_vp_mos > div:nth-child(1)').click(function () {
        $('#word_mos').addClass('edu_active');
        $('#excel_mos').removeClass('edu_active');
        $('#powerpoint_mos').removeClass('edu_active');
    });

    $('#tin_hoc_vp_mos > div:nth-child(2)').click(function () {
        $('#word_mos').removeClass('edu_active');
        $('#excel_mos').addClass('edu_active');
        $('#powerpoint_mos').removeClass('edu_active');
    });

    $('#tin_hoc_vp_mos > div:nth-child(3)').click(function () {
        $('#word_mos').removeClass('edu_active');
        $('#excel_mos').removeClass('edu_active');
        $('#powerpoint_mos').addClass('edu_active');
    });

//Mạng máy tính
    //Chỉnh course_list
    let i = document.getElementById('mang_mt').parentElement;
    $('#mang_may_tinh .course_list > div:nth-child(1)').click(function () {
        $(i).addClass('edu_active');

        $('#nhap_mon_quan_tri_mang_va_an_ninh_mang').removeClass('edu_active');
        $('#quan_tri_ha_tang').removeClass('edu_active');
        $('#quan_tri_he_thong_mang').removeClass('edu_active');
        $('#an_ninh_mang').removeClass('edu_active');
    });
    $('#mang_may_tinh .course_list > div:nth-child(1)').click(function () {
        $('#mang_may_tinh .course_list > div:nth-child(1)').addClass('addBorder');
    });

    //Chỉnh course_infomation
    $('#mang_mt > div:nth-child(1)').click(function () {
        $('#nhap_mon_quan_tri_mang_va_an_ninh_mang').addClass('edu_active');
        $('#quan_tri_ha_tang').removeClass('edu_active');
        $('#quan_tri_he_thong_mang').removeClass('edu_active');
        $('#an_ninh_mang').removeClass('edu_active');
    });

    $('#mang_mt > div:nth-child(2)').click(function () {
        $('#nhap_mon_quan_tri_mang_va_an_ninh_mang').removeClass('edu_active');
        $('#quan_tri_ha_tang').addClass('edu_active');
        $('#quan_tri_he_thong_mang').removeClass('edu_active');
        $('#an_ninh_mang').removeClass('edu_active');
    });

    $('#mang_mt > div:nth-child(3)').click(function () {
        $('#nhap_mon_quan_tri_mang_va_an_ninh_mang').removeClass('edu_active');
        $('#quan_tri_ha_tang').removeClass('edu_active');
        $('#quan_tri_he_thong_mang').addClass('edu_active');
        $('#an_ninh_mang').removeClass('edu_active');
    });

    $('#mang_mt > div:nth-child(4)').click(function () {
        $('#nhap_mon_quan_tri_mang_va_an_ninh_mang').removeClass('edu_active');
        $('#quan_tri_ha_tang').removeClass('edu_active');
        $('#quan_tri_he_thong_mang').removeClass('edu_active');
        $('#an_ninh_mang').addClass('edu_active');
    });    
});