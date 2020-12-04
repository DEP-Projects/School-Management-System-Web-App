import courses from './courses.component.html';
import style from './courses.component.scss';


$("app-courses").replaceWith('<div id="courses">' + courses + '</div>');
var html = '<style>' + style + '</style>';
$("#courses").append(html);



