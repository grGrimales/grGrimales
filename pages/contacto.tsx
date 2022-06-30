import React from 'react'
import { Layout } from '../components/layout/Layout';
import { Box, Button, Grid, TextField, Typography } from "@mui/material"

const contacto = () => {
  return (
    <Layout
      title='Contacto'
      pageDescription='Ponte en contacto con Grediana Rojas'
    >
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" component='h5'>Linkedin</Typography>
        <Typography variant="h5" component='h5'>Github</Typography>
        <Typography variant="h5" component='h5'>Whatsapp</Typography>
      </Box>


      <Grid
        display='flex' justifyContent='center'
        container spacing={2} sx={{ mt: 4 }}>

        <Grid item xs={10} >
          <TextField label='Nombre' variant="filled" fullWidth />
        </Grid>
        <Grid item xs={10} >
          <TextField label='Email' variant="filled" fullWidth />
        </Grid>

        <Grid item xs={10} >
          <TextField label='Teléfono' variant="filled" fullWidth />
        </Grid>

        <Grid item xs={10} >
          <TextField

            label='Teléfono' variant="filled" fullWidth />
        </Grid>

        <Grid item xs={10} >
          <TextField
            label='Mensaje'
            variant="filled"
            fullWidth
            multiline
            rows={5}
            maxRows={10}

          />
        </Grid>


      </Grid>


      <Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
        <Button color="secondary" className="circular-btn" size="large">
          Enviar
        </Button>
      </Box>


    </Layout>
  )
}

export default contacto