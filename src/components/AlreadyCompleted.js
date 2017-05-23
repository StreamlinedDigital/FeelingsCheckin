import React from 'react'
import LinearProgress from 'material-ui/LinearProgress'
import styled from 'styled-components'

function AlreadyCompleted(props) {
  const {
    emotionally,
    physically,
    spiritually,
    handleDatabaseSubmission,
    redirect
  } = props
  return (
    <div>
      <LinearProgress mode="determinate" value={100} />
      <h3>
        Looks like you have already filled out your check in for the day!
      </h3>
      <h4>You have been logged out of your account, see you tomorrow!</h4>
    </div>
  )
}

export default AlreadyCompleted
