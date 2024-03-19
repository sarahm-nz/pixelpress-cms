import { Field } from 'payload/types';

export const pageFormat: Field = {
  name: 'pageFormat',
  label: 'Page Format',
  type: 'select',
  required: true,
  hasMany: false,
  options: [
    {
      label: 'About Layout',
      value: 'about-layout',
    },
    {
      label: 'Contact Layout',
      value: 'contact-layout',
    },
  ],
};
