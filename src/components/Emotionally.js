import React from 'react'
import Form from './Form'
import Question from './Question'

class Emotionally extends React.Component {
  render() {
    const feelings = ['Frustrated', 'Happy', 'Anxious']
    return (
      <Question
        title="How do you feel emotionally?"
        feelings={feelings}
        nextRoute="physically"
        progress={0}
      />
    )
  }
}

export default Emotionally
