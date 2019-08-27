import React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { Heading } from "../components/Heading";
import { BioCard } from "../components/BioCard";
import { PostCard } from '../components/PostCard'
/* global tw */

const TagTemplate = ({ data, pageContext }) => {
  const { allBlogPost: {edges} } = data;
  const {tag, basePath} = pageContext

  return (
    <Layout>
      <div>
        <IntroBioCard
          heading="Full Name"
          subHeading="Shit Poster"
          content="Cause I'm in too deep and I'm trying to keep up above in my head, instead of going under"
        />
        <PostsHeading>{tag}</PostsHeading>
        {edges &&
          edges.map(({ node }) => (
            <StyledPostCard
              key={node.id}
              title={node.title}
              tags={node.tags}
              date={node.date}
              link={`${basePath}${node.slug}`}
              excerpt={node.excerpt}
              timeToRead={node.timeToRead}
            />
          ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PostsByTagQuery($tag: String!){
    allBlogPost(filter: {tags: {eq: $tag}}) {
      edges {
        node {
          id
          date
          tags
          timeToRead
          title
          slug
          date
          excerpt
        }
      }
    }
  }
`

const IntroBioCard = styled(BioCard)`
  ${tw`mt-4`}
`;
const PostsHeading = styled(Heading)`
  ${tw`text-center`}
`;
const StyledPostCard = styled(PostCard)`
  ${tw`mb-4`}
`;

export default TagTemplate;
