# Fork In The Road
We created a web application that utilizes user authentication for user creation and login. Once logged in, the user sees their dashboard which allows them to search for restaurants (using the Google API). They can enter in the dish, rating, and any notes they would like to add. When submitted, that data is sent to the database, linked to that user. It is also returned to a 'card' in their dashboard so they can view their history. It's an easy way for someone to save dishes from restaurants they don't necessarily visit very often, so they can remember a favorite dish.

See it in action:

[Fork In The Road][1]

[1]: https://afternoon-brushlands-74181.herokuapp.com/

Table of Contents
=================
<!--ts-->
  * [Table of Contents](#table-of-contents)
  * [Philosophy](#philosophy)
  * [Struggles](#struggles)
  * [Ideas for Improvement](#ideas-for-improvement)
  * [Collaborators](#collaborators)
<!--te-->

  Philosophy
  ==========
  The concept is simple:
  * A new user creates an account, a current user logs in. Both utilize Passport.js for authentication, and all user data is stored in the database.
  * The user is routed to their dashboard with an input field that uses Google Places API for autocomplete.
  * They can enter in a restaurant, dish, rating, and notes for that dish. All data is saved in separate table and tied to that users ID.
  * This data is saved in a 'card' and displayed in the DOM below. This data will remain in their dashboard until deletion.

  Struggles
  =========
  Some of the challenges we encountered:
  * getting Passport.js authentication working properly
  * setting up the database tables correctly
  * figuring out how to link the restaurant/dish to one user in the database
  * getting the routes to POST and GET the data we need
  * utilizing Handlebars to display the data in the DOM

  Ideas for Improvement
  =====================
  Some of the features we'd like to add:
  * integrate social media sign in and link to accounts
  * allow user to add their profile image
  * ability to edit their current restaurant cards
  * ability to add multiple dishes to the same restaurant in different sessions

  Collaborators
  =============
  [Angeline Slayton][2]
  [Rachel Punches][3]
  [Zack Muenz][4]
  [Lance Schmittling][5]

  [2]: https://github.com/VintageVoodoo13
  [3]: https://github.com/rpunches
  [4]: https://github.com/zmuenz
  [5]: https://github.com/lschmittling