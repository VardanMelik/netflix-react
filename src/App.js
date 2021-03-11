import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { auth } from './firebase';

function App() {

  const user = null;

  useEffect ( () => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // Logged in
        console.log('User logged in: ',userAuth)
      } else {
        // Logged out
      }
    })
  }, [])

  return (
    // BEM
    <div className="app">
      <Router>
        {!user ? (
          <Login/>
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen/>
            </Route>
        </Switch>
        )}
        
      </Router>
    </div>
  );
}

export default App;
