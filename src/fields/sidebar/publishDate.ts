import { Field } from 'payload/types';

export const publishDate: Field = {
  name: 'publishDate',
  type: 'date',
  access: {
    read: () => true,
    create: () => false,
    update: () => false,
  },
  admin: {
    position: 'sidebar',
    description: 'Posts will not be public until this date',
  },
  defaultValue: () => new Date(),
};
