import React, {useContext} from 'react'
import styled from '@emotion/styled'
import {ThemeContext} from '../../contexts/ThemeContext'

/* globals tw */

const Tag = ({children, ...attrs}) => {
  const theme = useContext(ThemeContext)

  return(
    <StyledTag theme={theme}>
      {children}
    </StyledTag>
  )
}
const StyledTag = styled.span`${tw`bg-blue text-white font-sans rounded-full px-2 py-1 mr-1 text-xs`}`

export default Tag