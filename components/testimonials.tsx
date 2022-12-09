import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => (
  <Carousel className="bg-gray text-white py-10 lg:py-10">
    <CarouselItem index={0}>
      <Review by="Turutin Dmitry">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar
        lorem in iaculis volutpat. Nam tincidunt tristique urna, venenatis
        faucibus arcu venenatis non. Nunc eu suscipit eros. Integer sed tellus
        nec dui congue tempus vitae nec ipsum. Pellentesque aliquam tellus sed
        consectetur.
      </Review>
    </CarouselItem>
    <CarouselItem index={1}>
      <Review by="Turutin Dmitry">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar
        lorem in iaculis volutpat. Nam tincidunt tristique urna, venenatis
        faucibus arcu venenatis non. Nunc eu suscipit eros. Integer sed tellus
        nec dui congue tempus vitae nec ipsum. Pellentesque aliquam tellus sed
        consectetur.
      </Review>
    </CarouselItem>
    <CarouselItem index={2}>
      <Review by="Turutin Dmitry">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar
        lorem in iaculis volutpat. Nam tincidunt tristique urna, venenatis
        faucibus arcu venenatis non. Nunc eu suscipit eros. Integer sed tellus
        nec dui congue tempus vitae nec ipsum. Pellentesque aliquam tellus sed
        consectetur.
      </Review>
    </CarouselItem>
    <CarouselItem index={3}>
      <Review by="Turutin Dmitry">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar
        lorem in iaculis volutpat. Nam tincidunt tristique urna, venenatis
        faucibus arcu venenatis non. Nunc eu suscipit eros. Integer sed tellus
        nec dui congue tempus vitae nec ipsum. Pellentesque aliquam tellus sed
        consectetur.
      </Review>
    </CarouselItem>
    <CarouselItem index={4}>
      <Review by="Turutin Dmitry">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar
        lorem in iaculis volutpat. Nam tincidunt tristique urna, venenatis
        faucibus arcu venenatis non. Nunc eu suscipit eros. Integer sed tellus
        nec dui congue tempus vitae nec ipsum. Pellentesque aliquam tellus sed
        consectetur.
      </Review>
    </CarouselItem>
  </Carousel>
);

export default Testimonials;
