import CategorizedBagsSection from "@/components/app/sections/CategorizedBagsSection";
import LandingPage from "@/components/app/sections/LandingPage";
import LatestBagsSection from "@/components/app/sections/LatestBagsSection";
import SectioinsLoading from "@/components/app/sections/SectioinsLoading";
import SectionTitle from "@/components/reusable/SectionTitle";
import { getProductCategories } from "@/lib/actions";
import { Suspense } from "react";

export default async function Home() {
  const { data: categories, message } = await getProductCategories()
  return (
    <>
      <LandingPage />
      <LatestBagsSection />
      {categories?.map((category) => (
        <section key={category} className='px-4 md:px-10 lg:px-20 xl:px-32'>
          <SectionTitle title={`${category}`} />
          <Suspense fallback={<SectioinsLoading />}>
            <CategorizedBagsSection category={category} />
          </Suspense>
        </section>
      ))}
    </>
  );
}
