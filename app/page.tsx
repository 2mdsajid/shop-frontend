import { Footer } from "./_components/footer/FooterMain";
import { HeroCarousel } from "./_components/sections/Carousel";
import { CategoryShowcase } from "./_components/sections/CategoryShowcase";
import { LatestProductSection } from "./_components/sections/LatestProductSection";
import { PriceRangeShowcase } from "./_components/sections/PriceRangeShowcase";

export default async function Page() {

  return (
    <div>

      <HeroCarousel />
      <LatestProductSection />
      <CategoryShowcase />
      <PriceRangeShowcase />
      <Footer />
    </div>
  )
}

