import courses from './courses.component.html';
import style from './courses.component.scss';


$("app-courses").replaceWith('<div id="courses">' + courses + '</div>');
var html = '<style>' + style + '</style>';
$("#courses").append(html);

$("#btnSave").click(function (){
    $("#showCourses").append('<div class="info-box">' +
        '<span class="info-box-icon bg-dark"><i class="fas fa-book-reader"></i></span>'+
        '<div class="info-box-content">' +
            '<span class="info-box-text">' + $("#txt-name").val() + '</span>' +
            '<span class="info-box-number">' + '00' + '</span>'+
        '</div>' +
        '<div class="info-box-footer">' +
            '<a href="#">' +
                'More info ' + '<i class="fas fa-arrow-circle-right"></i>' +
            '</a>' +
            '<span class="info-box-text">'+ $("#txt-trainer").val() + '</span>' +
        '</div>' +
    '</div>')
})

$("#showCourses>.info-box> .info-box-footer> a").click(function (){
    $(".content-wrapper").addClass('d-none');
    $("#courseDetails").removeClass('d-none');
})

$("#courseDetails .breadcrumb li a").click(function (){
    $(".content-wrapper").addClass('d-none');
    $("#coursesMain").removeClass('d-none');
})