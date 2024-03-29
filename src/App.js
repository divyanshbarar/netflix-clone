import React, { useEffect } from 'react';
import './App.css';

import HomeScreen from './component/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Login from './component/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './component/Profile';


function App() {
  const user=useSelector(selectUser)
const dispatch = useDispatch()

  useEffect(() => {

   const unsubscribe= auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        //logged in
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }))
      }
      else{
        //logged out
        dispatch(logout())

      }
    })
    return unsubscribe;

  }, [dispatch])



  return (
    <div className="App">
   
     
      <Router>
    {!user? (
      <Login/>
    )
  :(

    <Switch>
        
           <Route path="/profile">
<Profile/>
           </Route>
    <Route exact path="/">
    <HomeScreen/>
    </Route>
  </Switch>
  )
  }
        
  
    
    </Router>
      
    </div>
  );
}

export default App;
