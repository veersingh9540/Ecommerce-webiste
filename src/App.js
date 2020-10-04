import React,{useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home"
import Checkout from "./Checkout"
import Login from './Login'
import {useStateValue} from './StateProvider';
import {db,auth} from './Firebase'
function App() {
  const [{basket},dispatch] = useStateValue();
  
  //useEffect <<<<Powerful
  //piece of code which runs based on a conditon 
  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((authuser) => {
      if(authuser){
        // user is logged in 
        dispatch({
          type: 'SET USER',
          user: authuser,
        });
      }else{
        //the user is logged out
        dispatch({
          type: 'SET USER',
          user: null,
        });
      }
      
    })
    return () => {
      //Any cleanup operations
      unsubscribe();
    }
  }, [basket])

  return (
    <Router>
    <div className="App">
     <Switch>
       <Route path="/checkout">
         <Header/>
        <Checkout/>
         </Route>
         <Route path="/login">
          <Login/>
         </Route>
         <Route path="/">
           <Header />
           <Home/>
         </Route>
        
       
       </Switch>
    </div>
    </Router>
  );
}

export default App;
