import React from 'react'
import tw from 'tailwind.macro'

const Text = ({children, ...attrs}) => {
  return(
    <StyledText {...attrs}>{children}</StyledText>
  )
}

const StyledText = tw.p`font-sans`

export default Text