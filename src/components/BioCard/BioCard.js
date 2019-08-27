import React from 'react'

import {Avatar} from '../Avatar'
import {Card} from '../Card'
import {Text} from '../Text'

const BioCard = ({heading, subHeading, content, ...attrs}) => {
  return(
    <Card {...attrs} >
      <Avatar heading={heading} subHeading={subHeading} />
      <Text>{content}</Text>
    </Card>
  )
}

export default BioCard