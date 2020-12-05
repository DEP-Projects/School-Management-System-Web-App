
import department from './department.component.html';

import style from './department.component.scss';

$("app-department").replaceWith('<div id="department">' + department + '</div>');
var html = '<style>' + style + '</style>';
$("#department").append(html);

$("#nav-bar-department a").click(function (){
    $("#nav-bar-department a").removeClass("active");
    $(this).addClass("active");

    $("#outlet-department>div").addClass("d-none");
    switch ($(this).attr("data-menu-nav")){
        case "LIST":
            $("#list-department-wrapper").removeClass("d-none");
            break;
        case "ADD":
            $("#add-department-wrapper").removeClass("d-none");
            break;
        case "EDIT":
            $("#edit-department-wrapper").removeClass("d-none");
            break;
        default:
            break;
    }
});

$("#list-department-wrapper a").click(function (){
    $("#outlet-department>div").addClass("d-none");
    switch ($(this).attr("data-menu-dep")){
        case "CS":
            $("#department-computer-science").removeClass("d-none");
            break;
        case "BS":
            $("#department-business-studies").removeClass("d-none");
            break;
        case "FD":
            $("#department-fashion-design").removeClass("d-none");
            break;
        case "MECH":
            $("#department-mechatronics").removeClass("d-none");
            break;
        case "EE":
            $("#department-electrical").removeClass("d-none");
            break;
        case "ZOO":
            $("#department-zoology").removeClass("d-none");
            break;
        default:
            break;
    }
});