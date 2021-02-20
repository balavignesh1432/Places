import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/">
         <h1>React App</h1>
        </Route>
      </Switch>
    </Router> 
    </div>
  );
}

export default App;
