import './style/style.scss';
import $ from 'jquery';

//begin
window.addEventListener('load',init,false);

function init() {
    dropDown();
    navBarDown();
    toggleList();



    //switch
    function toggleList() {
        const newsHeader = document.getElementById('news-header');
        const classList = ['news-lists','plan-lists','expriment-lists'];

        // add event listener
        newsHeader.addEventListener('mouseover',(e)=>{
            if(e.target.nodeName === 'H1'){
                const id = e.target.id;
                console.log(id);
                newsHeader.classList.remove(...classList);
                newsHeader.classList.add(id);
            }
        },false);

    }

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