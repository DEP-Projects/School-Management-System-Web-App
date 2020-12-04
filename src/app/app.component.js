import app from './app.component.html';
import style from './app.component.scss';

import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

$("app-root").replaceWith('<div id="app">'+app+ '</div>');
var stylesheet = '<style>' +style + '</style>';
$('#app').append(stylesheet);



