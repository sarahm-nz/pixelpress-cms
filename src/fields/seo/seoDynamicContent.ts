import { Field } from 'payload/types';

export const seoDynamicContent: Field = {
  label: 'SEO Dynamic Content',
  type: 'collapsible',
  fields: [
    {
      name: 'seoDynamicTitle',
      label: 'SEO Title',
      type: 'text',
      required: true,
      admin: {
        description:
          'The title of the page that will be used for SEO purposes. It appears in the browser tab',
      },
    },
    {
      name: 'seoDynamicDescription',
      label: 'SEO Description',
      type: 'text',
      required: true,
    },
    {
      name: 'seoDynamicScript',
      label: 'SEO Script',
      type: 'text',
      required: false,
    },
  ],
};
