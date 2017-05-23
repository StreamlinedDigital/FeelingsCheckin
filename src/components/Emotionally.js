import React from 'react'
import Form from './Form'
import Question from './Question'

function Emotionally(props) {
  const feelings = ['Frustrated', 'Happy', 'Anxious']
  const { redirect, handleFormSubmit } = props
  return (
    <Question
      title="How do you feel emotionally?"
      feelings={feelings}
      nextRoute="physically"
      progress={0}
      redirect={redirect}
      feeling="emotionally"
      handleFormSubmit={handleFormSubmit}
    />
  )
}

export default Emotionally
