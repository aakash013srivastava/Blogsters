import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.navigation.events({
	'click .logout':function(event){
		event.preventDefault();
		Meteor.logout();
		Router.go('login');
	}
});


/*  Route configuration for the application */

Router.configure({
	layoutTemplate: 'header'
});

Router.route({'/',
	name: 'home',
	template:'home' ,
});

Router.route({'/about',
	name: 'about'',
	template: 'about',
});

Router.route({'/login',
	name: 'login',
	template: 'login',
});

Router.route({'contact',
	name: 'contact',
	template: 'contact',
});