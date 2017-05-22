import React from 'react'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import ArrowRight from 'react-icons/lib/ti/arrow-right-thick'
import Coffee from 'react-icons/lib/ti/coffee'
import styled from 'styled-components'
import SignIn from './SignIn'

const QuestionWrapper = styled.div`
  max-width: 650px;
  text-align: center;
  background: #f9f9f9;
  margin: 5% auto;
  padding: 5%;

`

class Intro extends React.Component {
  render() {
    console.log(this.props)
    return (
      <QuestionWrapper>
        {this.props.user
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
              <SignIn />
            </div>}

      </QuestionWrapper>
    )
  }
}

export default Intro
