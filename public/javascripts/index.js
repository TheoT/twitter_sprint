$(function (){
	$( "#datepicker" ).datepicker();
	$("#submit").click(function() {
		$("#loading").append("Loading...");
  		$.post("/data",
	        {date: $("#datepicker").val(), keyword: $("#keyword").val()},
	        function (success){
        	  $("#loading").append("Loading...");
	          var data = {
				labels : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
				datasets : [
					{
						fillColor : "rgba(4,69,133,.85)",
						strokeColor : "rgba(0,0,120,1)",
						data : [.12,.15,.19,.11,.06]
					},
					{
						fillColor : "rgba(242,41,57,.85)",
						strokeColor : "rgba(0,0,120,1)",
						data : [.02,.05,.01,.02,.03]
					},
					{
						fillColor : "rgba(201,193,194,.5)",
						strokeColor : "rgba(0,0,120,1)",
						data : [.03,.02,.22,.11,.006]
					}
				]
			}
			var ctx = document.getElementById("tweetChart").getContext("2d");
			var myNewChart = new Chart(ctx).Line(data);
        });
  	});
})
