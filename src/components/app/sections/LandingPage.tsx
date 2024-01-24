'use client'

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Button } from '../../ui/button';

const bagData = [
  { name: 'Clean and elegant handbag cherishing', description: 'stay elegant !', imageSrc: '/bags/1.png' },
  { name: 'Elegant and sophisticated purse delight', description: 'embrace sophistication!', imageSrc: '/bags/2.png' },
  { name: 'Attractive and stylish bag allure', description: 'captivate with style!', imageSrc: '/bags/4.png' },
];

type Props = {}

const LandingPage = (props: Props) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000 })
  )
  return (
    <section className='w-screen py-10 mx-auto px-12 md:px-10 lg:px-20 xl:px-28'>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-[90%] mx-auto"
      >
        <CarouselContent>
          {bagData.map((bag, index) => (
            <CarouselItem key={index}>
              <div className='w-full bg-primary flex flex-col-reverse md:flex-row gap-2 justify p-4'>
                <div className='flex flex-col mx-auto'>
                  <h1 className='text-2xl font-bold'>{bag.name}</h1>
                  <h3 className='text-sm'>{bag.description}</h3>
                  <Button className='w-max'>Buy Now</Button>
                </div>
                <img className='w-full sm:w-[80%] md:w-1/3 lg:w-1/4 mx-auto' src={bag.imageSrc} alt={bag.name} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

export default LandingPage