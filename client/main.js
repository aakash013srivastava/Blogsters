import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.navigation.events({
	'click .logout':function(event){
		event.preventDefault();
		Meteor.logout();
		Router.go('login');
	},
	'click #loginClick':function(event){
		event.preventDefault();
		Meteor.loginWithGoogle(function(err){
			if(err)
				console.log(err);
			else
				console.log("No error!");
		});
	}
});


/*  Route configuration for the application */

Router.configure({
	layoutTemplate: 'header'
});

Router.route('/',{
	name: 'home',
	template:'home' ,
});

Router.route('/about',{
	name: 'about',
	template: 'about',
});

Router.route('contact',{
	name: 'contact',
	template: 'contact',
});

Router.route('/myPosts',{
	name: 'myPosts',
	template: 'myPosts',
});

Router.route('/myCommunities',{
	name: 'myCommunities',
	template: 'login',
});


Router.route('/login',{
	name: 'login',
	template: 'login',
});



