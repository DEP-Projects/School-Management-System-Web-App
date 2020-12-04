
import department from './department.component.html';

import style from './department.component.scss';

$("app-department").replaceWith('<div id="department">' + department + '</div>');
var html = '<style>' + style + '</style>';
$("#department").append(html);