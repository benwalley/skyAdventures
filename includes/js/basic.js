var logo = $("#logo");
var wind = $(window);
var links = $(".navLi")
var hamburger = $("#hamburger");
var dropdown = $(".dropdowna")
var dropped = false
var space = $("#spacer");
var linkThing = $(".dLink");
var clickLink = $("#linkDrop")
var linkDropped = false;
var linkClicked = false;



$(window).scroll(function() {
  if ($(document).scrollTop() > 75) {
  	$("#navBar").height("10vh")

    $('.navLi, .s').addClass('shrink');
   	logo.height("10vh");
   	space.height("10vh")

  } else {
  	$("#navBar").height("19vh")
    $(' .navLi, .s').removeClass('shrink');
    logo.height("19vh");
    space.height("19vh")
  }
});

resize();

// hamburger click listener
hamburger.on("click", function(){
	if(dropped == false){
		dropped = true
		var x = 0
			var animate = window.setInterval(function(){
				if(x < dropdown.length){
					dropdown[x].style.display = "block";
					x++	
					console.log(x)
				}else{
					clearInterval(animate);
				}
					
			
			}, 50)
			
	}else if(dropped == true){
		dropped = false
		var x = (dropdown.length -1)
			var animateBack = window.setInterval(function(){
				if(x >= 0){
					dropdown[x].style.display = "none";
					x--
					console.log(x)
				}else{
					clearInterval(animateBack);
				}
					
			
			}, 50)
			
	}
	
});



$(window).resize(function(){
	
	resize()
})


$("#linkDrop").click(function(){
	if(linkDropped){
		undropLink()
	}else{
		dropLink()
	}

	
})

$(document).click(function(){
	if(linkDropped){
		undropLink()
	}
});

$('#linkDrop').click(function(event){
    event.stopPropagation();
});


function addLinks(){
	for(var i = 0; i < links.length ; i++){
		links[i].classList.remove("hide")
	}
}

function removeLinks(){
	for(var i = 0; i < links.length; i++){
		links[i].classList.add("hide")
	}
}





function resize(){
	if(wind.width() > 767){
		$("#hamburger").removeClass("show");
		addLinks();
	}else if(wind.width() <= 767){
		$("#hamburger").addClass("show");
		removeLinks();

	}
}

// clickLink.click(function(){
// 	if(linkDropped){
// 		undropLink()
// 	}else if(!linkDropped){
// 		dropLink()

// 	}
// })




function dropLink(){
	for(i = 0; i < linkThing.length; i++){
		linkThing[i].style.display = "block"

	}
	linkDropped = true
	linkClicked = true
}

function undropLink(){
	for(i = 0; i < linkThing.length; i++){
		linkThing[i].style.display = "none"
	}
	linkDropped = false
}

