import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import {useStaticQuery, graphql} from 'gatsby'

import {Heading, SubHeading} from '../Heading'
/* globals tw */

const Avatar = ({heading, subHeading}) => {
  const avatarSrc = useStaticQuery(graphql`
  query MyQuery {
    file(name: {eq: "avatar"}) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  return(
    <StyledAvatar>
      <AvatarImg fluid={avatarSrc.file.childImageSharp.fluid} alt="" />
      <AvatarHeadingContainer>
        <AvatarHeading as='h3'>{heading}</AvatarHeading>
        <AvatarSubHeading as='h4'>{subHeading}</AvatarSubHeading>
      </AvatarHeadingContainer>
    </StyledAvatar>
  )
}

const StyledAvatar = styled.div`${tw`flex flex-row`}`
const AvatarHeadingContainer = styled.div`${tw`flex flex-col justify-center`}`
const AvatarImg = styled(Img)`${tw`rounded-full w-16`}`
const AvatarHeading = styled(Heading)`${tw`pl-4 m-0 font-semibold`}`
const AvatarSubHeading = styled(SubHeading)`${tw`pl-4 mt-1 mb-0`}`

export default Avatar