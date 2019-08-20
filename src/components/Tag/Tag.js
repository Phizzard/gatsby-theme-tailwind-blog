import React from 'react'
import {StyledTag} from './styles'

const Tag = ({children, ...attrs}) => {

  return(
    <StyledTag>
      {children}
    </StyledTag>
  )
}

export default Tag