import { Meteor } from 'meteor/meteor';
import {Posts} from '../imports/posts.js';

/* Define methods to call from client */

Meteor.methods({
	'addPost': function(user_id,title,category,content,createdAt,updatedAt){
		Posts.insert({
		user_id: user_id,
		category: category,
		title:  title,
		content: content,
		createdAt: createdAt,
		updatedAt:updatedAt,
		});
	},
	'showPosts': function(id){
		var post = Posts.find({'user_id':id}).fetch();
		return post;
	},
	'deletePost': function(id){
		Posts.remove(id);
	},
	'updatePost':function(id,title,content,category){
		//Posts.update(id,{$set:{title:title,content:content,category:category,updatedAt:new Date()}});
	}
});


Meteor.startup(() => {
  // code to run on server at startup
});
