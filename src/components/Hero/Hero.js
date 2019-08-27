import React from 'react'
import styled from '@emotion/styled'
import { Heading } from "gatsby-theme-tailwind-blog/src/components/Heading";
import { BioCard } from "gatsby-theme-tailwind-blog/src/components/BioCard";
/* globals tw */

const Hero = ({title, name, subTitle, content}) => {
  return(
    <HeroContainer>
      <HeroHeading>{title}</HeroHeading>
      <HeroBioCard heading={name} subHeading={subTitle} content={content} />
    </HeroContainer>
  )
}

const HeroContainer = styled.div`${tw`bg-blue h-screen flex flex-wrap justify-center items-center text-lg md:text-2xl`}`
const HeroHeading = styled(Heading)`${tw`m-0 w-full text-white py-4 px-6 md:px-12 text-center`}`
const HeroBioCard = styled(BioCard)`${tw`mx-12`}`

export default Hero