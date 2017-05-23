import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import Form from './Form'
import Question from './Question'

function Physically(props) {
  const feelings = ['tired', 'hungry', 'anxious']
  const { redirect, handleFormSubmit } = props
  return (
    <Question
      title="How do you feel physically?"
      feelings={feelings}
      nextRoute="spiritually"
      progress={33}
      redirect={redirect}
      feeling="physically"
      handleFormSubmit={handleFormSubmit}
    />
  )
}

export default Physically
