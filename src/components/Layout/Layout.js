import React from 'react'
import styled from '@emotion/styled'
import "./layout.css";
import tw from 'tailwind.macro'

import {Header} from '../Header'

export default ({ children, ...props }) => (
  <StyledLayout>
    <Header {...props} />
    {children}
  </StyledLayout>
)

const StyledLayout = tw.div`mx-auto px-2 md:px-12 max-w-xl`