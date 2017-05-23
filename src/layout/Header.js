import React from 'react'
import styled from 'styled-components'
import Coffee from 'react-icons/lib/ti/coffee'
import RaisedButton from 'material-ui/RaisedButton'

const P = styled.p`
  color: #b9b9b9;
  text-align: center;
  font-size: 15px;
  font-weight: 300;
  display: inline-block;
`

const Account = styled.div`
  display: inline-block;
  float: right;
  margin: 10px;
  P {
    font-size: 13px;
    margin-right: 10px;
  }
`
class Header extends React.Component {
  render() {
    const displayName = this.props.user
    const { handleSignOut } = this.props

    return (
      <div>
        <P>Feelings Check-In <Coffee /></P>
        {displayName
          ? <Account>
              <P>Hello, {displayName[0]}</P>
              <RaisedButton
                label="Sign Out"
                onClick={this.props.handleSignOut}
              />
            </Account>
          : ''}

      </div>
    )
  }
}

export default Header
