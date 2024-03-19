import { Field } from 'payload/types';

export const seoContent: Field = {
  label: 'SEO Content',
  type: 'collapsible',
  fields: [
    {
      name: 'seoTitle',
      label: 'SEO Title',
      type: 'text',
      required: true,
      admin: {
        description:
          'The title of the page that will be used for SEO purposes. It appears in the browser tab',
      },
    },
    {
      name: 'seoDescription',
      label: 'SEO Description',
      type: 'text',
      required: true,
    },
    {
      name: 'seoScript',
      label: 'SEO Script',
      type: 'text',
      required: false,
    },
    {
      name: 'isPreventSeo',
      label: 'Prevent SEO',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description:
          'Ticking this means the page will not appear in Google or other search engines results',
      },
    },
  ],
};
