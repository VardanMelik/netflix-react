import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import Profile from './components/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect ( () => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // Logged in
        console.log('User logged in: ',userAuth)
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
        }))

      } else {
        // Logged out
        dispatch(logout);
      }
    });

    return unsubscribe;
  }, [])

  return (
    // BEM
    <div className="app">
      <Router>
        {!user ? (
          <Login/>
        ) : (
          <Switch>
            <Route path='/profile'>
              <Profile/>
            </Route>
            
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
