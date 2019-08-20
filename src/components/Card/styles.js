import styled from '@emotion/styled'
import { Heading } from '../Heading'
/* global tw */

export const StyledCard = styled.div`${tw`shadow-md rounded`}`
export const Hero = styled.div`${tw`py-20 md:px-6 bg-blue rounded-tl rounded-tr relative`}`
export const Body = styled.div`${tw`p-12`}`
export const HeroHeading = styled(Heading)`${tw`text-white text-center sm:text-5xl`}`
export const HeroHeadingAccentContainer = styled.div`
  ${tw`w-full h-full`}
  position: absolute;
  top: 0;
  left: 0;
`
export const HeroHeadingAccent = styled(Heading)`
  ${tw`opacity-25 text-10xl my-0 text-white text-center h-full w-full flex items-center justify-center`}
`