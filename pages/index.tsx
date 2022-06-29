import { CardActionArea, CardMedia, Divider, Card, Grid, Typography, CardContent, Hidden } from '@mui/material'
import type { NextPage } from 'next'
import Image from 'next/image'
import { Layout } from '../components/layout/Layout'




const Home: NextPage = () => (


  <>
    <Layout title={'Grediana Rojas - home'} pageDescription={'Portafolio desarrolladora front-end'}>

      <CardActionArea>
        <Typography variant='h1' component='h1'>Hola, soy Grediana Rojas,</Typography>
        <Typography variant='h3' component='h3'> Desarrolladora Front-End</Typography>

        <CardMedia image='/images/prueba3.png'
          component='img'
          sx={{ borderRadius: '5px' }}
        />
      </CardActionArea>

      <Divider />


    </Layout>



  </>
)

export default Home
