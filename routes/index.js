var rem = require('rem');
// var sentiment = require('sentiment');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.getSentiment = function(req, res){

	var client = rem.createClient({format: 'json'}).configure({uploadFormat: 'form'});

	client.debug = true;

	client('http://api.repustate.com/v2/3c1f7bd4197853f6fcee1f254d8d5a06ee599150/score.json').post({'text': 'I hate you'}, 
		function(err, result){
			console.log("data returned ___________");
			console.log(result);
			res.render('index', {title: 'yay!!!'});
		});

}