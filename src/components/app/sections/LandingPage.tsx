'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from 'react';

const bagData = [
  { name: 'Clean and elegant handbag cherishing', description: 'stay elegant !', imageSrc: '/bags/1.png' },
  { name: 'Elegant and sophisticated purse delight', description: 'embrace sophistication!', imageSrc: '/bags/2.png' },
  { name: 'Attractive and stylish bag allure', description: 'captivate with style!', imageSrc: '/bags/4.png' },
];

type Props = {}

const LandingPage = (props: Props) => {

  // const [emblaRef, emblaApi] = useEmblaCarousel()
  // const logSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
  //   console.log(emblaApi.slidesInView())
  // }, [])

  // const { selectedIndex, scrollSnaps, onDotButtonClick } =
  // useDotButton(emblaApi)


  const plugin = React.useRef(
    Autoplay({
      delay: 1000,
      stopOnFocusIn: true,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    }),
  )

  // useEffect(() => {
  //   if (emblaApi) emblaApi.on('slidesInView', logSlidesInView)
  // }, [emblaApi, logSlidesInView])

  return (
    <section className='w-screen pt-5  mx-auto px-4 md:px-10 lg:px-20 xl:px-28'>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full mx-auto p-0 flex items-center border relative"
      >
        <CarouselPrevious className='absolute bg-transparent h-full backdrop-blur-0 top-0 rounded-none hover:bg-transparent  hover:border hover:border-r-black border-transparent left-0 z-100' />
        <CarouselContent className='m-0 mx-auto'>
          {bagData.map((bag, index) => (
            <CarouselItem key={index} className='w-[100%]'>
              <div className='w-full bg-primary  '>
                <img className='w-full mx-auto' src={'/lp.jpg'} alt={bag.name} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className='absolute bg-transparent h-full backdrop-blur-0 top-0 rounded-none hover:bg-transparent hover:border hover:border-l-black border-transparent right-0 z-100' />
      </Carousel>
      {/* <div className="embla__dots">
        {bagData.map((_, index) => (
          <div
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`cursor-pointer`}
          >o</div>
        ))}
      </div> */}
    </section>
  )
}

export default LandingPage