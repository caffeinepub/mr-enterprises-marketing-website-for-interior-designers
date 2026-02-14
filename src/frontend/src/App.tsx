import { SiteHeader } from './components/layout/SiteHeader';
import { HeroSection } from './components/sections/HeroSection';
import { GallerySection } from './components/sections/GallerySection';
import { CollectionsSection } from './components/sections/CollectionsSection';
import { CustomCarpetsCtaSection } from './components/sections/CustomCarpetsCtaSection';
import { BenefitsSection } from './components/sections/BenefitsSection';
import { ContactCtaSection } from './components/sections/ContactCtaSection';

// Feature flag to enable/disable Collections section
const SHOW_COLLECTIONS = false;

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <SiteHeader />
      <main className="flex-1 w-full">
        <HeroSection />
        <GallerySection />
        {SHOW_COLLECTIONS && <CollectionsSection />}
        <CustomCarpetsCtaSection />
        <BenefitsSection />
        <ContactCtaSection />
      </main>
    </div>
  );
}

export default App;
