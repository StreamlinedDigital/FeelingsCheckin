import React from 'react'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import ArrowRight from 'react-icons/lib/ti/arrow-right-thick'
import Coffee from 'react-icons/lib/ti/coffee'
import SignIn from './SignIn'
import { Redirect } from 'react-router-dom'

function Intro(props) {
  const { user, redirect, handleSignIn } = props
  return (
    <div>
      {user
        ? <div>
            <h2>Welcome back to Feelings Check-In <Coffee /></h2>
            <Link to="/emotionally">
              <RaisedButton
                type="submit"
                label="Check In"
                labelPosition="before"
                primary={true}
                icon={<ArrowRight />}
              />
            </Link>
          </div>
        : <div>
            <h4>Welcome to Feelings Check-In <Coffee /></h4>
            <h1>Please sign in to continue</h1>
            <SignIn signIn={handleSignIn} />
          </div>}
      {redirect == 'already-completed' &&
        <Redirect to={`/already-completed`} />}
    </div>
  )
}

export default Intro
