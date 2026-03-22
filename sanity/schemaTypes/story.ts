import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'story',
  title: 'Campaign Story',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Story Title',
      type: 'string',
    }),
    defineField({
      name: 'storyText',
      title: 'Story Text Paragraphs',
      type: 'text',
      description: 'The main story of the family/campaign',
    }),
    defineField({
      name: 'storyImage',
      title: 'Story Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'appealVideoId',
      title: 'YouTube Video ID',
      type: 'string',
      description: 'Example: "WHiP-QGHMTI"',
    }),
  ],
})
