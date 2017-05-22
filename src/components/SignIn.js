import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import UserIcon from 'react-icons/lib/ti/user'
import { auth, googleAuthProvider } from '../firebase'

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">

        <RaisedButton
          type="submit"
          label="Sign In"
          onClick={() => auth.signInWithPopup(googleAuthProvider)}
          labelPosition="before"
          primary={true}
          icon={<UserIcon />}
        />

      </div>
    )
  }
}

export default SignIn
