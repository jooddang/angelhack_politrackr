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
	  	}).done(function(err, user) {
	  		if (err) {
	  			return console.log(err);
	  		} else {
	  			console.log('user created: ', user);
	  			res.json(user);
	  		}
	  	});
	}

	, read: function(req, res) {

	}

	, update: function(req, res) {
		
	}

	, delete: function(req, res) {
		
	}

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to IssueController)
   */
  // _config: {}

  
};
