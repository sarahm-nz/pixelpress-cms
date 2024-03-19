import { Field } from 'payload/types';

export const contactContent: Field = {
  name: 'contactPageContent',
  label: 'Page Content',
  type: 'group',
  admin: {
    condition: (data) => {
      return data.pageFormat === 'contact-layout';
    },
  },
  fields: [
    {
      name: 'contactTitle',
      label: 'Contact Title',
      type: 'text',
      required: true,
    },
    {
      name: 'contactContent',
      label: 'Contact Content',
      type: 'richText',
      required: true,
    },
    {
      name: 'contactImage',
      label: 'Contact Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
};
