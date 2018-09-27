# CodeChallengeDojo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.
To run this project we need: 
Node 8.9 or higher
then run npm install.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Info about project
This project can be done in many ways. 
- We can use routing to make a route for a list view and then child route for a detailed view.
- We can make it in one component.
- We can make 2 components not related (parent - child) to each other as well.


I decided to make parent - child structure, not because its the simpliest one, but because I can show You usage of a service to comunicate between 2 component.

Getting data from jsons also can be done in more than just one way. I decided to config ts so json can be readable for angular by simple importing it into a component.

In my architecture we get data from json in app.component (In big project, this shouldn't happened this way) and we pass that data (after sorting) to main component. In main component 3 things happening:

  1) Subscription to observe the changes of changes in 'subject' which is used to view change between child and parent.
  2) Going thru all objects in primary.json and secondary.json and comparing if the strings are the same (whole object is converted into string for that comparition). If they are then there is an update of object to add to it new variable.
  3) Function showAllData with parameter index that triggers on click on a <div class="tournament--data-list">. This function change the view and set the value of 'singleData' that is inputed into Detailed component.
  
Detailed component simple gets data from singleData and display all values of it as a value of inputs. Data is formated in a way that input type="datetime-local" can read. Also on that view we got a button with text: 'Go back to the list' this button send a new value of 'subject' so the view can go back to it previous state.
Also there is one more thing going on here. If the 'singleData' contains a 'same' attribute it display an information that this fixture got a match in secondary.json
  

