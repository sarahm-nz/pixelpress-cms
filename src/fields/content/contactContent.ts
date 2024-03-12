import { Field } from 'payload/types';

export const contactContent: Field = {
  name: 'contactPageContent',
  label: 'Page content',
  type: 'group',
  admin: {
    condition: (data) => {
      return data.pageFormat === 'contact-layout';
    },
  },
  fields: [
    {
      name: 'contactTitle',
      type: 'text',
      required: false,
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'contactAddress',
      type: 'richText',
      required: true,
    },
    {
      name: 'contactMobile',
      type: 'text',
      required: true,
    },
    {
      name: 'contactEmail',
      type: 'text',
      required: true,
    },
  ],
};
