import React from 'react'
import styled from 'styled-components'
import Heart from 'react-icons/lib/ti/heart-outline'
const P = styled.p`
  color: #b9b9b9;
  text-align: center;
  font-size: 13px;
  a {
    font-weight: 400;
    &:visited {
      color: #b9b9b9;
    }
  }
`

class Footer extends React.Component {
  render() {
    return (
      <div>
        <P>
          Made with
          {' '}
          <Heart />
          {' '}
          by
          {' '}
          <a href="https://www.streamlinedstudio.com/">Streamlined Studio</a>
        </P>
      </div>
    )
  }
}

export default Footer
