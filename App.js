console.log('App.js is loaded');

// RequireJs Configuration
requirejs.config({
    baseUrl: 'library',
    paths: {
        jquery: 'jquery',
        underscore: 'underscore-min',
        backbone: 'backbone-min',
        handlebar: 'handlebars',
        view: '../views/view',
        model: '../models/model',
        template: '/templates'
    }
});


// Initiating the model and view
define(['view','model'],function(PersonView, PersonModel){

	var person1 = new PersonView({el: '#person-view1', model: PersonModel.person1 });

	var person2 = new PersonView({el: '#person-view2', model: PersonModel.person2 });
});