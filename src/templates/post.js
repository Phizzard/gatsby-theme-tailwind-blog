import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { BioCard } from "../components/BioCard";
import { Card } from "../components/Card";
import { Tag } from "../components/Tag";
import { Layout } from "../components/Layout";

/* globals tw */

const Post = ({ pageContext, data }) => {
  const { title, basePath } = pageContext;
  const {
    blogPost: { body, tags }
  } = data;

  return (
    <Layout>
      <div>
        <ContentCard heroHeading={title}>
          {tags && tags.map(tag => <Tag key={tag} link={`${basePath}${tag}`}>{tag}</Tag>)}
          <MDXRenderer>{body}</MDXRenderer>
        </ContentCard>
        <BioCard
          heading="Author Name"
          subHeading="Author Title"
          content="Bacon ipsum dolor amet t-bone corned beef prosciutto spare ribs pancetta ham hock picanha short ribs."
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PostBody($id: String!) {
    blogPost(id: { eq: $id }) {
      body
      tags
    }
  }
`;

const ContentCard = styled(Card)`
  ${tw`my-8`}
`;
export default Post;
