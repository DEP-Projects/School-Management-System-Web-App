import registration from './registration.component.html';
import style from './registration.component.scss';

$("app-registration").replaceWith('<div id="registration">'+registration+ '</div>');

var html = '<style>' +style + '</style>'
$("#registration").append(html);

