import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import UserIcon from 'react-icons/lib/ti/user'

function SignIn(props) {
  const { signIn } = props
  return (
    <div className="SignIn">
      <RaisedButton
        type="submit"
        label="Sign In"
        onClick={signIn}
        labelPosition="before"
        primary={true}
        icon={<UserIcon />}
      />
    </div>
  )
}

export default SignIn
