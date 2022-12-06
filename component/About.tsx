import {
  Box,
  Center,
  Container,
  Icon,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
// import surgeryroom from '../public/images/surgeryroom.jpeg';
import { GiNorthStarShuriken } from 'react-icons/gi';
import { IoIosPeople } from 'react-icons/io';
import { IoDiamondOutline } from 'react-icons/io5';
import { ImLink } from 'react-icons/im';
import { BiAnchor } from 'react-icons/bi';
import { TiSpiral } from 'react-icons/ti';
import Head from 'next/head';
// import Image from 'next/image';
const About = () => {
  return (
    <Container maxW='container.xl' pb={'10'}>
      <Head>
        <title>Infinity Devices | Medical Devices</title>
      </Head>
      <Box pt='5'>
        <Center>
          <Text fontSize={['2xl', '3xl']} as={'h1'}>
            About Us
          </Text>
        </Center>
        <Stack pt='5' flexDir={['column', 'column', 'row']}>
          <Box w={['100%', '100%', '50%']}>
            <Image
              src='/images/surgeryroom.jpeg'
              // src={surgeryroom}
              alt='Surgery room'
            />
          </Box>
          <Box
            w={['100%', '100%', '50%']}
            mt='0px'
            pt={['5', '0', 'none']}
            pl={['none', 'none', '5']}
          >
            <Box position={'relative'} mb={'5'}>
              <Text className='underline' fontSize={['2xl', '3xl']} as={'h1'}>
                Infinity Devices Africa Ltd.
              </Text>
            </Box>
            <Text textAlign={'justify'} pb='2'>
              Infinity Devices Africa Ltd. is a Company whose main focus is to
              deliver technology driven solutions to clinical problems via a
              trio approach that encompasses the meeting of Clinical Needs,
              Market Appropriate Pricing and Value Creation.
            </Text>
            <Text pb='2'>
              We are a minimally invasive oriented medical devices company that
              provides solutions in:
            </Text>
            <UnorderedList>
              <ListItem>Laparoscopic colorectal and open procedures.</ListItem>
              <ListItem>Video Assisted Thoracoscopic Surgery (VATS).</ListItem>
              <ListItem>Bariatric Surgery and Liver Surgery.</ListItem>
            </UnorderedList>
          </Box>
        </Stack>
        <Stack flexDir={'column'}>
          <Box
            display={'flex'}
            alignItems={['left', 'left', 'center']}
            pt={'5'}
            flexDir='column'
          >
            <Text fontSize={['2xl', '3xl']} as={'h1'}>
              Our Vision
            </Text>
            <Wrap pt='5' spacing='30px' justify='center'>
              <WrapItem>
                <Center
                  _hover={{
                    background: '#8fbc8f',
                    color: 'white',
                  }}
                  flexDir={'column'}
                  w='200px'
                  h='250px'
                  border='1px solid gray'
                >
                  <Icon as={IoIosPeople} w={8} h={8} />
                  <Text fontWeight={'bold'}>People</Text>
                  <Text textAlign={'center'} pl='2' pr='2'>
                    Be a great place to work as to attract and retain the best
                    talent in the Industry.
                  </Text>
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  _hover={{
                    background: '#8fbc8f',
                    color: 'white',
                  }}
                  flexDir={'column'}
                  w='200px'
                  h='250px'
                  border='1px solid gray'
                >
                  <Icon as={IoDiamondOutline} w={8} h={8} />
                  <Text fontWeight={'bold'}>Guaranteed Quality</Text>
                  <Text textAlign={'center'} pl='2' pr='2'>
                    Bring to market world-class quality, cost effective and
                    efficient, clinical technology driven products.
                  </Text>
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  _hover={{
                    background: '#8fbc8f',
                    color: 'white',
                  }}
                  flexDir={'column'}
                  w='200px'
                  h='250px'
                  border='1px solid gray'
                >
                  <Icon as={ImLink} w={8} h={8} />
                  <Text fontWeight={'bold'}>Partners</Text>
                  <Text textAlign={'center'} pl='2' pr='2'>
                    Nurture and grow a wide network of supply partners and
                    quality suppliers to offer an enduring value to all
                    stakeholders across the value chain.
                  </Text>
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  _hover={{
                    background: '#8fbc8f',
                    color: 'white',
                  }}
                  flexDir={'column'}
                  w='200px'
                  h='250px'
                  border='1px solid gray'
                >
                  <Icon as={BiAnchor} w={8} h={8} />
                  <Text fontWeight={'bold'}>Productivity</Text>
                  <Text textAlign={'center'} pl='2' pr='2'>
                    Be highly effective, lean and a fast-moving organization by
                    leveraging on the collective strengths of our stakeholders.
                  </Text>
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  _hover={{
                    background: '#8fbc8f',
                    color: 'white',
                  }}
                  flexDir={'column'}
                  w='200px'
                  h='250px'
                  border='1px solid gray'
                >
                  <Icon as={TiSpiral} w={8} h={8} />
                  <Text fontWeight={'bold'}>Profit</Text>
                  <Text textAlign={'center'} pl='2' pr='2'>
                    Create long-term value for all stakeholders.
                  </Text>
                </Center>
              </WrapItem>
            </Wrap>
          </Box>
        </Stack>
        <Box
          display={'flex'}
          alignItems={['left', 'left', 'center']}
          pt={'5'}
          flexDir='column'
        >
          <Text fontSize={['2xl', '3xl']} as={'h1'}>
            Our Mission
          </Text>
          <Text w={['100%', '100%', '80%']}>
            To continuously scour the Globe for improved and cost effective
            technologies that may enable our Health Care Providers better their
            patient outcomes and patient quality of life post intervention.
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
