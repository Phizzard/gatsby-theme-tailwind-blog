import React from 'react'

import tw from 'tailwind.macro'

const Button = ({children, ...attrs}) => {
  return(
    <StyledButton {...attrs}>{children}</StyledButton>
  )
}

const StyledButton = tw.button`font-sans no-underline border-none rounded bg-blue-500 text-white py-2 px-4`

export default Button