
import AllEncompassingSearch from "@/components/web_componets/AllEncompassingSearch";
import { AppStorePreview } from "@/components/web_componets/AppStorePreview";
import { FAQ } from "@/components/web_componets/Faq";
import { Footer } from "@/components/web_componets/footer";
import { Hero } from "@/components/web_componets/hero";
import { Navbar } from "@/components/web_componets/Navbar";
import { Pricing } from "@/components/web_componets/Pricing";
import { RealTimeConnection } from "@/components/web_componets/RealTimeConnection";
import { Testimonials } from "@/components/web_componets/Testimonials";
import { VideoPlayer } from "@/components/web_componets/VideoPlayer";



export default function Home() {
  return (
    <main className="w-full">
      <Navbar/>
      <Hero />
      <RealTimeConnection />
      <AllEncompassingSearch />
      <VideoPlayer />
      <Testimonials />
      <Pricing />
      <FAQ />
      <AppStorePreview />
      <Footer />
    </main>
  )
}
