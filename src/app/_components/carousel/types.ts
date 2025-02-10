export interface CarouselItem {
    image: string;
    title: string;
    description: string;
  }
  
  export interface CarouselProps {
    items: CarouselItem[];
    autoPlayInterval?: number;
  }
  
  export interface CarouselItemProps extends CarouselItem {
    isActive: boolean;
  }


  export const carouselItems: CarouselItem[] = [
    {
      image: "/lp.jpg", // Random forest image
      title: "Explore the Forest",
      description: "Discover the beauty of lush green landscapes.",
    },
    {
      image: "/lp.jpg", // Random city night image
      title: "City Lights",
      description: "Experience the vibrant energy of urban life.",
    },
    {
      image: "/lp.jpg", // Random beach image
      title: "Beach Vibes",
      description: "Relax by the calming waves of the ocean.",
    },
  ];
  