import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {Mongo} from 'meteor/mongo';
import {Posts} from '../imports/posts.js';
import './main.html';



	Template.navigation.events({
	'click .logout':function(event){
		event.preventDefault();
		Meteor.logout();
		Router.go('login');
	},
	'click #loginClick':function(event){
		event.preventDefault();
		Meteor.loginWithGoogle({
			loginStyle: "popup"
		},function(err){
			if(err)
				console.log(err);
			else
				console.log("No error!:");
		});
	}
});

	Template.myPosts.events({
		'click #addPost':function(event){
			event.preventDefault();
			
			var user_id = Meteor.userId();
			var title = $('#title').val();
			var category = $('#category').val();
			console.log("addpost called"+category);
			var content = $('#content').val();
			var createdAt = new Date();
			var updatedAt = new Date();
			Meteor.call('addPost',user_id,title,category,content,createdAt,updatedAt,function(err){
				if(err) 
					console.log(err);
				else 
					console.log("No error upon insert");
			});
			console.log("Number of posts: "+Meteor.call('postsCount'));

			
		}
	});


if(Meteor.isServer){


}


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
	template: 'myCommunities',
});


Router.route('/login',{
	name: 'login',
	template: 'login',
});



