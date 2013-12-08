/**
 * IssueController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

	create: function(req, res) {
		Issue.create({
			title: req.param('title')
	  		, deadline: req.param('deadline')
			, status: req.param('status')
			, owner: req.param('owner')
			, choiceOne: req.param('choiceOne')
			, choiceTwo: req.param('choiceTwo')
			, amountOfChoiceOne: req.param('amountOfChoiceOne')
			, amountOfChoiceTwo: req.param('amountOfChoiceTwo')
			, result: req.param("result")
			, like : req.param("like")
	  	}).done(function(err, issue) {
	  		if (err) {
	  			res.json(err);
	  			return console.log(err);
	  		} else {
	  			console.log('issue created: ', issue);
	  			res.json(issue, 200);
	  		}
	  	});
	}

	, read: function(req, res) {
		Issue.find().exec(function(err, issues) {
			//res.json(issues, 200);
			res.view({issues : issues});
		});
	}

	, find: function(req, res) {
		Issue.findOneById(req.param('id')).done(function(err, issues) {
			if (err) {
	  			res.json(err);
	  			return console.log(err);
	  		} else {
				res.json(issues, 200);
			}
		});
	}

	, getLatest: function(req, res) {
		console.log("getLatest");
		// Issue.find().sort('id DESC').limit(1).exec(function (err, latest1) {
		Issue.findById(16).exec(function (err, latest1) {
			//res.json(latest, 200);
			console.log('what da = ', latest1);
			res.view({latest : latest1[0]});
		});
	}

	, detail: function(req, res) {
		console.log('detail....');
		Issue.findOneById(req.param('id')).exec(function(err, issues) {
			if (err) {
	  			res.json(err);
	  			return console.log(err);
	  		} else {
	  			console.log('issue = ', issues);
	  			res.view({latest : issues});
			}
		});
	}

	, update: function(req, res) {

		var updated = {};
		console.log(req);

		if (req.param('title')) {
			updated['title'] = req.param('title');
		}
		if (req.param('status')) {
			updated['status'] = req.param('status');
		}
		if (req.param('choiceOne')) {
			updated['choiceOne'] = req.param('choiceOne');
		}
		if (req.param('choiceTwo')) {
			updated['choiceTwo'] = req.param('choiceTwo');
		}
		if (req.param('amountOfChoiceOne')) {
			updated['amountOfChoiceOne'] = req.param('amountOfChoiceOne');
		}
		if (req.param('amountOfChoiceTwo')) {
			updated['amountOfChoiceTwo'] = req.param('amountOfChoiceTwo');
		}
		if (req.param('peopleOfChoiceOne')) {
			updated['peopleOfChoiceOne'] = req.param('peopleOfChoiceOne');
		}
		if (req.param('peopleOfChoiceTwo')) {
			updated['peopleOfChoiceTwo'] = req.param('peopleOfChoiceTwo');
		}
		if (req.param('result')) {
			updated['result'] = req.param('result');
		}
		if (req.param('like')) {
			updated['like'] = req.param('like');
		}
		if (req.param('owner')) {
			updated['owner'] = req.param('owner');
		}
		console.log('updated = ', updated);

		Issue.update ({
			id: req.param('id')
		}
		, updated
		, function (err, issue) {
			if (err) {
				res.json(err);
				return;
			} else {
				res.json(issue, 200);
			}
		});
	}

	, delete: function(req, res) {
		Issue.destroy({id: req.param('id')}).done(function(err, issues) {
			if (err) {
				res.json(err);
				return;
			} else {
				res.json(issues, 200);
			}
		});		
	}

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to IssueController)
   */
  // _config: {}

  
};
