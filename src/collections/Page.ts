import { aboutContent } from '../fields/content/aboutContent';
import { contactContent } from '../fields/content/contactContent';

export const Page = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  fields: [
    {
      types: 'tabs',
      tabs: [
        {
          label: 'Main content',
          description: 'Main content for the page based on the page layout',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Title',
              required: true,
            },
            {
              name: 'slug',
              type: 'text',
              label: 'Slug',
              required: true,
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Content',
              required: true,
            },
            // PAGE FORMAT DROPDOWN
            aboutContent,
            contactContent,
          ],
        },
      ],
    },
  ],
};
