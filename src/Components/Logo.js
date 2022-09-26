import { Container, Image } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Logo() {
  return (
    <NavLink to='/'>
    <Container maxW={150} >
            <Image src="/Images/Logo/Logo.png" alt="Logo"  fit="object-fit" />

    </Container>
    </NavLink>
  )
}

export default Logo