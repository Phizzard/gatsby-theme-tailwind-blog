import React from 'react'
import styled from '@emotion/styled'
import { Heading } from "../Heading";
import { BioCard } from "../BioCard";
/* globals tw */

const Hero = ({title, name, subTitle, content}) => {
  return(
    <HeroContainer>
      <HeroHeading>{title}</HeroHeading>
      <HeroBioCard heading={name} subHeading={subTitle} content={content} />
    </HeroContainer>
  )
}

const HeroContainer = styled.div`${tw`bg-blue h-screen flex flex-wrap justify-center content-center text-lg sm:text-2xl`}`
const HeroHeading = styled(Heading)`${tw`m-0 w-full text-white pb-12 px-6 sm:px-12 text-center`}`
const HeroBioCard = styled(BioCard)`${tw`mx-4 sm:mx-12`}`

export default Hero