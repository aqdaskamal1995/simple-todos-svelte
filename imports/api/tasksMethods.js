import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { TasksCollection } from  '../db/TasksCollection';
 
Meteor.methods({
   // If user isn't authroized the task will not be added other wise TasksCollection.insert is called 
  'tasks.insert'(text) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      createdAt: new Date(),
      userId: this.userId,
    })
  },
 
   // If user isn't authroized the task will not be removed other wise TasksCollection.remove is called 
  'tasks.remove'(taskId) {
    check(taskId, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.remove(taskId);
  },
 
   // If user isn't authroized the task will not be checked other wise TasksCollection.setIsChecked is called 
  'tasks.setIsChecked'(taskId, isChecked) {
    check(taskId, String);
    check(isChecked, Boolean);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.update(taskId, {
      $set: {
        isChecked
      }
    });
  }
});