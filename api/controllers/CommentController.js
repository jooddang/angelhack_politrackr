/**
 * CommentController
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
		Comment.create({
			issueId: req.param('issueId')
	  		, ownerId: req.param('ownerId')
	  		, account: req.param('account')
	  		, text: req.param('text')
			, like: 0
			, dislike: 0
	  	}).done(function(err, comment) {
	  		if (err) {
	  			return console.log(err);
	  		} else {
	  			console.log('comment created: ', comment);
	  			res.json(comment, 200);
	  		}
	  	});
	}

	, read: function(req, res) {
		Comment.find().exec(function(err, comments) {
			res.json(comments, 200);
		});
	}

	, find: function(req, res) {
		Comment.findOneById(req.param('id')).done(function(err, comments) {
			res.json(comments, 200);
		});
	}

	, findByIssue: function(req, res) {
		//console.log(req);
		Comment.findByIssueId(req.param('issueId')).done(function(err, issues) {
			console.log(issues);
			res.json(issues, 200);
		});
	}

	, update: function(req, res) {

		var updated = {};
		if (req.param('text')) {
			updated['text'] = req.param('text');
		}
		if (req.param('like')) {
			updated['like'] = req.param('like');
		}
		if (req.param('dislike')) {
			updated['dislike'] = req.param('dislike');
		}
		console.log('updated = ', updated);

		Comment.update ({
			id: req.param('id')
		}
		, updated
		, function (err, comment) {
			if (err) {
				res.json(err);
				return console.log(err);
			} else {
				console.log(comment);
				res.json(comment, 200);
			}
		});
	}

	, delete: function(req, res) {
		
	}

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to CommentController)
   */
  // _config: {}

  
};
