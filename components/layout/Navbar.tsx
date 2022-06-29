import { AppBar, Toolbar, Button, Box, Link, IconButton, CardActionArea, CardMedia } from '@mui/material';
import NextLink from 'next/link';


export const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>

                <NextLink href='/' passHref>
                    {/* llevar al apagina del producto */}
                    <Link>
                        <CardActionArea>
                            <CardMedia image='/images/logo.png'
                                component='img'
                                sx={{ borderRadius: '5px' }}
                            />
                        </CardActionArea>
                    </Link>
                </NextLink>

                <Box flex={1} />

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <NextLink href='/' passHref>
                        <Link>
                            <Button>About Me</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/proyectos' passHref>
                        <Link>
                            <Button>Proyectos</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/contacto' passHref>
                        <Link color="secondary">
                            <Button>Contacto</Button>
                        </Link>
                    </NextLink>


                    <NextLink href='/cursos' passHref>
                        <Link>
                            <Button>Cursos</Button>
                        </Link>
                    </NextLink>
                </Box>





            </Toolbar>
        </AppBar>
    )
}
