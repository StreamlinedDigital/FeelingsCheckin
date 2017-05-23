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
import AlreadyCompleted from './components/AlreadyCompleted'
import styled from 'styled-components'
import { auth, database, googleAuthProvider } from './firebase/index'
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

const QuestionWrapper = styled.div`
  max-width: 650px;
  text-align: center;
  background: #f9f9f9;
  margin: 5% auto;
  padding: 5%;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.usersRef = null
    this.userRef = null
    this.state = {
      user: null,
      redirect: ''
    }

    this.handleSignOut = this.handleSignOut.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleDatabaseSubmission = this.handleDatabaseSubmission.bind(this)
  }
  handleSignIn() {
    auth.signInWithPopup(googleAuthProvider)
  }
  handleSignOut() {
    this.setState({
      user: null
    })
    auth.signOut()
  }
  componentDidMount() {
    const self = this
    auth.onAuthStateChanged(user => {
      if (user) {
        database
          .ref('/users/' + user.uid + '/feelings')
          .once('value')
          .then(snapshot => {
            if (snapshot.val() !== null) {
              database
                .ref('/users/' + user.uid + '/feelings')
                .limitToLast(1)
                .once('value')
                .then(function(snapshot) {
                  const key = Object.keys(snapshot.val())[0]
                  const timestamp = snapshot.val()[key].timestamp
                  const postedDate = new Date(timestamp).toDateString()
                  const todaysDate = new Date().toDateString()
                  if (postedDate === todaysDate) {
                    self.setState({
                      redirect: 'already-completed'
                    })
                    self.handleSignOut()
                  }
                })
            }
          })
        const userData = [user.displayName, user.uid]
        this.usersRef = database.ref('/users')
        this.userRef = this.usersRef.child(user.uid)
        this.userRef.once('value').then(snapshot => {
          if (snapshot.val()) return
          this.userRef.set({ name: user.displayName })
        })
        this.setState({ user: userData })
      }
    })
  }
  handleFormSubmit(e, selectValue, feeling) {
    e.preventDefault()
    this.setState({
      [feeling]: selectValue,
      redirect: feeling
    })
  }
  handleDatabaseSubmission(e, redirect) {
    const user = this.state.user
    const feelingRef = database
      .ref('/users')
      .child(user[1])
      .child('feelings')
      .push({
        emotionally: this.state.emotionally,
        physically: this.state.physically,
        spiritually: this.state.spiritually,
        timestamp: Date.now()
      })

    this.setState({
      redirect: redirect
    })

    this.handleSignOut()
  }
  render() {
    const { user, redirect, emotionally, physically, spiritually } = this.state

    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            <Header user={user} handleSignOut={this.handleSignOut} />
            <QuestionWrapper>
              <Switch>
                <Route
                  exact
                  path="/"
                  component={props => (
                    <Intro
                      user={user}
                      redirect={redirect}
                      handleSignIn={this.handleSignIn}
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/emotionally"
                  component={props => (
                    <Emotionally
                      redirect={redirect}
                      handleFormSubmit={this.handleFormSubmit}
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/physically"
                  component={props => (
                    <Physically
                      redirect={redirect}
                      handleFormSubmit={this.handleFormSubmit}
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/spiritually"
                  component={props => (
                    <Spiritually
                      redirect={redirect}
                      handleFormSubmit={this.handleFormSubmit}
                      {...props}
                    />
                  )}
                />

                <Route
                  path="/summary"
                  component={props => (
                    <Summary
                      redirect={redirect}
                      emotionally={emotionally}
                      physically={physically}
                      spiritually={spiritually}
                      handleDatabaseSubmission={this.handleDatabaseSubmission}
                      {...props}
                    />
                  )}
                />
                <Route path="/thank-you" component={ThankYou} />
                <Route path="/already-completed" component={AlreadyCompleted} />

              </Switch>
            </QuestionWrapper>
            <Footer />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
