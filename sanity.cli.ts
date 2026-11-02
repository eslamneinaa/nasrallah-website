import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dfj16ucm',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  },
  // `npm run sanity:deploy` publishes a standalone Studio at
  // https://nasrallah-trading.sanity.studio (optional — the Studio is also
  // embedded in the website at /studio).
  studioHost: 'nasrallah-trading',
})
