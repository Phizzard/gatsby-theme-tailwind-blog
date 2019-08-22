import React from 'react'
import {Link} from 'gatsby'
import {StyledTag} from './styles'

const Tag = ({children, ...attrs}) => {

  return(
    <StyledTag as={Link} to={`/blog/${children}`}>
      {children}
    </StyledTag>
  )
}

export default Tag