import React from 'react'
import Form from './Form'
import { Link, Redirect } from 'react-router-dom'
import LinearProgress from 'material-ui/LinearProgress'

function Question(props) {
  const {
    nextRoute,
    progress,
    feeling,
    redirect,
    feelings,
    handleFormSubmit,
    title
  } = props

  return (
    <div>
      <LinearProgress mode="determinate" value={progress} />
      <h1>{title}</h1>
      <Form
        handleFormSubmit={handleFormSubmit}
        options={feelings}
        feeling={feeling}
      />
      {redirect == feeling && <Redirect to={`/${nextRoute}`} />}
    </div>
  )
}

export default Question
