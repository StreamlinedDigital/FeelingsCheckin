import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import Form from './Form'
import Question from './Question'

class Physically extends React.Component {
  render() {
    const feelings = ['tired', 'hungry', 'anxious']
    return (
      <Question
        title="How do you feel physically?"
        feelings={feelings}
        nextRoute="spiritually"
        progress={33}
      />
    )
  }
}

export default Physically
