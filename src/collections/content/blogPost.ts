import { CollectionConfig } from 'payload/types';
import { lastChangedBy } from '../../fields/sidebar/lastChangedBy';
import { publishDate } from '../../fields/sidebar/publishDate';

export const blogPost: CollectionConfig = {
  slug: 'blog-posts',
  labels: {
    singular: 'Blog Post',
    plural: 'Blog Posts',
  },
  admin: {
    useAsTitle: 'blogTitle',
    group: 'Content',
    defaultColumns: ['blogTitle', 'blogContent', 'author'],
  },
  fields: [
    lastChangedBy,
    publishDate,
    {
      name: 'blogTitle',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'blogContent',
      label: 'Content',
      type: 'richText',
      required: true,
    },
    {
      name: 'author',
      label: 'Author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'backgroundImage',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
};
