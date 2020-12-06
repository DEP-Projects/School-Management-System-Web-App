import app from './app.component.html';
import style from './app.component.scss';

import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

import '../../node_modules/admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';
import '../../node_modules/admin-lte/dist/js/adminlte.js';


$("app-root").replaceWith('<div id="app">'+app+ '</div>');
var stylesheet = '<style>' +style + '</style>';
$('#app').append(stylesheet);

/*header and carousel*/
$(".nav-link").click(function (){
    if($(this).hasClass("general")){
       $("#header").removeClass("header_bg1");
       $("#carouselExampleFade").show();
    }else{
        $("#header").addClass("header_bg1");
        $("#carouselExampleFade").hide();
    }
});

/*Navgiate activation*/
$(".nav-item").click(function (){
    $(".nav-item").removeClass("active")
    $(this).addClass("active");
    $("#app #main").removeClass('d-none');
    $("#app #main>div").addClass("d-none");
    switch ($(this).attr("data-menu")) {
        case "GENERAL":
            $("#app #main").addClass('d-none');
            break;
        case "COURSES":
            $("#courses").removeClass("d-none");
            break;
        case "STUDENT":
            $("#manageStudent").removeClass("d-none");
            break;
        default:
            break;
    }
});


