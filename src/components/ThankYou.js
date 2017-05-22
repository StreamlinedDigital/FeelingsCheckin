import React from 'react'
import LinearProgress from 'material-ui/LinearProgress'
import styled from 'styled-components'

const QuestionWrapper = styled.div`
  max-width: 650px;
  text-align: center;
  background: #f9f9f9;
  margin: 5% auto;
  padding: 5%;
`

class ThankYou extends React.Component {
  render() {
    return (
      <QuestionWrapper>
        <LinearProgress mode="determinate" value={100} />
        <h1>Thank You!</h1>
      </QuestionWrapper>
    )
  }
}

export default ThankYou
