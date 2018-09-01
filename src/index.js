import './style/style.scss';
import $ from 'jquery';
$(document).ready(init);

function init() {
	dropDown();
	navBarDown();
	newsToggle();
	navPhone();
	//news toggle
	function newsToggle() {
		const idList = ['news-lists', 'plan-lists', 'expriment-lists'];
		const header = $('#news-header');
	
		header.find('h1').each(function () {
			$(this).mouseover((e) => {
				console.log('hover');
					let currentActive = $('.active');
	
					currentActive.each(function(){
						$(this).removeClass('active')
					});
					const targetElement = $(e.target).hasClass('icon') ? $(e.target).parent() : $(e.target);
					const id = targetElement.parent().attr('id');
					idList.forEach(e => {
						header.removeClass(e);
					});
					header.addClass(id);
					targetElement.parent().addClass('active');
				
			});
		});
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
	function navBarDown() {
		const btn = $('#nav-bar-btn');
		btn.click(function () {
			//console.log('click');

			const menu = $('#nav-item');
			let isShow = menu.css('display');
			//console.log(isShow);
			isShow = isShow === 'block' ? 'none' : 'block';
			menu.css('display', isShow);
		});
	}

	function navPhone() {
    var navContainer = $('#nav-phone-container');
    var navController = $('#nav-phone-icon');
    var navBg = $('nav-phone-bg');

		navBg.click( function (event) {
        navContainer.removeClass('active');
    });

		navController.click(function (event) {
        navContainer.toggleClass('active');
		});
		
		navContainer.click(event => {
			const e1 = $(event.target)
        if (e1.hasClass('nav-phone-btn')) {
            event.stopPropagation();
            const e = e1.parent().parent();
            if (e.hasClass('nav-phone-item')) {
                e.toggleClass('open');
            }
        } else if (event.target.nodeName === 'A') {
            const e = e1.parent();
            if (e.hasClass('nav-phone-item')) {
                e.toggleClass('open');
            }
        }
		});
}
}
