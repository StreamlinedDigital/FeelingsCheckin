import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Intro from './components/Intro'
import Emotionally from './components/Emotionally'
import Physically from './components/Physically'
import Spiritually from './components/Spiritually'
import Summary from './components/Summary'
import ThankYou from './components/ThankYou'
import { auth, database } from './firebase'
import pick from 'lodash/pick'

import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {
    font-family: 'Open Sans', sans-serif;
    src: url(''https://fonts.googleapis.com/css?family=Open+Sans'') format('opentype');
  }

  * {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300
  }

`

class App extends Component {
  constructor(props) {
    super(props)
    this.usersRef = null
    this.userRef = null
    this.state = {
      user: null
    }

    this.handleSignOut = this.handleSignOut.bind(this)
  }
  handleSignOut() {
    this.setState({
      user: null
    })
    auth.signOut()
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        const userData = user.displayName
        this.usersRef = database.ref('/users')
        this.userRef = this.usersRef.child(user.uid)
        this.userRef.once('value').then(snapshot => {
          if (snapshot.val()) return

          this.userRef.set(userData)
        })
        this.setState({ user: userData })
      }
    })
  }
  render() {
    const { user } = this.state

    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            <Header user={user} handleSignOut={this.handleSignOut} />
            <Switch>
              <Route
                exact
                path="/"
                component={props => <Intro user={user} {...props} />}
              />

              <Route path="/emotionally" component={Emotionally} />
              <Route path="/physically" component={Physically} />
              <Route path="/spiritually" component={Spiritually} />
              <Route path="/summary" component={Summary} />
              <Route path="/thank-you" component={ThankYou} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
