# Movies Saga Database

## Description

App that displays movie data from database. Allows user to click on a single movie and display details pertaining to it. Allows user to edit movie name and description. Allows user to add their own movies to database.

## TO DO

[x] Build sagas to communicate with movies.router.js

[x] Build reducers to store rows from database.

[x] Create card template for movie list display.

[x] Map movie data into card template. This will be Home/List page.

[x] Create ability to display an individual movie from list by clicking on movie poster.

- [x] Genre data should be displayed on this details page.
- [x] "Back to List" button should be displayed as well.

[x] Create ability to edit movie title and description. This will use Router to direct user to a new component page, rather than modifying the component directly.

- [x] Allow user to cancel changes or save changes.
- [x] Return back to display component after save or cancel.

[x] Style app using Material-UI

[ ] Add Route change animations

## Stretch Goals

- [x] Display the current values in the input (title) and textarea (description) on the Edit Page

- [ ] Display all genres on movie list page. Research [array_agg](https://stackoverflow.com/questions/43458174/how-to-save-and-return-javascript-object-with-subarray-in-normalized-sql) to make this possible.

- [x] Move sagas and reducers out of your `index.js` and into separate files (ideally in `src/redux/reducers` and `src/redux/sagas` folders).

- [x] Allow the user to refresh the details or edit page. The url for the details page would be something like `/details/1` for movie with id of `1`. Research [react router params](https://reacttraining.com/react-router/web/example/url-params).

- [ ] Allow the user to add a genre to a movie.

- [ ] Allow the user to remove a genre from a movie.

- [ ] Only display the top 10 movies, and allow the user to search for movie titles with a search bar on the home page (you can do this on the client side or the server side, server side is a bigger stretch, but good practice).

- [ ] Create an `Admin` page. Add a link from the `Home` page to the `Admin` page. The page should initially display a login form (an input for username and an input for password). When the user enters the correct username (`camera`) and password (`action`), the page should display a form to add genres to the database, and a list of all of the genres with an `x` to remove them from the database. Note: This isn't actually secure, but it's pretty fun, and really good practice.
