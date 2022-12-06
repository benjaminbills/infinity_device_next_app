import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Hide,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { GoLocation } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import Map from './Map';
import Link from 'next/link';
function Footer() {
  return (
    <Box bg={'#B0B0B0'} color={'white'} pt={'5'} pb={'5'} mt='auto' w='100%'>
      <Container maxW='container.xl'>
        <Stack flexDir={'column'}>
          <Box display={'flex'}>
            <Box display={'flex'}>
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
              <Text as={'h1'} fontSize='xl' ml={'2'} fontWeight={'bold'}>
                Infinity Devices Africa
              </Text>
            </Box>
            <Spacer />
            <Hide below='md'>
              <Box>
                <HStack>
                  <Box>
                    <Link href='/'>Home</Link>
                  </Box>
                  <Box>
                    <Link href='/about'>About</Link>
                  </Box>
                  <Box>
                    <Link href='/catalog'>Catalog</Link>
                  </Box>
                  <Box>
                    <Link href='/contact'>Contact us</Link>
                  </Box>
                </HStack>
              </Box>
            </Hide>
          </Box>

          <hr />
          <Box display={'flex'} flexDir={['column', 'column', 'row']}>
            <Box
              display={'flex'}
              flexDir='column'
              fontSize={'lg'}
              fontWeight={'bold'}
              justifyContent='space-between'
            >
              <Text mb={'2'}>
                <a
                  href='https://www.google.com/maps/place/Infinity+Devices+Africa+Ltd/@-1.2966088,36.8056231,18z/data=!4m5!3m4!1s0x182f113e393dfa65:0x4217a2f4dc4f0135!8m2!3d-1.2968061!4d36.8069371'
                  target={'_blank'}
                  rel='noreferrer'
                >
                  <Icon as={GoLocation} mr={'2'} /> Elgon Court D2, Ralph Bunche
                  Road, Upperhill
                </a>
              </Text>
              <Text mb={'2'}>
                <Icon as={FiPhoneCall} mr={'2'} />
                <a href='tel:0706731683'>0706731683</a>,
                <a href='tel:0734329563'>0734329563</a>
              </Text>

              <Text mb={'2'}>
                <a href='mailto:info@infinitydevices.co'>
                  <Icon as={MdOutlineEmail} mr={'2'} />
                  info@infinitydevices.co
                </a>
              </Text>

              <Text>
                <a
                  href={
                    'https://api.whatsapp.com/send?phone=2347036445198&text=I%20am%20interested%20in%20infinity%20devices%20product'
                  }
                  target='_blank'
                  rel='noreferrer'
                >
                  <Icon as={BsWhatsapp} mr={'2'} />
                  Click to send us a whatsapp message.
                </a>
              </Text>

              {/* <FormControl>
                <FormLabel fontSize={"xl"}>
                  Get notified when we add new products
                </FormLabel>
                <InputGroup
                  color={"white"}
                  w={["100%", "100%", "50%"]}
                  size="md"
                >
                  <Input
                    color={"white"}
                    pr="4.5rem"
                    type={"email"}
                    ref={emailRef}
                    placeholder="Enter email"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      colorScheme="green"
                      type="submit"
                      onClick={submitEmail}
                    >
                      Submit
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl> */}
            </Box>
            <Spacer />
            <Box pt={['4', '4', '0']}>
              <Map />
            </Box>
          </Box>
        </Stack>
        <Box mt={'4'}>
          <hr />
          <Text>
            Copyright 2021-{new Date().getFullYear()}, Infinity Devices Africa
            Ltd.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
