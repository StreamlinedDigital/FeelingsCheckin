import React from 'react'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import ArrowRight from 'react-icons/lib/ti/arrow-right-thick'
import styled from 'styled-components'

const QuestionWrapper = styled.div`
  max-width: 650px;
  text-align: center;
  background: #f9f9f9;
  margin: 5% auto;
  padding: 5%;

`

class Intro extends React.Component {
  render() {
    return (
      <QuestionWrapper>
        <h1>Intro</h1>

        <Link to="/emotionally">
          <RaisedButton
            type="submit"
            label="Check In"
            labelPosition="before"
            primary={true}
            icon={<ArrowRight />}
          />
        </Link>
      </QuestionWrapper>
    )
  }
}

export default Intro
