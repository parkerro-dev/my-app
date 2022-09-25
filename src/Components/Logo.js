import { Container, Image } from '@chakra-ui/react'
import React from 'react'

function Logo() {
  return (
    <Container maxW={150} >
            <Image src="/Images/Logo/Logo.png" alt="Logo"  fit="object-fit" />

    </Container>
  )
}

export default Logo