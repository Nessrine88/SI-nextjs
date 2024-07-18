

// client.js
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Replace with your dataset name
  apiVersion: '2021-11-16', // Use a specific version of the Sanity API
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: false,
  perspective: 'previewDrafts'
});

const builder = imageUrlBuilder(client);

export function urlFor(source:any) {
  return builder.image(source);
}

export default client;

