import React from "react";
import styled from '@emotion/styled'
import {Link} from 'gatsby'
import { Card } from "./../Card";
import {Tag} from '../Tag'
import { Heading } from "./../Heading";
import { Text, SmallText } from "../Text";
import { Button } from '../Button'
/* globals tw */

const PostCard = ({ title, excerpt, timeToRead, date, tags, link, ...props }) => {
  return (
    <Card {...props} >
      <PostCardTitle as="h2"><PostCardLink to={link}>{title}</PostCardLink></PostCardTitle>
      <Text>{excerpt}</Text>
      <PostCardButton as={Link} to={link}>View Post</PostCardButton>
      <SmallText>
        {date} -{" "}
        {Array.from(String(timeToRead), minute => (
          <Emoji key={minute} role="img" aria-label="coffee emoji">
            ☕
          </Emoji>
        ))}{" "}
        {timeToRead} min to read
      </SmallText>
      {tags && tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
    </Card>
  );
};

const PostCardButton = styled(Button)`${tw`w-full`}`
const PostCardTitle = styled(Heading)`
  ${tw`mt-0 mb-2`}
`;
const PostCardLink = styled(Link)`
  ${tw`no-underline text-black`}
`;
const Emoji = styled.span`
  ${tw`text-lg`}
`;

export default PostCard;
