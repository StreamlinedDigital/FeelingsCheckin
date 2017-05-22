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
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Intro} />
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
