import React from 'react'
import Form from './Form'
import { Link, Redirect } from 'react-router-dom'
import LinearProgress from 'material-ui/LinearProgress'
import styled from 'styled-components'

const QuestionWrapper = styled.div`
  max-width: 650px;
  text-align: center;
  background: #f9f9f9;
  margin: 5% auto;
  padding: 5%;

`
const QuestionHeader = styled.h1`
  color: #5f5f5f
`

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnSubmit(e) {
    e.preventDefault()
    this.setState({
      // emotionally: this.refs.emotionally.value,
      redirect: true
    })
  }
  render() {
    const { redirect } = this.state
    const { nextRoute, progress } = this.props
    return (
      <QuestionWrapper>
        <LinearProgress mode="determinate" value={progress} />
        <QuestionHeader>{this.props.title}</QuestionHeader>

        <Form
          handleSubmit={this.handleOnSubmit}
          options={this.props.feelings}
        />
        {redirect && <Redirect to={`/${nextRoute}`} />}
      </QuestionWrapper>
    )
  }
}

export default Question
