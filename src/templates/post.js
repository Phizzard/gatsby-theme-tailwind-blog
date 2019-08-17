import React from 'react'
import {graphql} from 'gatsby'
import styled from '@emotion/styled'
import { MDXRenderer } from "gatsby-plugin-mdx"
import {BioCard} from '../components/BioCard'
import {Layout} from '../components/Layout'
import {Card} from '../components/Card'
import {Tag} from '../components/Tag'

/* globals tw */

const Post = ({pageContext, data}) => {
  const {title} = pageContext;
  const {blogPost: {body, tags}} = data;

  return(
    <Layout>
      <ContentCard heroHeading={title}>
        {tags && tags.map(tag => <Tag>{tag}</Tag>)}
        <MDXRenderer>{body}</MDXRenderer>
      </ContentCard>
      <BioCard heading="Full Name" subHeading="Shit Poster" content="Cause I'm in too deep and I'm trying to keep up above in my head, instead of going under" />
    </Layout>
  )
}

export const query = graphql`
  query PostBody($id: String!){
    blogPost(id: {eq: $id}) {
      body
      tags
    }
  }
`

const ContentCard =  styled(Card)`${tw`my-8`}`
export default Post