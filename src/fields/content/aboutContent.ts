import { Field } from 'payload/types';

export const aboutContent: Field = {
  name: 'aboutPageContent',
  label: 'Page Content',
  type: 'group',
  admin: {
    condition: (data) => {
      return data.pageFormat === 'about-layout';
    },
  },
  fields: [
    {
      name: 'aboutTitle',
      label: 'About Title',
      type: 'text',
      required: true,
    },
    {
      name: 'aboutContent',
      label: 'About Content',
      type: 'richText',
      required: true,
    },
    {
      name: 'aboutImage',
      label: 'About Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
};
