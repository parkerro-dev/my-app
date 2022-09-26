import React from 'react'
import NavBar from './NavBar'
import {Container} from '@chakra-ui/react'
import Footer from './Footer'

function Layout({children}) {
  return (
    <>
    <NavBar/>
    <Container maxW="container.md" pt={20}>
        {children}
    </Container>
    <Footer/>
    </>
  )
}

export default Layout