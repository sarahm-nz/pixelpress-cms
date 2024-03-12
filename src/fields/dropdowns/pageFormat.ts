import { Field } from 'payload/types';

export const pageFormat: Field = {
  name: 'pageFormat',
  label: 'Page Format',
  type: 'select',
  required: true,
  hasMany: false,
  defaultValue: 'standard',
  options: [
    {
      label: 'About',
      value: 'about-layout',
    },
    {
      label: 'Contact',
      value: 'contact-layout',
    },
  ],
};
