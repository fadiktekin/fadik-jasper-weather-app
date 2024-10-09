// List Component
// By now, you can add new activities, but they are not yet displayed. Let's fix this.

// Write a List component which renders a list with list items for each activity in the activities state.
// Make the state persistent in local storage.
// Use this wireframe as a reference:

// list and form component wireframe

// Filtering the List
// Currently, the list displays all activities, regardless of whether they are good or bad weather activities. The main purpose of the app, however, is to show activities depending on the current (good / bad) weather fetched from an API, so the list needs to be filtered.

// In the App.js, add a variable const isGoodWeather = true.
// Note: For reasons of simplicity (i.e. it will be replaced in the next task anyway), we will use a hard coded variable to imitate good or bad weather for now.
// Filter the activities for those whose key isForGoodWeather is equal to the global isGoodWeather variable.
// Instead of all activities, pass the filtered activities to the List component.
// In the List component, add a headline depending on the global isGoodWeather variable.
