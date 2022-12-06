import {
  Box,
  Button,
  Center,
  Container,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React from 'react';
import ElectricLaparoscopicCutting from '../assets/images/ElectricLaparoscopicCutting.jpeg';
import Products from '../Products';
import Clip from '../assets/images/clip.jpeg';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Link from 'next/link';
function Catalog() {
  const downloadCatalog = () => {
    fetch(
      'https://res.cloudinary.com/dd2y96zp9/image/upload/v1660500144/InfinityDevices/Documents/infinity_devices_catalog_m2mle8.pdf'
    ).then((res) => {
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'infinity_devices_catalog.pdf';
        alink.click();
      });
    });
  };
  return (
    <Container maxW='container.xl'>
      <Box>
        <Box pt='5' pb='10'>
          <Center>
            <Text fontSize={['2xl', '3xl']} as={'h1'}>
              Catalog
            </Text>
          </Center>
          <Center>
            <Box>
              <Wrap
                pt={'5'}
                spacing={'20px'}
                // display={"flex"}
                // direction={["column", "column", "row"]}
              >
                {Products.map((product) => (
                  <WrapItem
                    key={product.id}
                    overflow={'hidden'}
                    maxW={['100%', '70em', '35em']}
                    boxShadow='base'
                  >
                    <Box display={'flex'} flexDir={'column'}>
                      <Center>
                        <Box
                          _hover={{
                            transform: 'scale(1.1)',
                            transition: ' 0.8s all',
                          }}
                        >
                          <Image src={product.images[0]} maxH={'300px'} />
                        </Box>
                      </Center>

                      <Box p={'4'}>
                        <Text
                          fontSize={'xl'}
                          as={'h1'}
                          textOverflow={'ellipsis'}
                          overflow={'hidden'}
                          whiteSpace='nowrap'
                        >
                          {product.title}
                        </Text>
                        <Text>{product.description}</Text>
                        <Link
                          href={{
                            pathname: 'product/[id]',
                            query: {
                              id: product.id,
                            },
                          }}
                        >
                          <Button
                            mb={['5', '5', '0']}
                            w={['60%']}
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
                  </WrapItem>
                ))}

                {/* <Box
                overflow={"hidden"}
                w={["100%", "48%", "48%"]}
                boxShadow="base"
              >
                <Box
                  _hover={{
                    transform: "scale(1.1)",
                    transition: " 0.8s all",
                  }}
                >
                  <Image src={ElectricLaparoscopicCutting} />
                </Box>
                <Box p="4">
                  <Text
                    fontSize={"xl"}
                    as={"h1"}
                    textOverflow={"ellipsis"}
                    overflow={"hidden"}
                    whiteSpace="nowrap"
                  >
                    Hocer Disposable Fully Electric Laparoscopic Cutting Stapler
                  </Text>
                  <Text>
                    Inheritance in the era of intelligent squeezing, a master of
                    scientific anastomosis and technology integration
                  </Text>
                  <Link href="/product/2">
                    <Button
                      mb={["5", "5", "0"]}
                      w={["60%"]}
                      marginRight={["none", "none", "auto"]}
                      mt={"5"}
                      colorScheme="green"
                      borderRadius={"none"}
                      rightIcon={<ArrowForwardIcon />}
                    >
                      Read more
                    </Button>
                  </Link>
                </Box>
              </Box> */}
              </Wrap>
            </Box>
          </Center>
          <Center pt='10'>
            {/* <Link href={"/"}> */}
            <Button
              colorScheme='green'
              borderRadius={'none'}
              variant='outline'
              onClick={downloadCatalog}
            >
              Download Our Catalog
            </Button>
            {/* </Link> */}
          </Center>
        </Box>
      </Box>
    </Container>
  );
}

export default Catalog;
