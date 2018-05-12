import './style/style.scss';
import $ from 'jquery';

//begin
window.addEventListener('load',init,false);

function init() {
    dropDown();
    navBarDown();
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

    //phone ver nav-bar
    function navBarDown(){
        const btn = $('#nav-bar-btn');
        btn.click(function(){
            console.log('click');
            
            const menu = $('#nav-item');
            let isShow = menu.css('display');
            console.log(isShow);
            isShow = isShow === 'block'? 'none' : 'block';
            menu.css('display',isShow);
        });
    }
}