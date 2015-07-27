//create link-switching function
var direct = function(dest) {
	//if dest is empty, close container if openand then exit function
	if (dest === undefined || dest === null || dest === "") {
		if ($("#container").hasClass("open")) {
			$("#container").removeClass("open");
			$("#contents").html("");
			$("#back-button").removeClass("open");
			$("#close-button").removeClass("open");
		}
		return;
	}
	//add animation to direction process
	var flash = function(){
		//if ($("#container").hasClass("open")) { 
			$("#block-links").addClass("open");
			$("#container").removeClass("open");
			setTimeout(function(){ $("#container").addClass("open"); } , 250);
			setTimeout(function(){ $("#block-links").removeClass("open"); } , 500);
		//} else {
		//	$("#container").addClass("open");
		//}
	};
	//if nav-link then send to nav, if not then to project
	switch (dest) {
/*	case " ":
		if ( $("#container").hasClass("open") ) { $("container").removeClass("open"); }
		break; */
	case "work":
	case "contact":
	case "about":
		flash();
		$("#contents").load(dest+".html");
		if ( $("#close-button").hasClass("open") !== true ) { $("#close-button").addClass("open"); }
		if ($("#back-button").hasClass("open")) {$("#back-button").removeClass("open");}
		if ($("#block-links").hasClass("open")) {$("#block-links").removeClass("open");}//so scrolling and links works on mobile without having to click first.
		if ($("#pulldown").hasClass("open")) { $("#pulldown").toggleClass("open"); }
		break;
	default:
		flash();
		$("#contents").load("projects/"+dest+".html");
		if ( $("#back-button").hasClass("open") !== true ) { $("#back-button").addClass("open"); }
		if ( $("#close-button").hasClass("open") !== true ) { $("#close-button").addClass("open"); }
		break;
	} //end switch (dest)
}//end function (direct)

/********************************************************************************************/
/*************************************** START READY ****************************************/
/********************************************************************************************/

$(function() {

	//toggle navigation as mini-tutorial
	setTimeout(function(){ $("#pulldown").removeClass("open"); } , 500);

	//find address if needs to be redirect
	var loc = $(location).attr('href');
	var locpop;
	var locif = loc.search("#");
	if (locif >= 1) {
		loc = loc.split("#");
		locpop = loc.pop();
	}//end if (loc if)
	direct(locpop);//call direct to place user where they need to go

	//toggle pulldown for navigation
	$("#nav-logo").click(function() {
		$("#pulldown").toggleClass("open");
		$("#block-links").toggleClass("open");
	});//end click

	//if user clicks outside of pulldown, close menu
	$("html").click(function() {
		if ($("#pulldown").hasClass("open")) {
			$("#pulldown").removeClass("open");
		}//when you click on not #pulldown it closes
	});//end click ("html")
	$("html").mouseover( function () {
		if ( $("#pulldown").hasClass("open") !== true ) { 
			if ($("#block-links").hasClass("open")) {
				$("#block-links").removeClass("open"); 
			}
		}
	});//when #pulldown is closed so is #block-links
	$("#block-links").click(function () {
		$("#block-links").removeClass("open");
	});//if you click on #block-links it closes
	$("#pulldown").click(function(event) {
		event.stopPropagation();
	});//stops html click from affecting #pulldown

	//process links
	$("a.direct").click(function() {
		var href = $(this).attr("href");
		href = href.replace("#", "");
		direct(href);
	});//end click

	//process landing figures
	$("#landing a.direct").each(function() {
		var href = $(this).attr("href");
		href = href.replace("#", "");
		//var title = href.replace(/-/g," ");
		//title = title.replace(/'/g, "\&rsquo;")
		//$("figure", this).append('<img src="images/landing-'+href+'.jpg" /><figcaption>'+title+'</figcaption>'); --if I want to add titles to landing, use these 3 lines
		$("figure", this).append('<img src="images/landing-'+href+'.jpg" /><figcaption></figcaption>');
	});//end each (landing figures)

});//end ready

/********************************************************************************************/
/**************************************** START AJAX ****************************************/
/********************************************************************************************/

$(document).ajaxComplete(function(){

	//process links
	$("#container a.direct").click( function() {
		var href = $(this).attr("href");
		href = href.replace("#", "");
		direct(href);
	});//end click

	//process figures
	$("#container figure").each(function() {
		var src = $(this).attr("name");
		var items = $(this).attr("items");
		$(this).prepend('<img src="images/'+src+'-bg.jpg" />');//add image to figure for background
		$(this).click(function() {
				$("#popup-contain").html("");
				for (var i = 1; i <= items; i++) {
					$("#popup-contain").append('<a href="images/'+src+'-'+i+'.jpg" class="popup"><img src="images/blank.jpg" /></a>');//end append
				}//end for
				$(".popup").magnificPopup({ //initialize popup
					//fixed: true,
					//customClass: "top"
					type: 'image',
					gallery: {
						enabled: true
					}
				});//end popup
				$("a.popup:first").click();
			//}
		});//end click (figure)
	});//end each (figure)
	//add figcaption text programatically
	$("#container figure figcaption").text("click image to view");

});//end ajax

/*
TO-DO
- figure out how to make direct() work with the back/forward buttons
- could make #back-button actually a back button (replace href with dest)
- write a companion script to redirect user if they go to actual file
- update direct to include photos: #lenny's-burger?photos-0-0 would go to first figure, first image, 0-1 would go to second
*/