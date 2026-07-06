import { About } from "@/components/About";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { InfoSection } from "@/components/InfoSection";
import { LocationSection } from "@/components/LocationSection";
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

      <FadeIn>
        <About testimonials={testimonials} />
      </FadeIn>

      <FadeIn>
        <Gallery instagramUrl={INSTAGRAM_URL} />
      </FadeIn>

      <FadeIn>
        <InfoSection />
      </FadeIn>

      <FadeIn>
        <LocationSection />
      </FadeIn>

      <Footer
        instagramHandle={INSTAGRAM_HANDLE}
        instagramUrl={INSTAGRAM_URL}
        facebookUrl={FACEBOOK_URL}
      />
    </div>
  );
}
