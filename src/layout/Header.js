import React from 'react'
import styled from 'styled-components'
import Coffee from 'react-icons/lib/ti/coffee'
const P = styled.p`
  color: #b9b9b9;
  text-align: center;
  font-size: 15px;
  font-weight: 300;
`
class Header extends React.Component {
  render() {
    return (
      <div>
        <P>Feelings Check-In <Coffee /></P>
      </div>
    )
  }
}

export default Header
