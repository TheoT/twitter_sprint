$(function (){
	$( "#datepicker" ).datepicker();
	$("#bar").hide();
	$("#graph").hide()
	$("#submit").click(function() {
	$("#bar").show();	
  		$.post("/data",
	        {date: $("#datepicker").val(), keyword: $("#keyword").val()},
	        function (data){
	        	console.log(data['neg']);
	        	$("#bar").hide();
	        	$("#graph").show();
	          var graphData = {
						labels : data.dates,
						datasets : [
							{
								// fillColor : "rgba(4,69,133,.85)",
								fillColor : "rgba(59,154,198,.85)",
								strokeColor : "rgba(51,51,51,1)",
								data : data['pos']
							},
							{
								// fillColor : "rgba(184,74,72,.85)",
								fillColor : "rgba(235,60,60,.85)",
								strokeColor : "rgba(51,51,51,1)",
								data : data['neg']
							}
							]
					}
					$("#tweetChart").addClass('chart');
					var ctx = document.getElementById("tweetChart").getContext("2d");
					var myNewChart = new Chart(ctx).Line(graphData);

        });
  	});
});
