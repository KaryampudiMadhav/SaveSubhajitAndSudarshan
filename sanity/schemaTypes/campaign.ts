import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'campaign',
  title: 'Campaign Details',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Campaign Title', type: 'string' }),
    defineField({ name: 'amountRequired', title: 'Amount Required', type: 'number' }),
    defineField({ name: 'amountRaised', title: 'Amount Raised', type: 'number' }),
    defineField({ name: 'supportersCount', title: 'Number of Supporters', type: 'number' }),
    defineField({ name: 'mainImage', title: 'Hero Image 1', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'secondaryImage', title: 'Hero Image 2', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'progressImage', title: 'Progress Section Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'storyImage', title: 'Story Section Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'contributionsImage1', title: 'Contributions Image 1', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'contributionsImage2', title: 'Contributions Image 2', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'appealVideoUrl', title: 'Appeal Video URL 1', type: 'url' }),
    defineField({ name: 'secondVideoUrl', title: 'Video URL 2', type: 'url' }),
    defineField({ name: 'qrCodeImage', title: 'Payment QR Code Scanner', type: 'image', options: { hotspot: true } }),
  ],
})
