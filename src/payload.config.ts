import path from 'path';

import { payloadCloud } from '@payloadcms/plugin-cloud';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';

import users from './collections/users';
import { page } from './collections/page';
import { media } from './collections/media';
import { blogPost } from './collections/content/blogPost';

export default buildConfig({
  serverURL: process.env.PAYLOAD_SERVER_URL,
  cors: ['http://localhost:3000'],
  admin: {
    user: users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [users, page, media, blogPost],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
