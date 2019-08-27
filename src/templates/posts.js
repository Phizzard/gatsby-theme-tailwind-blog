import React from "react";
import styled from "@emotion/styled";
import { Layout } from "../components/Layout";
import { Heading } from "../components/Heading";
import { BioCard } from "../components/BioCard";
import { PostCard } from "../components/PostCard";
/* global tw */

const Posts = ({ pageContext }) => {
  const { posts, basePath } = pageContext;

  return (
    <Layout>
      <div>
        <IntroBioCard
          heading="Full Name"
          subHeading="Shit Poster"
          content="Cause I'm in too deep and I'm trying to keep up above in my head, instead of going under"
        />
        <PostsHeading>Latest Posts</PostsHeading>
        {posts &&
          posts.map(({ node }, index) => (
            <StyledPostCard
              key={node.id}
              featured={index === 0 ? true : false}
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
const IntroBioCard = styled(BioCard)`
  ${tw`mt-4`}
`;
const StyledPostCard = styled(PostCard)`
  ${tw`mb-4`}
`;
const PostsHeading = styled(Heading)`
  ${tw`text-center`}
`;

export default Posts;
