import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
injectTapEventPlugin()
// http://stackoverflow.com/a/34015469/988941

ReactDOM.render(
  <App updateFeeling={this.updateFeeling} />,
  document.getElementById('root')
)
registerServiceWorker()
