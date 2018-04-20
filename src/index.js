import printMe from './printf.js';
import './style.scss';
const $ = require('jquery');

//begin
window.addEventListener('load',init,false);

function init() {
    dropDown();

    function dropDown() {
        let hoverDelay = 200;

        function dropDown() {
            $(".nav-items:hover").children("ul.drop-down").slideDown();
        }
        let hoverTime;
        $(".nav-items").hover(function () {
            clearTimeout(hoverTime);
            hoverTime = setTimeout(dropDown, hoverDelay);
        }, function () {
            $(this).children("ul.drop-down").slideUp();
        });

    }
}