import styled from '@emotion/styled'
import { Heading } from '../Heading'
import tw from 'tailwind.macro'

export const StyledCard = tw.div`shadow-md rounded bg-white`
export const Hero = tw.div`py-20 md:px-6 bg-blue-500 rounded-tl rounded-tr relative`
export const Body = tw.div`p-6 md:p-12`
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