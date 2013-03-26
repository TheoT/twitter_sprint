$(function (){
	var data = {
	labels : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
	datasets : [
		{
			fillColor : "rgba(4,69,133,.85)",
			strokeColor : "rgba(0,0,120,1)",
			data : [.12,.15,.19,.11,-.06]
		}
	]
}
	var ctx = document.getElementById("tweetChart").getContext("2d");
	var myNewChart = new Chart(ctx).Bar(data);
})
