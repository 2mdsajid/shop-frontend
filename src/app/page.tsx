import CategorizedBagsSection from "@/components/app/sections/CategorizedBagsSection";
import LandingPage from "@/components/app/sections/LandingPage";
import LatestBagsSection from "@/components/app/sections/LatestBagsSection";

export default function Home() {
  return (
    <>
      <LandingPage />
      <LatestBagsSection />
      <CategorizedBagsSection />
    </>
  );
}
