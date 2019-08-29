import React from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { Heading } from "../Heading";
import { BioCard } from "../BioCard";
/* globals tw */

const Hero = ({ title, name, subTitle, content }) => {
  const brandGraySrc = useStaticQuery(graphql`
    {
      file(name: { eq: "navbrandlogo" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400, grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <HeroContainer>
      <HeroImage fluid={brandGraySrc.file.childImageSharp.fluid} alt="" />
      <HeroHeading>{title}</HeroHeading>
      {name && <HeroBioCard heading={name} subHeading={subTitle} content={content} />}
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  ${tw`bg-blue-dark h-screen-90 flex flex-wrap justify-center content-center text-lg sm:text-2xl`}
`;
const HeroHeading = styled(Heading)`
  ${tw`m-0 w-full text-white pb-12 px-6 sm:px-12 text-center`}
  z-index: 1;
`;
const HeroBioCard = styled(BioCard)`
  ${tw`mx-4 sm:mx-12`}
  z-index: 1;
`;
const HeroImage = styled(Image)`
  ${tw`h-48 w-48 mx-auto opacity-25`}
  position: absolute;
  margin-bottom: -8rem;
  z-index: 0;
`;

export default Hero;
