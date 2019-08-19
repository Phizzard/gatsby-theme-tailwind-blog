import React from 'react'
import styled from '@emotion/styled'

import {Avatar} from '../Avatar'
import {Card} from '../Card'
import {Heading} from '../Heading'
import {Text} from '../Text'
import tw from 'tailwind.macro'

const BioCard = ({heading, subHeading, content, ...attrs}) => {
  return(
    <Card {...attrs} >
      <Avatar heading={heading} subHeading={subHeading} />
      <Text>{content}</Text>
    </Card>
  )
}

export default BioCard