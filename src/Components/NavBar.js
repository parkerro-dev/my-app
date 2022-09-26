import { Box, Container, Flex, Spacer, MenuItem,
    Menu,
    MenuList,
    IconButton,
    MenuButton, Link, DarkMode } from '@chakra-ui/react'
    import { NavLink } from 'react-router-dom';
    import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import Logo from './Logo'

function NavBar() {
  return (
    <Box
    as="nav"
    width="100%"
    position="fixed"
    bg="#1a1a1a"
    zIndex={3}
    sx={{backdropFilter: 'blur{5px}'}}>
        
        <Container
        maxW="container.md"
        display="flex"
        pr={2}
        pl={2}
        wrap="wrap"
        align="center"
        justify="space-between">
            <ColorModeSwitcher mt={5}/>
            <Spacer/>
            <Flex align="center" mr={5}>
                <Logo />
            </Flex>
            <Spacer/>
            <DarkMode>
            <Box ml={2} mt={5}>
                <Menu id="navbar-menu">
                <MenuButton
                    as={IconButton}
                    icon={<HamburgerIcon />}
                    variant="outline"
                    aria-label="Options"
                />
                <MenuList bg='black'>
                    <NavLink to="/">
                    <MenuItem as={Link} color="white">About</MenuItem>
                    </NavLink>
                    {/* <NavLink to="/projects">
                    <MenuItem as={Link}>Projects</MenuItem>
                    </NavLink>
                    <NavLink to="/College">
                    <MenuItem as={Link}>College</MenuItem>
                    </NavLink> */}
                </MenuList>
                </Menu>
          </Box>
          </DarkMode>
        </Container>
        
    </Box>
  )
}

export default NavBar