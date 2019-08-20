import React from 'react'
import { StyledCard, Hero, Body, HeroHeading, HeroHeadingAccent, HeroHeadingAccentContainer} from './styles'

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

export default Card