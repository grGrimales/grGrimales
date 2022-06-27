import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Typography } from '@mui/material';

const about = () => {
  return (
    <>
      <Layout
        title='About Me'
        pageDescription='Información personal sobre Grediana Rojas'
      >
        <Typography variant='h1' component='h1'>About</Typography>

      </Layout>

    </>
  )
}

export default about