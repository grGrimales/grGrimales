import { AppBar, Toolbar, Button, Box, Link } from '@mui/material';
import NextLink from 'next/link';

export const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>

                <Box flex={1} />

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <NextLink href='/about' passHref>
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
                        <Link>
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
