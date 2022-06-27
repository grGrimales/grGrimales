import React from 'react'
import { Layout } from '../components/layout/Layout';
import { Typography } from '@mui/material';

function cursos() {
  return (
    <Layout
    title='Cursos'
    pageDescription='Cursos realizados por Grediana Rojas'
  >
    <Typography variant='h1' component='h1'>Cursos</Typography>

  </Layout>
  )
}

export default cursos