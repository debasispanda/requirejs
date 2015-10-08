// Model Module
define(['backbone'],function(Backbone){

	var PersonModel = Backbone.Model.extend({});

	var personModel1  = new PersonModel({
		person: [
		{firstName: "Debasis", lastName: "Panda"},
		{firstName: "Shaun", lastName: "Marsh"},
		{firstName: "Mitchel", lastName: "Johnson"},
		{firstName: "Sachin", lastName: "Tendulkar"},
		{firstName: "MS", lastName: "Dhoni"},
		{firstName: "Narendra", lastName: "Modi"}
		]
	});

	var personModel2  = new PersonModel({
		person: [
		{firstName: "Yehuda", lastName: "Katz"},
		{firstName: "Carl", lastName: "Lerche"},
		{firstName: "Alan", lastName: "Johnson"},
		{firstName: "Yehuda", lastName: "Katz"},
		{firstName: "Carl", lastName: "Lerche"},
		{firstName: "Alan", lastName: "Johnson"}
		]
	});	

	return {
		person1 : personModel1,
		person2 : personModel2,
	}
});