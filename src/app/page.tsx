import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { InfoSection } from "@/components/InfoSection";
import { ShopExperience } from "@/components/ShopExperience";
import { categories, products, testimonials } from "@/data/catalog";

const INSTAGRAM_HANDLE = "@heart.desserts_sv";
const INSTAGRAM_URL = "https://instagram.com/heart.desserts_sv";
const FACEBOOK_URL = "https://facebook.com/heartdessertssv";

export default function HomePage() {
  return (
    <div className="pb-24">
      <Hero />
      <ShopExperience products={products} categories={categories} />
      <About testimonials={testimonials} />
      <Gallery instagramUrl={INSTAGRAM_URL} />
      <InfoSection />
      <Footer
        instagramHandle={INSTAGRAM_HANDLE}
        instagramUrl={INSTAGRAM_URL}
        facebookUrl={FACEBOOK_URL}
      />
    </div>
  );
}
