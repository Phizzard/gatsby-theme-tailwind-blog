import React from 'react'
import styled from '@emotion/styled'
import {Heading} from '../Heading'

/* global tw */

const Card = ({children, heroHeading, ...attrs}) => {
  return(
    <StyledCard {...attrs}>
      {heroHeading && (
        <Hero>
          <HeroHeadingAccentContainer>
          <HeroHeadingAccent>{heroHeading.charAt(0)}</HeroHeadingAccent>
          </HeroHeadingAccentContainer>
          <HeroHeading>{heroHeading}</HeroHeading>
        </Hero>
      )}
      <Body>
        {children}
      </Body>
    </StyledCard>
  )
};

const StyledCard = tw.div`shadow-md rounded`
const Hero = tw.div`py-20 md:px-6 bg-blue rounded-tl rounded-tr relative`
const Body = tw.div`p-12`
const HeroHeading = styled(Heading)`${tw`text-white text-center sm:text-5xl`}`
const HeroHeadingAccentContainer = tw.div`
  w-full h-full
  position: absolute;
  top: 0;
  left: 0;
`
const HeroHeadingAccent = styled(Heading)`${tw`opacity-25 text-10xl my-0 text-white text-center h-full w-full flex items-center justify-center`}`

export default Card