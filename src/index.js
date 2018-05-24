import './style/style.scss';
import $ from 'jquery';

//begin
window.addEventListener('load',init,false);

function init() {
    dropDown();
    navBarDown();
    newsToggle();
    //news toggle
    function newsToggle() {
        const idList = ['news-lists','plan-lists','expriment-lists'];
       const header = document.getElementById('news-header');
       let currentActive = [];
       currentActive =  currentActive.concat(Array.from(document.getElementsByClassName('active')));
       console.log(currentActive);
       header.addEventListener('mouseover',(e)=>{
            if(e.target.nodeName === 'A') {
                currentActive.forEach((e)=>{e.classList.remove('active')})
               const id =  e.target.parentNode.id;
               e.currentTarget.classList.remove(...idList);
               e.currentTarget.classList.add(id);
               e.target.parentNode.classList.add('active');
               currentActive.push(e.target.parentNode);
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