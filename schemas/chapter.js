export default     {
  title: 'Chapter',
  name: 'chapter',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Chapter Content',
      name: 'chapterContent',
      type: 'array',
      of: [{type: 'chapter'}, {type: 'reference', to: {type: 'article'}}]
    }
  ]
}