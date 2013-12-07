/**
 * Issue
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
  	title: 'string',
  	amount: 'float',
  	deadline: 'datetime',
  	status: 'integer',
  	owner: 'string',
  	choiceOne: 'string',
  	choiceTwo: 'string',
  	amountOfChoiceOne: 'float',
  	amountOfChoiceTwo: 'float',
  	peopleOfChoiceOne: 'integer',
  	peopleOfChoiceTwo: 'integer',
  	result: 'integer',
  	like: 'integer',
  	photoPath: 'string'
    
  }

};
