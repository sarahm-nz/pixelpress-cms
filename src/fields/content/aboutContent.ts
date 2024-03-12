import { Field } from 'payload/types';

export const aboutContent: Field = {
  name: 'aboutPageContent',
  label: 'Page content',
  type: 'group',
  admin: {
    condition: (data) => {
      return data.pageFormat === 'about-layout';
    },
  },
  fields: [
    {
      name: 'aboutUsTitle',
      type: 'text',
      required: false,
    },
    {
      name: 'aboutUsImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'aboutUsContent',
      type: 'richText',
      required: true,
    },
  ],
};
