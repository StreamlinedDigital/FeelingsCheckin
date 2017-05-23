import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import Form from './Form'
import Question from './Question'

function Spiritually(props) {
  const feelings = ['doubtful', 'filled', 'hurt']
  const { redirect, handleFormSubmit } = props
  return (
    <Question
      title="How do you feel spiritually?"
      feelings={feelings}
      nextRoute="summary"
      progress={66}
      redirect={redirect}
      feeling="spiritually"
      handleFormSubmit={handleFormSubmit}
    />
  )
}

export default Spiritually
