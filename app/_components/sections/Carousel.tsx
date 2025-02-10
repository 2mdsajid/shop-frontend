"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

const slides = [
    {
        image: "/cover.png",
        title: "VALENTINE'S DAY SALE",
        subtitle: "ALL TOTES",
        price: "999",
        cta: "SHOP NOW",
        offer: "Limited Period Offer",
    },
    {
        image: "/cover.png",
        title: "NEW ARRIVALS",
        subtitle: "PREMIUM BAGS",
        price: "1599",
        cta: "EXPLORE NOW",
        offer: "Free Shipping",
    },
    {
        image: "/cover.png",
        title: "SPECIAL OFFER",
        subtitle: "BACKPACKS",
        price: "799",
        cta: "VIEW MORE",
        offer: "Extra 10% Off",
    },
]

export function HeroCarousel() {
    const [api, setApi] = React.useState<CarouselApi>()

    React.useEffect(() => {
        if (!api) return

        const interval = setInterval(() => {
            api.scrollNext()
        }, 5000)

        return () => clearInterval(interval)
    }, [api])

    return (
        <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
            <CarouselContent>
                {slides.map((slide, index) => (
                    <CarouselItem key={index}>
                        <div className="relative aspect-[3/1] w-full overflow-hidden">
                            <Image
                                src={slide.image || "/placeholder.svg"}
                                alt={slide.title}
                                fill
                                className="object-cover"
                                sizes="100vw"
                                priority={index === 0}
                            />
                            <div className="absolute inset-0 flex items-center justify-end p-6 md:p-12">
                                <div className="text-right">
                                    <h2 className="text-xl font-light text-white md:text-3xl">{slide.title}</h2>
                                    <h3 className="mt-2 text-3xl font-bold text-white md:text-6xl">{slide.subtitle}</h3>
                                    <div className="mt-2 text-2xl font-bold text-white md:text-5xl">at ₹{slide.price}</div>
                                    <Button asChild className="mt-4 bg-white text-pink-600 hover:bg-pink-100">
                                        <Link href="/shop">{slide.cta}</Link>
                                    </Button>
                                    <p className="mt-2 text-sm text-white md:text-base">{slide.offer}</p>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
        </Carousel>
    )
}

