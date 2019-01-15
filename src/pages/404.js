import React from 'react'

import { Layout, SEO, Hero } from 'components'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Hero title="You hit a page that doesn&#39;t exist... the sadness." />
  </Layout>
)

export default NotFoundPage
