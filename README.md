**This is a front-end clone of the Netflix app built using React.**

The header bar has a logo, sign in / sign out option.
If the user is not registered, we display a register form to enter name, email, password and create an account after proper validation of the input fields.
On successful login, the user is navigated to the /browse page where there is a list of movies based on different genres and popularity shown in the form of a carousel while the trailer of one of the popular movies being played in the background.

The GPT search button takes us to the Search page, where based on the search query, a request is made to the openAI API to fetch the names of movies and then another API request is made to the TMDB API to get movie details.

**What I learned:**
