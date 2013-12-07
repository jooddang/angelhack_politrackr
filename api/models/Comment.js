/**
 * Comment
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	/* e.g.
  	nickname: 'string'
  	*/
    issueId: 'integer',
    owner: 'string',
    text: 'string',
    like: 'integer',
    dislike: 'integer'
  }

};
