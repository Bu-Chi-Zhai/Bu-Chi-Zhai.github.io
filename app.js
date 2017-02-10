$(document).ready(function(){
	console.log("Hello, my friend!");
	init();
	fillProjectDetails();
	$.getJSON('project.txt',function(data){
	  console.log(data);
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
		divs.push("<div class='jumbotron'>");

		divs.push("<h2>" + value.title + " <span class='badge'>" + value.category + "</span></h2>");

		divs.push("<p>" + value.time + "</p>");

		divs.push("<div class='breadcrumb'>");
	    $.each(value.skills, function(index, value){
			divs.push("<span class='badge' style='background-color: " + colors[index % 5]+ "'>" + value + "</span>");
		});
		divs.push("</div>");

	    divs.push("<div id='"+ value.id + "'><h3>Details</h3></div>");

	

		divs.push("<h3>Summary</h3><ul class='list-group'>");
		$.each(value.bullets, function(index, value){
			divs.push("<li>" + value + "</li>");
		});

		divs.push("</ul>");


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
var vm = {

	projects : [
		{
			id: "elasticdb",
			title : "Elastic DB",
			time : "Dec 2016 - Feb 2017",
			category : "Database",
			bullets : [
						"Used TPC-W benchmark to simulate primarily shopping (WIPS), browsing (WIPSb) and web-based ordering (WIPSo).",
			 			"Developed an elastic distributed database using MySQL replication and used it to serve as the backend for a multi-tier web application running TPC-W benchmark.", 
			 			"Developed a load balancer to route the browsing queries to master and route the ordering queries to slaves in a round-robin manner", 
			 			"Use backup slaves to guarantee the high availability (HA) of the database in the real-time.",
			 			"Auto scale out/in the database server based on service level agreement when real-time workload changes.",
			 			"Monitor the workload/database/operating system, display statistic graph of metrics (workload/queries/resources) using CanvasJS."
			 		],
			skills : [
				"High availability and dynamic scalability of a distributed database", 
				"Multi-tier web application", 
				"TPC-W benchmark",
				"MySQL(replication)",
				"EasyRules",
				"JavaScript",
				"Dstats",
				"CanvasJS",
				"Git",
				"Eclipse",
				"AWS"
			],
			images : ["", "", ""],
			progress : "",
			details :[
				{
					type : "p",
					content : "this is a test text for elastic db "
				}, 
				{
					type : "code",
					content : "public class Solution"
				},
				{
					type : "p",
					content : "text text text"
				}
			]

		},
		{
			id: "onlinestore",
			title : "Online Music Store",
			time : "Dec 2016 - Jan 2017",
			category : "Database",
			bullets : [
				"Developed UI by using AngularJS and Bootstrap.", 
				"Implemented backend functions by using Spring MVC and REST Services", 
				"Designed and Implemented role based user authentication and account management. ", 
				"Created product module to support CRUD operations, including product searching and sorting, etc.",
				"Implemented shopping cart and order check out functionality."
			],
			skills : [
				"Spring MVC", 
				"Spring Data", 
				"Spring Security",
				"Spring REST",
				"Spring Web Flow",
				"Hibernate",
				"AngularJS",
				"JSP",
				"Bootstrap",
				"MySQL"
			],
			images : ["", "", ""],
			progress : "",
			details : [
				{
					type : "p",
					content : "this is a test text for online music store"
				}, 
				{
					type : "code",
					content : "public class Solution"
				},
				{
					type : "p",
					content : "text text text"
				}
			]
		},
	]
}
