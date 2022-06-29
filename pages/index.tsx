import { Typography, Divider, Box } from '@mui/material';
import type { NextPage } from 'next'
import { Layout } from '../components/layout/Layout'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Home: NextPage = () => (
  <>
    <Layout title={'Grediana Rojas - home'} pageDescription={'Portafolio desarrolladora front-end'}>


      <Carousel
        autoPlay
        infiniteLoop
        showStatus= {false}
        interval={7000}
        showArrows={false}
        
      >

        <Box mt={20} ml={5} mb={10} >
          <Typography variant='h1' component='h1'  >Hola, soy Grediana Rojas.</Typography>
          <Typography mt={2} mb={6} variant='h3' component='h3'> Desarrolladora Front-End.</Typography>
          <Divider />

        </Box>

        <Box mt={20} ml={5} mb={10} >
          <Typography variant='h1' component='h1'  >Hola, soy Grediana Rojas.</Typography>
          <Typography mt={2} mb={6} variant='h3' component='h3'> Desarrolladora Front-End.</Typography>
          <Divider />

        </Box>


      </Carousel>

    </Layout>
  </>
)

export default Home;
