import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
  Text,
  Center,
  Avatar,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';

// import Logo from '../assets/images/logo.jpeg';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position={'fixed'} color={'gray.600'} top={'0'} w={'100%'} zIndex='20'>
      <Box bg={useColorModeValue('gray.100', 'gray.900')}>
        <Container maxW='container.xl'>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Box display={'flex'}>
                <Box>
                  <NextLink href={'/'} passHref>
                    <Box
                      fontSize={['xl']}
                      fontWeight={'bold'}
                      textDecoration={'none'}
                      _hover={{
                        textDecoration: 'none',
                      }}
                      px={2}
                      py={2}
                      mt={1}
                      rounded={'md'}
                    >
                      Infinity Devices Africa Ltd
                      <Center>
                        <Text fontSize={'xs'}>By your side</Text>
                      </Center>
                    </Box>
                  </NextLink>
                </Box>
              </Box>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}
              >
                {/* {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))} */}
                <NextLink href={'/about'}>
                  <Text
                    px={2}
                    py={1}
                    rounded={'md'}
                    _hover={{
                      textDecoration: 'none',
                      bg: useColorModeValue('gray.200', 'gray.700'),
                    }}
                  >
                    About
                  </Text>
                </NextLink>
                <NextLink href={'/catalog'}>
                  <Text
                    px={2}
                    py={1}
                    rounded={'md'}
                    _hover={{
                      textDecoration: 'none',
                      bg: useColorModeValue('gray.200', 'gray.700'),
                    }}
                  >
                    Catalog
                  </Text>
                </NextLink>
                <NextLink href={'/contact'}>
                  <Text
                    px={2}
                    py={1}
                    rounded={'md'}
                    _hover={{
                      textDecoration: 'none',
                      bg: useColorModeValue('gray.200', 'gray.700'),
                    }}
                  >
                    Contact us
                  </Text>
                </NextLink>

                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Affiliates
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <NextLink
                        target='_blank'
                        rel='noreferrer'
                        href={'https://fenghmedical.nl/'}
                      >
                        <Text px={2} py={1}>
                          Fengh Medical
                        </Text>
                      </NextLink>
                    </MenuItem>
                    <MenuItem>
                      <NextLink
                        target='_blank'
                        rel='noreferrer'
                        href={'http://www.fulbrightmed.com/'}
                      >
                        <Text px={2} py={1}>
                          Fulbright
                        </Text>
                      </NextLink>
                    </MenuItem>
                    <MenuItem>
                      <NextLink
                        target='_blank'
                        rel='noreferrer'
                        href={'http://en.hocermed.com/'}
                      >
                        <Text px={2} py={1}>
                          Hocer Med
                        </Text>
                      </NextLink>
                    </MenuItem>
                    <MenuItem>
                      <NextLink
                        href={'https://www.rbt.global/'}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <Text py={1}>Residual Barrier Technology</Text>
                      </NextLink>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar size={'sm'} src={'/images/logo.jpeg'} />
                </MenuButton>
              </Menu>
            </Flex>
          </Flex>
        </Container>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'}>
              <NextLink href={'/'}>
                <Box
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: 'gray.200',
                  }}
                >
                  <Center>Home</Center>
                </Box>
              </NextLink>
              <NextLink href={'/about'}>
                <Box
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: 'gray.200',
                  }}
                >
                  <Center>About</Center>
                </Box>
              </NextLink>
              <NextLink href={'/catalog'}>
                <Box
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: 'gray.200',
                  }}
                >
                  <Center>Catalog</Center>
                </Box>
              </NextLink>
              <NextLink href={'/contact'}>
                <Box
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: 'gray.200',
                  }}
                >
                  <Center>Contact us</Center>
                </Box>
              </NextLink>
              <Menu>
                <MenuButton
                  alignContent={'right'}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Affiliates
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <NextLink
                      target='_blank'
                      rel='noreferrer'
                      href={'https://fenghmedical.nl/'}
                    >
                      <Text px={2} py={1}>
                        Fengh Medical
                      </Text>
                    </NextLink>
                  </MenuItem>
                  <MenuItem>
                    <NextLink
                      target='_blank'
                      rel='noreferrer'
                      href={'http://www.fulbrightmed.com/'}
                    >
                      <Text
                        px={2}
                        py={1}
                        rounded={'md'}
                        _hover={{
                          textDecoration: 'none',
                          bg: 'gray.200',
                        }}
                      >
                        Fulbright
                      </Text>
                    </NextLink>
                  </MenuItem>
                  <MenuItem>
                    <NextLink
                      target='_blank'
                      rel='noreferrer'
                      href={'http://en.hocermed.com/'}
                    >
                      <Text
                        px={2}
                        py={1}
                        rounded={'md'}
                        _hover={{
                          textDecoration: 'none',
                          bg: 'gray.200',
                        }}
                      >
                        Hocer Med
                      </Text>
                    </NextLink>
                  </MenuItem>
                  <MenuItem>
                    <NextLink
                      target='_blank'
                      rel='noreferrer'
                      href={'https://www.rbt.global/'}
                    >
                      <Text
                        px={2}
                        py={1}
                        rounded={'md'}
                        _hover={{
                          textDecoration: 'none',
                          bg: 'gray.200',
                        }}
                      >
                        Residual Barrier Technology
                      </Text>
                    </NextLink>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}

export default Navbar;
