import React from 'react'
import styled from '@emotion/styled';
/* global tw */

const Text = ({children, ...attrs}) => {
  return(
    <StyledText {...attrs}>{children}</StyledText>
  )
}

const StyledText = styled.p`${tw`font-sans`}`

export default Text