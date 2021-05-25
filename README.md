<img src="https://media-exp1.licdn.com/dms/image/C4E22AQHoqGcQ3JyF8g/feedshare-shrink_1280/0/1620597633216?e=1624492800&v=beta&t=MW8ilE-3yxN02btyNUJl7mKtTnPS0agTMfzL9gX1AQ4" alt="" />

<img src="https://media-exp1.licdn.com/dms/image/C4E22AQGo5zYn2Y25_Q/feedshare-shrink_800/0/1620597633094?e=1624492800&v=beta&t=ECw11hoMKXarzSKqnjmpUau3WrmqnFnUIKzTl1XerSY" alt="" />

npx create-react-app --template redux

firebase
=>auth
=>hosting

for film information
we will be using tmdb API
()
App
--homescreen
----nav,banner,row

> > for showing black navbar on scroll- we use useState which is set to false, and then create a function which defines if(window.scroll>100) then setState to true.... and then useEffect(window.addEventListener("scroll",Function)) and use clean and remove listener

> > truncate, we build a function(string,no.) return string.length>n? string.subString(0,n-1)+"..."

> > fetch movie data from tmdb API -we create a file name axios for requesting server for baseURL
> > for differnet genre we create the request.js
> > --in banner we call the axios.get(request->netflixOriginals)>> giives the data of a movie >> now for the images url+backdrop_path

-one-Row await->data.... data.map(image)

//for authentication
=>setup firebase
--register function
|-> to take input we can useState and useRef
auth.createUserwithemail and password.then(authUser)
--signin function
auth.signInwithEmailandpassword
return authuser

//if signIN then automatically login
in useEffect auth.onAuthStateChanged

Redux is a global store
to avoid prop drooling
folder structure=> feature>userSlice// slices of onion in a store
-> changes=> name,initialState, reducers:

- login(state,action)=>state.user=action.payload
  -logout(state)=state.user=null

-->to store the value we use dispatch

--> to take out the value we use selectors

store->changes for reducer

//in app.js
->dispatch=useDispatch()
on changing the state of authentication dispatch(login-{user details as payload})
dispatch(logout())

//user=useSelector(selectUser) and if user then home otherwise login screen

//in profile user=useSelector
for details...
onClick SignOut auth.signOut

//for trailers...
->react youtube
->npm i movie trailer
youtube (videoId)
we send the name in the movie trailer it sends us a url in whuch we params the trailerurl part and send it to Youtube
