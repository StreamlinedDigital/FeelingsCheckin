import React from 'react'
import LinearProgress from 'material-ui/LinearProgress'
import RaisedButton from 'material-ui/RaisedButton'
import ArrowRight from 'react-icons/lib/ti/arrow-right-thick'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

const SummaryTable = styled.span`
display: flex;
`

const SummaryItem = styled.span`
flex: 1

`

function Summary(props) {
  const {
    emotionally,
    physically,
    spiritually,
    handleDatabaseSubmission,
    redirect
  } = props
  return (
    <div>

      <h3>Emotionally: {emotionally}</h3>
      <h3>Physically: {physically}</h3>
      <h3>Spiritually: {spiritually}</h3>

      <RaisedButton
        onClick={e => handleDatabaseSubmission(e, 'summary')}
        type="submit"
        label="Submit"
        labelPosition="before"
        primary={true}
        icon={<ArrowRight />}
      />
      {redirect === 'summary' && <Redirect to={`/thank-you`} />}
    </div>
  )
}

export default Summary
