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
	  		, amount: req.param('amount')
	  		, deadline: req.param('deadline')
			, status: 0
			, owner: req.param('owner')
			, choiceOne: req.param('choiceOne')
			, choiceTwo: req.param('choiceTwo')
			, result: 0
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
			res.json(issues, 200);
		});
	}

	, find: function(req, res) {
		Issue.findOneById(req.param('id')).done(function(err, issues) {
			res.json(issues, 200);
		});
	}

	, update: function(req, res) {

		var updated = {};
		if (req.param('amount')) {
			updated['amount'] = req.param('amount');
		}
		if (req.param('status')) {
			updated['status'] = req.param('status');
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
		
	}

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to IssueController)
   */
  // _config: {}

  
};
