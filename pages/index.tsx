import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/layout/Layout'

const Home: NextPage = () => {
  return (
    <>
      <Layout title={'Grediana Rojas - home'} pageDescription={'Portafolio desarrolladora front-end'}>
        <Typography variant='h1' component='h1'>Grediana</Typography>

      </Layout>



    </>
  )
}

export default Home
