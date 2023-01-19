import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React, { SyntheticEvent, useRef, useState } from 'react';
import { GoLocation } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import Head from 'next/head';
// import { Keys } from '../keys';

type FormInterface = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const Contact = () => {
  const form = useRef<any>(null);
  // const email = useRef()<HTMLInputElement>(null);
  const [state, setState] = useState<FormInterface>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const basicBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',

    color: 'gray.100',

    // background:
    //   "url(https://picsum.photos/id/1080/200/300) center/cover no-repeat",
    background: `url(https://res.cloudinary.com/dd2y96zp9/image/upload/v1660521738/InfinityDevices/Assest/nairobi_eabc6z.jpg) center/cover no-repeat`,
  };
  const innerBoxStyles = {
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'center',
    textAlign: 'left',
    boxSize: '100%',
    width: '100%',
    color: 'white.100',
    fontSize: '20px',
  };
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY}`,
        `${process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID}`,
        form.current,
        `${process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          Swal.fire(
            'Message sent',
            'You have successful sent your message',
            'success'
          );
          e.target.reset();
        },
        (error) => {
          Swal.fire({
            title: 'Error!',
            text: 'Something went wrong. Please try again or call us',
            icon: 'error',
            confirmButtonText: 'Cool',
          });
        }
      );
  };
  return (
    <Container maxW='container.xl'>
      <Head>
        <title>Infinity Devices | Contact</title>
      </Head>
      <Box pt='5' pb='10'>
        <Center pb={'5'}>
          <Text fontSize={['2xl', '3xl']} as={'h1'}>
            Contact us
          </Text>
        </Center>
        <Box
          display={'flex'}
          h={'auto'}
          flexDir={['column', 'column', 'row']}
          boxShadow='base'
        >
          <Box
            h={'500px'}
            w={['100%', '100%', '40%']}
            display={'flex'}
            flexDir={'column'}
            sx={basicBoxStyles}
            filter='grayscale(80%)'
            brightness='50%'
            fontSize={'xl'}
            fontWeight={'bold'}
          >
            {' '}
            <Box
              flexDir={'column'}
              w={'100%'}
              h={'100%'}
              sx={innerBoxStyles}
              backdropFilter='auto'
              backdropBlur='2px'
            >
              <Box p='4'>
                <Text mb={'1'}>
                  <a
                    href='https://goo.gl/maps/7LESANqQ6QqxymqZ7'
                    target={'_blank'}
                    rel='noreferrer'
                  >
                    <Icon as={GoLocation} mr={'2'} /> Elgon Court D2, Ralph
                    Bunche Road, Upperhill
                  </a>
                </Text>
                <Text mb={'1'}>
                  <Icon as={FiPhoneCall} mr={'2'} />
                  <a href='tel:0706731683'>0706731683</a>,
                  <a href='tel:0734329563'>0734329563</a>
                </Text>
                <Text mb={'1'}>
                  <a href='mailto:info@infinitydevices.co'>
                    <Icon as={MdOutlineEmail} mr={'2'} />
                    info@infinitydevices.co
                  </a>
                </Text>
              </Box>
            </Box>
          </Box>
          <Box p={['4', '4', '4']} w={['100%', '100%', '60%']}>
            <form ref={form} onSubmit={sendEmail}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type={'text'}
                  name='user_name'
                  placeholder='Please enter your name'
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type={'email'}
                  name='user_email'
                  placeholder='youremail@gmail.com'
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Phone</FormLabel>
                <Input
                  type={'phone'}
                  placeholder='Please enter your phone number'
                  name='user_phone'
                />
              </FormControl>
              <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea name='message' placeholder='Your message' />
              </FormControl>
              <Button type='submit' colorScheme={'green'} mt={'4'}>
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
