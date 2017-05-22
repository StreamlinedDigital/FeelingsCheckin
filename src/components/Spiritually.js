import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import Form from './Form'
import Question from './Question'

class Spiritually extends React.Component {
  render() {
    const feelings = ['doubtful', 'filled', 'hurt']
    return (
      <Question
        title="How do you feel spiritually?"
        feelings={feelings}
        nextRoute="thank-you"
        progress={66}
      />
    )
  }
}

export default Spiritually
