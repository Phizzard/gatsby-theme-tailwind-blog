import React from 'react'
import styled from '@emotion/styled'
import {Link} from 'gatsby'
import {Heading} from '../components/Heading'
import {Text} from '../components/Text'
import {BioCard} from '../components/BioCard'
import {Card} from '../components/Card'
import {Tag} from '../components/Tag'
import tw from 'tailwind.macro'
import {Layout} from '../components/Layout'

const Posts = ({pageContext}) => {
  const { posts } = pageContext

  return (
    <Layout>
      <IntroBioCard heading="Full Name" subHeading="Shit Poster" content="Cause I'm in too deep and I'm trying to keep up above in my head, instead of going under" />
      <PostsHeading>Latest Posts</PostsHeading>
      {posts && posts.map(({node}) => (
        <PostCardLink to={node.slug} key={node.id} >
        <PostCard >
          <PostCardTitle as="h2">{node.title}</PostCardTitle>
          {node.tags && node.tags.map(tag => <Tag>{tag}</Tag>)}
          <Text>{node.excerpt}</Text>
          <Text as="small">
            {node.date} - {Array.from(String(node.timeToRead), minute => <Emoji key={minute} role="img" aria-label="coffee emoji">☕</Emoji>)} {node.timeToRead} min to read
          </Text>
        </PostCard>
        </PostCardLink>
        
      ))}
    </Layout>
  )
}
const IntroBioCard = styled(BioCard)`${tw`mt-4`}`
const PostsHeading = styled(Heading)`${tw`text-center`}`
const PostCard = styled(Card)`${tw`mb-4`}`
const PostCardTitle = styled(Heading)`${tw`mt-0 mb-2`}`
const PostCardLink = styled(Link)`${tw`no-underline text-black`}`
const Emoji = tw.span`text-lg`

export default Posts