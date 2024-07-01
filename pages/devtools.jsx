import { useState } from 'react';

import Image from 'next/image';

import Sidebar from '../components/Sidebar.component';
import ColorPaletteGenerator from '../components/devtools/ColorPaletteGenerator';
import GradientGenerator from '../components/devtools/GradientGenerator.module';

import contactImage from '../public/header.webp';

export default function Home() {
  const [selectedSection, setSelectedSection] = useState(null);

  const renderSection = () => {
    switch (selectedSection) {
      case 'devtool-Color Pallette Generator':  // Assuming 'Tool A' in the sidebar is the Color Palette Generator
        return <ColorPaletteGenerator />;
      case 'devtool-CSS Gradient Generator':
        return <GradientGenerator />;
      // ... other cases for other tools ...
      default:
        return null;
    }
  }

  return (
    <>
    <header className="page_header">
            <div className="page_header__text">
                <h1 className="page_header__h1">Dev Tools</h1>
            </div>
            <Image 
                src={contactImage}
                className="page_header__image"
                alt="Header image - code on a screen wth an orange overlay" 
                width="1920" 
                height="400"
                priority 
            />   
        </header>
    <section className="devtools__container">
      <Sidebar onSelectSection={setSelectedSection} />
      
      <main>
        {renderSection()}
      </main>
    </section>
    </>
  );
}
