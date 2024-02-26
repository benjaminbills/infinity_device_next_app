import {
  Box,
  Button,
  Container,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import hocer from '../assets/images/hocerlogo.png';
import Products from '../Products';

// import hocer2 from '../assets/images/hocer2.jpeg';

// import fengh from '/images/fengh.jpeg';
// import landing from '../assets/images/landing.jpg';
// import disposableBurstPolymer from '../assets/images/DisposableBurstClip.png';
// import ElectricLaparoscopicCutting from '../assets/images/ElectricLaparoscopicCutting.jpeg';
// import SmartPressElectric from '../assets/images/SmartPressElectric.jpeg';
// import LunarGif from "../assets/images/lunar.gif";

// import Apparatus from '../assets/images/apparatus.jpeg';
// import Hocer from '../assets/images/hocer2.jpeg';
import { ArrowForwardIcon, PhoneIcon } from '@chakra-ui/icons';
import { Carousel } from 'react-responsive-carousel';
import Head from 'next/head';

const Home = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: false,
    speed: 300,
    slidesToShow: 1,
    // centerMode: true,
    centerPadding: 0,
    autoplay: true,
    // beforeChange: (current, next) => setImageIndex(next),
  };
  const basicBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSize: '100%',
    minHeight: '400px',
    color: 'gray.100',
    textShadow: '0 0 20px black',
    fontWeight: 'bold',
    px: 4,
    // background:
    //   "url(https://picsum.photos/id/1080/200/300) center/cover no-repeat",
    background: `url(https://res.cloudinary.com/dd2y96zp9/image/upload/v1660521925/InfinityDevices/Assest/surgeryroom_zfadf6.jpg) center/cover no-repeat`,
  };
  return (
    <Box pb={'5'}>
      <Head>
        <title>Infinity Devices | Medical Devices</title>
      </Head>
      {/* <Carousel
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        infiniteLoop={true}
        stopOnHover={true}
        swipeable={true}
        dynamicHeight={true}
        emulateTouch={true}
        transitionTime={500}
        interval={6000}
      >
        <Box position={"relative"}>
          <Image src={SmartPressElectric} />
        </Box>
        <Box position={"relative"}>
          <Image src={disposableBurstPolymer} />
        </Box>
        <Box position={"relative"}>
          <Image src={ElectricLaparoscopicCutting} />
        </Box>
      </Carousel> */}
      <Container maxW='container.xl'>
        <Stack
          display={'flex'}
          direction={['column-reverse', 'row', 'row']}
          pt='10'
          pb='5'
        >
          <Box w={['100%', '50%', '75%']}>
            <Text fontSize={'4xl'} as={'h1'}>
              {' '}
              Your clinical outcomes <br /> matter
            </Text>
            <Text pb={'5'}>We&#39;ll journey with you everyday.</Text>
            <Link href={'/catalog'}>
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme='teal'
                variant='outline'
                borderRadius={'none'}
              >
                View Catalog
              </Button>
            </Link>
          </Box>
          <Box w={['100%', '50%', '25%']}>
            <Container display={'flex'} flexDir='column'>
              <Box position={'relative'}>
                <Carousel
                  autoPlay={true}
                  showThumbs={false}
                  showStatus={false}
                  showArrows={false}
                  infiniteLoop={true}
                  stopOnHover={true}
                  swipeable={true}
                  dynamicHeight={true}
                  emulateTouch={true}
                  transitionTime={500}
                  interval={6000}
                >
                  <Box position={'relative'}>
                    <Image src={'/images/apparatus.jpeg'} />
                  </Box>

                  <Box position={'relative'}>
                    <Image
                      src={
                        'https://res.cloudinary.com/dd2y96zp9/image/upload/v1660662889/InfinityDevices/CatalogImages/product2_bogthn.png'
                      }
                    />
                  </Box>
                  <Box position={'relative'}>
                    <Image
                      src={
                        'https://res.cloudinary.com/dd2y96zp9/image/upload/v1660642302/InfinityDevices/CatalogImages/QuanClip/quanclip_nomeclature1_sn1bob.png'
                      }
                    />
                  </Box>
                  <Box position={'relative'}>
                    <Image
                      src={
                        'https://res.cloudinary.com/dd2y96zp9/image/upload/v1660642307/InfinityDevices/CatalogImages/QuanClip/quanclip_nomeclature2_y1uv5p.png'
                      }
                    />
                  </Box>
                  {/* <Box minH={"300px"} position={"relative"}>
                    <Image src={disposableBurstPolymer} />
                  </Box> */}
                  {/* <Box minH={"300px"} position={"relative"}>
                    <Image src={LunarGif} />
                  </Box> */}
                </Carousel>
              </Box>
            </Container>
          </Box>
        </Stack>
        <Box>
          <Stack
            direction={'row'}
            justifyContent={'center'}
            pt={'5'}
            minH={'60px'}
          >
            <Wrap spacing={'5'} justify={'left'}>
              <WrapItem>
                <Box
                  display={'flex'}
                  border={'1px solid black'}
                  h={'30px'}
                  w={'80px'}
                >
                  <Image src={'/images/hocerlogo.png'} />
                </Box>
              </WrapItem>
              <WrapItem>
                <Box
                  display={'flex'}
                  border={'1px solid black'}
                  h={'30px'}
                  w={'80px'}
                >
                  <Image src={'/images/fengh.jpeg'} />
                </Box>
              </WrapItem>
            </Wrap>
          </Stack>
        </Box>
        <hr />
        {/* <Stack
        pt={"4%"}
        pb={"4%"}
        display={"flex"}
        flexDir={["column", "row"]}
        minH={"600px"}
      >
        <Box w={["100%", "50%", "40%"]}>
          <Text>
            As your solution for manufacturer - direct medical devices,
            equipment and consumables, our team is dedicated to helping you save
            money.
          </Text>
          <Button
            mt={"5"}
            colorScheme="teal"
            variant="outline"
            borderRadius={"3xl"}
          >
            Get started
          </Button>
        </Box>
        <Box
          maxH={"400px"}
          maxW={"400px"}
          backgroundColor={"#d4fad8"}
          borderRadius={"full"}
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
        >
          <Carousel
            autoPlay
            showThumbs={false}
            showStatus={false}
            showArrows={false}
          >
            <Box position={"relative"}>
              <Image src={Stapler} />
            </Box>
            <Box position={"relative"}>
              <Image src={Stapler} />
            </Box>
          </Carousel>
        </Box>
      </Stack>
      <Box
        p={"10"}
        display={"flex"}
        flexDir={"column"}
        backgroundColor={"#d4fad8"}
        borderBottom={"1px solid black"}
        justifyContent={"center"}
      >
        <Center fontSize={"xl"}>Got any Questions?</Center>
        <Center fontSize={"2xl"}>
          <PhoneIcon /> +254-7431-56011
        </Center>
        <Center>and speak with a product specialist today.</Center>
      </Box>
      <Box pt={"5"} pb={"5"}>
        <Stack flexDir={["column", "row"]}>
          <Box w={["100%", "30%", "30%"]}>
            <Text>We deeply care about our patients.</Text>
            <Text>+254-7431-56011</Text>
            <Text>contact@infintydevices</Text>
          </Box>
          <Box>
            <Box>
              <Input placeholder="Enter  enamil address" />
              <Text>Get notified when we add a new product.</Text>
            </Box>
            <Box></Box>
          </Box>
        </Stack>
      </Box> */}
        <Stack
          flexDir={['column', 'column', 'row']}
          pt={'5'}
          pb={'10'}
          rowGap={'5'}
        >
          <Box w={['100%', '100%', '50%']}>
            <Box position={'relative'} mb={'5'}>
              <Text className='underline' fontSize={['2xl', '3xl']} as={'h1'}>
                Infinity Devices Africa Ltd
              </Text>
            </Box>
            <Box pr={['none', 'none', '8']}>
              <Text width={'100%'} textAlign={'justify'} pb='3'>
                Infinity Devices Africa Ltd. is a Company whose main focus is to
                deliver technology driven solutions to clinical problems via a
                trio approach that encompasses the meeting of Clinical Needs,
                Market Appropriate Pricing and Value Creation.
              </Text>

              <Text pb='2'>
                We are a minimally invasive oriented medical devices company
                that provides solutions in:
              </Text>
              <UnorderedList>
                <ListItem>
                  Laparoscopic colorectal and open procedures.
                </ListItem>
                <ListItem>
                  Video Assisted Thoracoscopic Surgery (VATS).
                </ListItem>
                <ListItem>Bariatric Surgery.</ListItem>
                <ListItem>Liver Surgery.</ListItem>
                <ListItem>
                  Radio frequency ablation for treatment and diagnostic of
                  varicose veins, spider veins, telangiectasias, hemorrhoids and
                  fistulae.
                </ListItem>
              </UnorderedList>
            </Box>
            <Link href='/about'>
              <Button
                mt={'5'}
                colorScheme='teal'
                borderRadius={'none'}
                variant='outline'
                rightIcon={<ArrowForwardIcon />}
              >
                Read more
              </Button>
            </Link>
          </Box>
          <Box w={['100%', '100%', '50%']} display={'flex'}>
            <Image src={'/images/landing.jpg'} />
          </Box>
        </Stack>
        <Box
          mb={'10'}
          display={'flex'}
          flexDir={'column'}
          sx={basicBoxStyles}
          filter='auto'
          brightness='80%'
        >
          <Text fontSize={'lg'}>
            Walk with excellence,grow together with Minimally Invasive Surgery -
            a Kenyan- style solution for the integration of Minimally Invasive
            Surgery
          </Text>
          <Link href={'/catalog'}>
            <Button
              mt={'5'}
              colorScheme='green'
              borderRadius={'none'}
              rightIcon={<ArrowForwardIcon />}
            >
              View Catalog
            </Button>
          </Link>
        </Box>
        <Stack flexDir={'column'} pb={'10'}>
          <Box
            display={'flex'}
            flexDir={['column-reverse', 'column-reverse', 'row']}
            pt={['0', '0', '0']}
          >
            <Box
              pt={['2', '2', '0']}
              display={'flex'}
              flexDir={'column'}
              w={['100%', '100%', '40%']}
              textAlign={['left', 'left', 'right']}
            >
              <Text fontSize={'xl'} as={'h1'}>
                New Lunar® Disposable Fully Electric Laparoscopic Cutting
                Stapler
              </Text>
              <Box>
                <Text>
                  The 1st surgical stapler in the industry with recommended and
                  standardized 15 seconds pre-compression
                </Text>
              </Box>
              <Link href={'/product/1'}>
                <Button
                  mb={['5', '5', '0']}
                  w={['40%']}
                  marginLeft={['none', 'none', 'auto']}
                  mt={'5'}
                  colorScheme='green'
                  borderRadius={'none'}
                  rightIcon={<ArrowForwardIcon />}
                >
                  Read more
                </Button>
              </Link>
            </Box>
            <Box
              display={'flex'}
              w={['100%', '100%', '60%']}
              pl={['0', '0', '10']}
              _hover={{
                transform: 'scale(1.05)',
                transition: ' 0.8s all',
              }}
            >
              <Image src={'/images/ElectricLaparoscopicCutting.jpeg'} />
            </Box>
          </Box>
          <Box
            display={'flex'}
            flexDir={['column', 'column', 'row']}
            pt={['0', '0', '10']}
          >
            <Box
              display={'flex'}
              w={['100%', '100%', '60%']}
              pr={['0', '0', '10']}
              _hover={{
                transform: 'scale(1.05)',
                transition: ' 0.8s all',
              }}
            >
              <Image src={Products[10].images[0]} />
            </Box>
            <Box
              pt={['2', '2', '0']}
              display={'flex'}
              flexDir={'column'}
              w={['100%', '100%', '40%']}
              textAlign={['left', 'left', 'left']}
            >
              <Text fontSize={'xl'} as={'h1'}>
                {Products[10].title}
              </Text>
              <Box>
                <Text>
                  {Products[10].description}
                </Text>
              </Box>

              <Link href={'/product/11'}>
                <Button
                  mb={['5', '5', '0']}
                  w={['40%']}
                  marginLeft={['none', 'none', 'auto']}
                  mt={'5'}
                  colorScheme='green'
                  borderRadius={'none'}
                  rightIcon={<ArrowForwardIcon />}
                >
                  Read more
                </Button>
              </Link>
            </Box>
          </Box>
          
          <Box
            display={'flex'}
            flexDir={['column-reverse', 'column-reverse', 'row']}
            pt={['0', '0', '10']}
          >
            <Box
              pt={['2', '2', '0']}
              display={'flex'}
              flexDir={'column'}
              w={['100%', '100%', '40%']}
              textAlign={['left', 'left', 'right']}
            >
              <Text fontSize={'xl'} as={'h1'}>
                Lunar® Smart Press Electric Laparoscopic Stapler{' '}
              </Text>
              <Box>
                <Text>
                  Fenghe Innovation&#39;s &#39;guided pre-press&#39; uses
                  electromechanical technology to integrate surgery into
                  products, taking the first step towards intelligent
                  anastomosis
                </Text>
              </Box>
              <Link href={'/product/1'}>
                <Button
                  mb={['5', '5', '0']}
                  w={['40%']}
                  marginLeft={['none', 'none', 'auto']}
                  mt={'5'}
                  colorScheme='green'
                  borderRadius={'none'}
                  rightIcon={<ArrowForwardIcon />}
                >
                  Read more
                </Button>
              </Link>
            </Box>
            <Box
              display={'flex'}
              w={['100%', '100%', '60%']}
              pl={['0', '0', '10']}
              _hover={{
                transform: 'scale(1.05)',
                transition: ' 0.8s all',
              }}
            >
              <Image src={'/images/SmartPressElectric.jpeg'} />
            </Box>
          </Box>
          
          <Box
            display={'flex'}
            flexDir={['column', 'column', 'row']}
            pt={['0', '0', '10']}
          >
            <Box
              display={'flex'}
              w={['100%', '100%', '60%']}
              pr={['0', '0', '10']}
              _hover={{
                transform: 'scale(1.05)',
                transition: ' 0.8s all',
              }}
            >
              <Image src={'/images/hocer2.jpeg'} />
            </Box>
            <Box
              pt={['2', '2', '0']}
              display={'flex'}
              flexDir={'column'}
              w={['100%', '100%', '40%']}
              textAlign={['left', 'left', 'left']}
            >
              <Text fontSize={'xl'} as={'h1'}>
                Hocer Disposable Fully Electric Laparoscopic Cutting Stapler
              </Text>
              <Box>
                <Text>
                  Inheritance in the era of intelligent squeezing, a master of
                  scientific anastomosis and technology integration
                </Text>
              </Box>
              <Link href={'/product/8'}>
                <Button
                  mb={['5', '5', '0']}
                  w={['40%']}
                  marginRight={['none', 'none', 'auto']}
                  mt={'5'}
                  colorScheme='green'
                  borderRadius={'none'}
                  rightIcon={<ArrowForwardIcon />}
                >
                  Read more
                </Button>
              </Link>
            </Box>
          </Box>
          <Box
            display={'flex'}
            flexDir={['column-reverse', 'column-reverse', 'row']}
            pt={['0', '0', '10']}
          >
            <Box
              pt={['2', '2', '0']}
              display={'flex'}
              flexDir={'column'}
              w={['100%', '100%', '40%']}
              textAlign={['left', 'left', 'right']}
            >
              <Text fontSize={'xl'} as={'h1'}>
                {Products[9].title}
              </Text>
              <Box>
                <Text>
                  {Products[9].description}
                </Text>
              </Box>
              <Link href={'/product/10'}>
                <Button
                  mb={['5', '5', '0']}
                  w={['40%']}
                  marginLeft={['none', 'none', 'auto']}
                  mt={'5'}
                  colorScheme='green'
                  borderRadius={'none'}
                  rightIcon={<ArrowForwardIcon />}
                >
                  Read more
                </Button>
              </Link>
            </Box>
            <Box
              display={'flex'}
              w={['100%', '100%', '60%']}
              pl={['0', '0', '10']}
              _hover={{
                transform: 'scale(1.05)',
                transition: ' 0.8s all',
              }}
            >
              <Image src={Products[9].images[0]} />
            </Box>
          </Box>
          
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
