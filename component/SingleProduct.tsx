import {
  Box,
  Button,
  Center,
  Container,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { Link, useParams } from 'react-router-dom';
import Link from 'next/link';
import Products from '../Products';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import ReactPlayer from 'react-player';
import Head from 'next/head';

interface ProductInterface {
  id: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  images: string[];
  nomenclature: string[];
  video: string[];
}

const SingleProduct = (pid: any) => {
  const { id } = pid;

  // console.log(id);

  const [product, setProduct] = useState<ProductInterface>();
  useEffect(() => {
    const getProduct: any = Products.filter((product) => product.id === id);

    setProduct(getProduct[0]);

    console.log(product);
  }, [id]);
  // const getProduct = Products.filter((product) => product.id === id);
  // console.log(product);
  return (
    <Box pb={'10'}>
      <Head>
        <title>Infinity Devices | {product?.title}</title>
      </Head>
      {product ? (
        <Container maxW='container.xl'>
          <Stack pt='10' w='100%' pb={'5'} flexDir={['column', 'row', 'row']}>
            <Box w={['100%', '50%', '50%']}>
              <Carousel
                autoPlay
                showThumbs={true}
                showStatus={false}
                showArrows={false}
                thumbWidth={100}
                swipeable={true}
                emulateTouch={true}
              >
                {/* {Products.filter((item) => item.id === Number(id)).map((item) => (
              <img src={item.images[0]} alt="disposableBurstPolymer" />
            ))} */}
                {product?.images.map((image, i) => (
                  <img key={i} src={image} alt='disposableBurstPolymer' />
                ))}
              </Carousel>
            </Box>
            <Box
              pl={['0', '5']}
              w={['100%', '50%', '50%']}
              className='no-margin'
            >
              <Text fontSize={'xl'} as={'h1'}>
                {product.title}
              </Text>
              <Text fontSize={'l'}>Features</Text>
              <UnorderedList>
                {product.features.map((item, i) => (
                  <ListItem key={i}>{item}</ListItem>
                ))}
              </UnorderedList>
              <Text fontSize={'l'}>Benefits</Text>
              <UnorderedList>
                {product.benefits.map((item, i) => (
                  <ListItem key={i}>{item}</ListItem>
                ))}
              </UnorderedList>
              <Link href='/contact'>
                <Button
                  mt={'5'}
                  colorScheme='teal'
                  borderRadius={'none'}
                  variant='outline'
                >
                  Contact Us
                </Button>
              </Link>
            </Box>
          </Stack>
          <hr />
          <Stack pt={'5'}>
            {product.nomenclature.map((item, i) => (
              <Image key={i} src={item} />
            ))}
          </Stack>
          <Stack>
            {product.video?.length>0 && (
              <Box>
                <Center>
                  <Text fontSize={'xl'} as={'h2'} pb='2'>
                    Watch the animation of the Procedure
                  </Text>
                </Center>
                {product.video?.map((item, i) => (
                  <ReactPlayer width={'100%'} key={i} url={item} />
                ))}
              </Box>
            )}
          </Stack>
        </Container>
      ) : null}
    </Box>
  );
};

export default SingleProduct;
