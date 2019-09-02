import React from "react";
import styled from "@emotion/styled";
import { Layout } from "../components/Layout";
import { Heading } from "../components/Heading";
import { PostCard } from "../components/PostCard";
import { Hero } from "../components/Hero"
/* global tw */

const Posts = ({ pageContext }) => {
  const { posts, basePath } = pageContext;

  return (
    <Layout Header={Hero} title="Welcome to a Blog!" name="Author Name" subTitle="Author title" content="Bacon ipsum dolor amet t-bone corned beef prosciutto spare ribs pancetta ham hock picanha short ribs.">
      <div>
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
              basePath={basePath}
              excerpt={node.excerpt}
              timeToRead={node.timeToRead}
            />
          ))}
      </div>
    </Layout>
  );
};
const StyledPostCard = styled(PostCard)`
  ${tw`mb-4`}
`;
const PostsHeading = styled(Heading)`
  ${tw`text-center`}
`;

export default Posts;
