import GSAPProvider from "@/components/providers/GSAPProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/HeroSection";
import MyStorySection from "@/components/sections/MyStorySection";
import JourneySection from "@/components/sections/JourneySection";
import WhatIDoSection from "@/components/sections/WhatIDoSection";
import CreativeProcessSection from "@/components/sections/CreativeProcessSection";
import SelectedWorksSection from "@/components/sections/SelectedWorksSection";
import ThoughtsStoriesSection from "@/components/sections/ThoughtsStoriesSection";

export default function Home() {
  return (
    <GSAPProvider>
      <Navbar />
      <main>
        <HeroSection />
        <MyStorySection />
        <JourneySection />
        <WhatIDoSection />
        <CreativeProcessSection />
        <SelectedWorksSection />
        <ThoughtsStoriesSection />
      </main>
      <Footer />
    </GSAPProvider>
  );
}
