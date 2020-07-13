import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about"
      category="Misc"
      date="30 de julho de 2020"
      timeToRead="5"
      title="Titulo"
      description="Descrição do post"
    />
  </Layout>
);

export default IndexPage;
