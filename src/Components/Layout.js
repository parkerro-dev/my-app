import React from 'react'
import NavBar from './NavBar'
import {Container} from '@chakra-ui/react'

function Layout({children}) {
  return (
    <>
    <NavBar/>
    <Container maxW="container.md" pt={20}>
        {children}
    </Container>
    </>
  )
}

export default Layout