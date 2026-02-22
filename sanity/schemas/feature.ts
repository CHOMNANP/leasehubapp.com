export default {
  name: 'feature',
  title: 'Features',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Feature Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'Used in feature cards and previews',
    },
    {
      name: 'longDescription',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Detailed description for the feature page',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: 'Dollar Sign', value: 'dollar' },
          { title: 'Users', value: 'users' },
          { title: 'Wrench', value: 'wrench' },
          { title: 'Bar Chart', value: 'chart' },
          { title: 'Shield', value: 'shield' },
          { title: 'Zap', value: 'zap' },
          { title: 'Clock', value: 'clock' },
          { title: 'Smartphone', value: 'smartphone' },
        ],
      },
    },
    {
      name: 'screenshot',
      title: 'Screenshot',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
    },
    {
      name: 'benefits',
      title: 'Key Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List 3-4 key benefits (one per line)',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    },
    {
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
}
