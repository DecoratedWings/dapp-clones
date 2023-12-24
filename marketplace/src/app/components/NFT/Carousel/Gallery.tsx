"use client"
import {
  Box,
  Card,
  Container,
  HStack,
  Image,
  Skeleton,
  Stack,
  StackProps,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import {
  Carousel,
  CarouselIconButton,
  CarouselSlide,
  useCarousel,
} from "./Carousel";
import { ProductImage } from "./_data";

interface GalleryProps {
  images: ProductImage[];
  aspectRatio?: number;
  rootProps?: StackProps;
}

export const Gallery = (props: GalleryProps) => {
  const { images, rootProps } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView = useBreakpointValue({ base: 1, md: 4 }); // Display fewer images at a time for more focus
  const imageWidth = useBreakpointValue({
    base: "400px", // This assumes you want 400px wide images on mobile as well. Adjust if needed.
    md: "1500px", // 2000px / 5 = 400px for desktop view
  });

  const [ref, slider] = useCarousel({
    slides: {
      perView: slidesPerView,
      spacing: useBreakpointValue({ base: 1, md: 2 }),
    },
    slideChanged: (slider) => setCurrentSlide(slider.track.details.rel),
  });

  return (
    <Stack spacing="2" {...rootProps} align="center">
      <HStack
        spacing="4"
        width="full"
        justifyContent="center"
        overflowX="visible"
      >
        <Carousel ref={ref} direction="row" minWidth={imageWidth}>
          {images.map((image, i) => (
            <CarouselSlide key={i} cursor="pointer">
              <Container>
                <Box
                  bg="bg.surface"
                  px={{ base: "4", md: "6" }}
                  py="5"
                  boxShadow="sm"
                  borderRadius="lg"
                  position="relative"
                >
                  <Box
                    height="200px"
                    width="full"
                    position="relative"
                    overflow="hidden"
                  >
                    <Image
                      src={image.src}
                      objectFit="cover"
                      alt={image.alt}
                      fallback={<Skeleton />}
                      width="full"
                      height="full"
                      position="absolute" // position the image absolutely within the parent Box
                      top="0"
                      left="0"
                    />
                  </Box>
                  <Stack spacing="1" mt="4" maxHeight="100px" overflowY="auto">
                    <Text textStyle="lg" fontWeight="medium">
                      {image.title}
                    </Text>
                    <Text textStyle="sm" color="fg.muted">
                      {image.description}
                    </Text>
                  </Stack>
                </Box>
              </Container>
            </CarouselSlide>
          ))}
        </Carousel>
      </HStack>
      <br />
      <HStack
        spacing="14"
        width="75%"
        justifyContent="center"
        p="2"
        border="1px solid"
        borderRadius="md"
        boxShadow="sm"
      >
        <CarouselIconButton
          onClick={() => slider.current?.prev()}
          icon={<IoChevronBackOutline />}
          color={"black"}
          bg={"gray.100"}
          aria-label="Previous slide"
          disabled={currentSlide === 0}
        />
        <CarouselIconButton
          onClick={() => slider.current?.next()}
          icon={<IoChevronForwardOutline />}
          color={"black"}
          bg={"gray.100"}
          aria-label="Next slide"
          disabled={currentSlide + Number(slidesPerView) === images.length}
        />
      </HStack>
    </Stack>
  );
};
