import Layout from '@/components/layout/Layout'
import React, { FC } from 'react'
import Catalog from './catalog/Catalog'
import Discover from './discover/Discover'
import { IHome } from './home.interface'

const Home: FC = () => {
  return (
    <Layout title='Rutube 2.0 | Video Hosting'>
      <Discover />
      <Catalog />
    </Layout>
  )
}

export default Home