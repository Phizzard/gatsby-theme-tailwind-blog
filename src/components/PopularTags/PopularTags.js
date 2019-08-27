import React, {useState} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
//import styled from '@emotion/styled'

import {Tag} from '../Tag'
import {Button} from '../Button'

const PopularTags = () => {
  const [displayTags, setDisplayTags] = useState(false)
  const {allBlogPost: {distinct}} = useStaticQuery(graphql`
    query PopularTags{
      allBlogPost {
        distinct(field: tags)
      }
    }
  `)

  return (
    <div>
      {displayTags ? (
        distinct && distinct.length && distinct.map(tag => <Tag key={tag}>{tag}</Tag>)
      ) : (
        <Button onClick={() => setDisplayTags(true)}>Browse Tags</Button>
      )}
    </div>
  )
}
export default PopularTags