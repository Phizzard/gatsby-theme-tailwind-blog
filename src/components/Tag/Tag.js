import React from 'react'
import {Link} from 'gatsby'
import {StyledTag} from './styles'

const Tag = ({children, link, ...attrs}) => {

  return(
    <StyledTag as={Link} to={link}>
      {children}
    </StyledTag>
  )
}

export default Tag