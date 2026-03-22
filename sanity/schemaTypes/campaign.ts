import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'campaign',
  title: 'Campaign Details',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Campaign Title',
      type: 'string',
    }),
    defineField({
      name: 'amountRequired',
      title: 'Amount Required',
      type: 'number',
    }),
    defineField({
      name: 'amountRaised',
      title: 'Amount Raised',
      type: 'number',
    }),
    defineField({
      name: 'supportersCount',
      title: 'Number of Supporters',
      type: 'number',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Campaign Image (Hero)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'secondaryImage',
      title: 'Secondary Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
