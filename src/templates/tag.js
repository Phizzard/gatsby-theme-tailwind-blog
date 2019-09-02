import React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { PostCard } from '../components/PostCard'
import { Hero } from '../components/Hero'
import { Heading } from '../components/Heading'
/* global tw */

const TagTemplate = ({ data, pageContext }) => {
  const { allBlogPost: {edges} } = data;
  const {tag, basePath} = pageContext

  return (
    <Layout Header={Hero} title={tag} subTitle="Author Title" content="Bacon ipsum dolor amet t-bone corned beef prosciutto spare ribs pancetta ham hock picanha short ribs.">
    <PostsHeading>Latest Posts in {tag}</PostsHeading>
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

const StyledPostCard = styled(PostCard)`
  ${tw`mb-4`}
`;
const PostsHeading = styled(Heading)`
  ${tw`text-center`}
`;
export default TagTemplate;
