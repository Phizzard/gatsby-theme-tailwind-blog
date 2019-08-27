import React from 'react'
import styled from '@emotion/styled'

/* globals tw */

const Button = ({children, ...attrs}) => {
  return(
    <StyledButton {...attrs}>{children}</StyledButton>
  )
}

const StyledButton = styled.button`${tw`font-sans no-underline border-none rounded bg-blue text-white py-2 px-4`}`

export default Button