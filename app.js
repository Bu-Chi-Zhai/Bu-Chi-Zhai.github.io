var vm = {};

$(document).ready(function(){
	console.log("Hello, my friend!");

	$.get('project.txt',function(data){
		vm = JSON.parse(data);
		init();
		fillProjectDetails();
	    console.log(typeof vm);
	});

});

var linkAction = function(ele){
	$(ele).addClass("active").siblings().removeClass("active");
	console.log(ele);
	$('html, body').animate({
        scrollTop: $(ele.title).offset().top - 300
    }, 2000);
}


var init = function (){

	var links = [];
	var divs = [];
	$.each(vm.projects, function(index, value){

		// init nav bar
		// init links function
		links.push("<li><a href='javascript:void(0)' onclick='linkAction(this)'' title='#" + value.id + "'>" + value.title + "</a></li>");
		$('#link-container').html(links.join(""));

		




		// init projects
		// start project jumbotron div
		divs.push("<div class='jumbotron'>");

		// start skill div
		divs.push("<div class='breadcrumb'>");
	    	$.each(value.skills, function(index, value){
			divs.push("<span class='badge' style='background-color: " + colors[index % 5]+ "'>" + value + "</span>");
		});
		// end skill div
		
		divs.push("<h2>" + value.title + " <span class='badge'>" + value.category + "</span></h2>");

		divs.push("<p>" + value.time + "</p>");
		
		


	    divs.push("<div id='"+ value.id + "'><h3>Details</h3></div>");

	
	    // Summary
	    // start ul
		divs.push("<h3>Summary</h3><ul class='list-group'>");
		$.each(value.bullets, function(index, value){
			divs.push("<li>" + value + "</li>");
		});
		// end ul
		divs.push("</ul>");

		// images for each project
		// start images div
		divs.push("<div class='row'>");
		$.each(value.images, function(index, value){
			divs.push("<div class='col-lg-4 col-md-4 col-sm-4'>");
			divs.push("<a href='#' class='thumbnail' ><img src='" + value + "' alt='elasticdb'> </a>");
			divs.push("</div>");
		});

		// end images div
		divs.push("</div>")
		// end breadcrumb div
		divs.push("</div>");
		// end jumbotron div
		divs.push("</div>");

	});

	$('#projects').html(divs.join(""));
}

var fillProjectDetails = function(){
	$.each(vm.projects, function(index, value){
		var tags = [];

		$.each(value.details, function(index, value){
			if(value.type === "p"){
				tags.push("<p>" + value.content + "</p>");
			}else if(value.type == "code"){
				tags.push("<div class='well well-lg codeshadow'><code>" + value.content + "</code></div>")
			}
		});
		$('#' + value.id).append(tags.join(""));

	});
}



var colors = ["PaleVioletRed", "Orange", "LightSeaGreen ", "Gold", "SteelBlue"];
