import { Field } from 'payload/types';

export const lastChangedBy: Field = {
  name: 'lastChangedBy',
  type: 'relationship',
  relationTo: 'users',
  access: {
    read: () => true,
    create: () => false,
    update: () => false,
  },
  // defaultValues can use functions to return data to populate the create form and also when making POST requests the server will use the value or function to fill in any undefined fields before validation occurs
  defaultValue: ({ user }) => user.id,
  admin: {
    position: 'sidebar',
  },
};
