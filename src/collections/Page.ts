import { CollectionConfig } from 'payload/types';
import { pageFormat } from '../fields/dropdowns/pageFormat';
import { aboutContent } from '../fields/content/aboutContent';
import { contactContent } from '../fields/content/contactContent';
import { seoContent } from '../fields/seo/seoContent';

export const page: CollectionConfig = {
  slug: 'pages',
  timestamps: true,
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  admin: {
    useAsTitle: 'title',
    preview: (doc) => {
      if (doc?.slug) {
        return `https://dev.environz.co.nz/${doc.slug}`;
      }
    },
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Main content',
          description: 'Main content for the page',
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'text',
              required: true,
            },
            {
              name: 'content',
              label: 'Content',
              type: 'richText',
              required: true,
            },
            // PAGE FORMAT DROPDOWN
            pageFormat,
            aboutContent,
            contactContent,
          ],
        },
        {
          label: 'SEO content',
          description:
            'content that will go towards helping the SEO of the page',
          fields: [seoContent],
        },
      ],
    },
  ],
};
