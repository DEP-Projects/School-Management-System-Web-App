

import logging from './logging.component.html';
import style from './logging.component.scss';


$("app-logging").replaceWith('<div id="logging">'+logging+ '</div>');

var html = '<style>' +style + '</style>'
$("#logging").append(html);