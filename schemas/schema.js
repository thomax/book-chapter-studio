import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import article from './article'
import blockContent from './blockContent'
import book from './book'
import chapter from './chapter'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    article,
    blockContent,
    book,
    chapter,
  ])
})
