import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';
import { HeroSection } from './components/sections/HeroSection';
import { GallerySection } from './components/sections/GallerySection';
import { CollectionsSection } from './components/sections/CollectionsSection';
import { BenefitsSection } from './components/sections/BenefitsSection';
import { ContactCtaSection } from './components/sections/ContactCtaSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <GallerySection />
        <CollectionsSection />
        <BenefitsSection />
        <ContactCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
