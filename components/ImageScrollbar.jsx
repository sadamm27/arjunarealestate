import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const ImageScrollbar = ({ data }) => {
  return (
    <Box maxWidth="910px" margin="0 auto">
      <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
        {data.map((item) => (
          <div key={item.id}>
            <Image
              alt="property"
              placeholder="blur"
              blurDataURL={item.url}
              src={item.url}
              width={1000}
              height={500}
              sizes="(max-width: 500px) 100px, (max-width: 1000px) 400px, 1000px"
            />
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default ImageScrollbar;
