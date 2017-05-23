import React from 'react'
import LinearProgress from 'material-ui/LinearProgress'

function ThankYou() {
  return (
    <div>
      <LinearProgress mode="determinate" value={100} />
      <h3>Thank you for filling out the Feelings Check-In</h3>
      <h4>You have been logged out of your account, see you tomorrow!</h4>
    </div>
  )
}

export default ThankYou
