import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import ArrowRight from 'react-icons/lib/ti/arrow-right-thick'
import styled from 'styled-components'

const Select = styled.select`
  width: 100%;
  max-width: 500px;
  height: 44px;
  font-size: 14px;
  border: 1px solid #f3f3f3;
  margin: 3% 0;
`

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({ selectValue: e.target.value })
  }
  render() {
    const { options, handleFormSubmit, feeling } = this.props
    const { selectValue } = this.state
    return (
      <div>
        <form onSubmit={e => handleFormSubmit(e, selectValue, feeling)}>
          <Select required value={selectValue} onChange={this.handleChange}>
            <option value="" disabled selected>
              Please select an emotion
            </option>
            {options.map((feeling, index) => {
              return <option key={index} value={feeling}>{feeling}</option>
            })}
          </Select>
          <br />
          <RaisedButton
            type="submit"
            label="Next Question"
            labelPosition="before"
            primary={true}
            icon={<ArrowRight />}
          />
        </form>
      </div>
    )
  }
}

export default Form
