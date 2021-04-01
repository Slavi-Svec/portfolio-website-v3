import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About/About'


const App = () => {
  return (
      <>
      <Router>
        <Switch>
          <Route path='/' exact component={About} />
        </Switch>
      </Router>
    </>
  )
}

export default App;