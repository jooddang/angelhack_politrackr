/**
 * HistoryController
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
		Transaction.create({
			issueId: req.param('issueId')
	  		, account: req.param('account')
	  		, amount: req.param('amount')
			, choice: req.param('choice')
			, result: req.param('result')
	  	}).done(function(err, transaction) {
	  		if (err) {
	  			return console.log(err);
	  		} else {
	  			console.log('transaction created: ', transaction);
	  			res.json(transaction, 200);
	  		}
	  	});
	}

	, read: function(req, res) {
		Transaction.find().exec(function(err, transaction) {
			res.json(transaction, 200);
		});
	}

	, find: function(req, res) {
		var condition = {};
		if (req.param('id')) {
			condition['id'] = req.param('id');
		}
		if (req.param('issueId')) {
			condition['issueId'] = req.param('issueId');
		}
		if (req.param('account')) {
			condition['account'] = req.param('account');
		}
		Transaction.find(condition).done(function(err, transaction) {
			res.json(transaction, 200);
		});
	}

	, update: function(req, res) {

		var updated = {};
		if (req.param('result')) {
			updated['result'] = req.param('result');
		}
		console.log('updated = ', updated);

		Transaction.update ({
			id: req.param('id')
		}
		, updated
		, function (err, transaction) {
			if (err) {
				res.json(err);
				return console.log(err);
			} else {
				console.log(transaction);
				res.json(transaction, 200);
			}
		});
	}

	, delete: function(req, res) {
		
	}


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to HistoryController)
   */
  // _config: {}

  
};
