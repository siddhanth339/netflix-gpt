**This is a front-end clone of the Netflix app built using React.**

The header bar has a logo, sign in / sign out option.
If the user is not registered, we display a register form to enter name, email, password and create an account after proper validation of the input fields.
On successful login, the user is navigated to the /browse page where there is a list of movies based on different genres and popularity shown in the form of a carousel while the trailer of one of the popular movies being played in the background.

The GPT search button takes us to the Search page, where based on the search query, a request is made to the openAI API to fetch the names of movies and then another API request is made to the TMDB API to get movie details.

**What I learned:**

1. To style using _Tailwind CSS_
2. To use _React router_
3. To use _Redux_ store to create slices to store data
4. User authentication using Google Firebase
5. To use openAI’s API to get suggestions based on the prompt: "Act as a movie recommendation system and suggest movies for the query: " + userQuery
6. Form validation
7. To use _hooks_ like useState, useEffect, useDispatch, useSelector, useRef, useNavigate
8. To create custom hooks
9. _Conditional Rendering_
10. Fetch API responses
11. Promises
12. To write _JSX_ code
13. Optional Chaining
14. To use _Props_ and Fragments in components
15. Exception handling
16. Using Content Delivery Networks (CDN)
17. Component composition
