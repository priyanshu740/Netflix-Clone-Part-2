import React from 'react'
import Home from './Components/Home'
import Register from './Components/Register'
import Video from './Components/Video'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './Styles/App.css'


function App() {
  const user = true
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            {user ? <Home /> : <Redirect to="/register" />}
          </Route>
          <Route exact path='/register'>
            {!user ? <Register /> : <Redirect to="/Home" />}
          </Route>
          {
            user && (
              <>
                <Route exact path='/video'>
                  <Video />
                </Route>
                <Route exact path='/movies'>
                  <Home type="movies" />
                </Route>
                <Route exact path='/series'>
                  <Home type="series" />
                </Route>
              </>
            )
          }
        </Switch>
      </Router>
    </div>
  )
}

export default App
