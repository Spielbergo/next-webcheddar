import { useState } from 'react';

import Sidebar from '../components/Sidebar.component';
import ColorPaletteGenerator from '../components/devtools/ColorPaletteGenerator';
import GradientGenerator from '../components/devtools/GradientGenerator.module';

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
    <div className="devtools__container">
      <Sidebar onSelectSection={setSelectedSection} />
      <main>
        {renderSection()}
      </main>
    </div>
  );
}
