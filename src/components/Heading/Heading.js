import React from 'react'
import styled from '@emotion/styled'
/* global tw */

const Heading = ({children, ...attrs}) => {
  return(
    <StyledHeading {...attrs}>{children}</StyledHeading>
)
}

const StyledHeading = styled.h1`${tw`font-sans`}`;

export default Heading;
