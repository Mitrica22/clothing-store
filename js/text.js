$(document).ready(function() {
// Set the scroll for sidebar
	const $sidebar = $('.sidebar-wrapper');

    $( window ).on('load resize', function() {
  		$sidebar.css({'height': $( window ).height() +'px' });
	});

// Dropdown list
	const $navigationLevelOne = $('.navigation-level-one');
	const $navigationLevelTwo = $('.navigation-level-two');

	$navigationLevelOne.on('click', function(e) { 
		e.preventDefault();
		const $this = $(this);
		const $dropdownListItem = $this.siblings($navigationLevelTwo).find('li');

		$this.addClass('listItemActive').siblings($navigationLevelTwo).toggleClass('open');
		if (!$this.siblings($navigationLevelTwo).hasClass('open')) {
			$dropdownListItem.removeClass("fa fa-caret-right");
		}
	});

	$navigationLevelTwo.find('li').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass("fa fa-caret-right").siblings().removeClass("fa fa-caret-right");
	});

//Dropdown menu on small screen
	const $menuBurger = $('#menu-burger');
	const $overlay = $('.overlay');

	$menuBurger.on('click', function(e){
		e.preventDefault();
		$sidebar.addClass('visible');
		$overlay.addClass('overlay-active');
	});


	$('body').on('click', '.overlay, .close-navigation', function(){
		$overlay.removeClass('overlay-active');
		$sidebar.removeClass('visible');
	});

	$(window).resize(function() {
		if ($(window).width() > 992 && $overlay.hasClass('overlay-active')) { 
			$overlay.removeClass('overlay-active');
			$sidebar.removeClass('visible');
		}
	});

 });