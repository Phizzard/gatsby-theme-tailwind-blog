import React from 'react'
import styled from '@emotion/styled'
import "./layout.css";
/* globals tw */

import {Seo} from '../Seo'
import {Header} from '../Header'

export default ({ children, ...props }) => (
  <StyledLayout>
    <Header />
    <Seo {...props} />
    {children}
  </StyledLayout>
)

const StyledLayout = styled.div`${tw`mx-auto px-2 md:px-12 max-w-xl`}`