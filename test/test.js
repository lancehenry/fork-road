// `npm install --save-dev nightmare` or `npm i -D nightmare`.

var Nightmare = require("nightmare");


new Nightmare({ show: true })
    // Visit login page
    .goto("https://afternoon-brushlands-74181.herokuapp.com/")
    //click Get started Button to login
    .click("a[href='/dashboard']")
    // Enter username.
    .type('input[name="username"]', "Test")
    // Enter password.
    .type('input[name="password"]', "asdfll")
    // Take a screenshot of the login form.
    .screenshot("login.png")
    // Click the sign up button. 
    .click('button[type="submit"]')
    .wait(5000)
    // Enter Restaurant
    .type('input[name="restaurantName"]', "Burger King")
    // Enter Dish
    .type('input[name="dishName"]', "Whopper")
    // Enter Rating
    .type('input[name="dishRating"]', "5")
    // Enter any notes
    .type('input[name="notes"]', "My favorite dish")
    // Click submit button
    .click(".btn")
    .wait(5000)
    // Take a screenshot and save it to the current directory.
    .screenshot("restaurant.png")
    // End test
    .end()
    // Execute commands
    .then(function () {
        console.log("Done!");
    })
    // Catch errors
    .catch(function (err) {
        console.log(err);
    });
