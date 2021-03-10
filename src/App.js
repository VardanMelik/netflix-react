import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {

  const user = null;
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
