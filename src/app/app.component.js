
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import  app from './app.component.html';
import style from './app.component.scss';

$("app-root").replaceWith('<div id="app">' + app + '</div>');
var html = '<style>' + style + '</style>';
$("#app").append(html);