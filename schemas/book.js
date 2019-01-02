export default {
  title: 'Book',
  name: 'book',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string'
    },
    {
      title: 'Chapters',
      name: 'chapters',
      type: 'array',
      of: [{type: 'chapter'}]
    }
  ]
}