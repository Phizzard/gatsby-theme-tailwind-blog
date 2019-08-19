import React from 'react'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const Heading = ({children, ...attrs}) => {
  return(
    <StyledHeading {...attrs}>{children}</StyledHeading>
)
}

const StyledHeading = tw.h1`font-sans`

export default Heading;
