import { useState } from 'react';

function Sidebar({ onSelectSection }) {
  const [activeMenu, setActiveMenu] = useState(null);

  const devToolsItems = ["Color Pallette Generator", "CSS Gradient Generator", "Tool C", "Tool D", "Tool E"];
  const seoToolsItems = ["Tool X", "Tool Y", "Tool Z", "Tool W", "Tool V"];

  return (
    <div className="sidebar">
      <div className="menu-item" onClick={() => setActiveMenu(activeMenu !== 'devtools' ? 'devtools' : null)}>
        Dev Tools
        <div className={`sub-menu ${activeMenu === 'devtools' ? 'expanded' : ''}`}>
            {devToolsItems.map((tool, idx) => (
              <div className="tool-item" key={idx} onClick={(e) => {
                e.stopPropagation(); // Prevent the menu from closing
                onSelectSection(`devtool-${tool}`);
              }}>
                {tool}
              </div>
            ))}
        </div>
      </div>
      <div className="menu-item" onClick={() => setActiveMenu(activeMenu !== 'seotools' ? 'seotools' : null)}>
        SEO Tools
        <div className={`sub-menu ${activeMenu === 'seotools' ? 'expanded' : ''}`}>
            {seoToolsItems.map((tool, idx) => (
              <div className="tool-item" key={idx} onClick={(e) => {
                e.stopPropagation(); // Prevent the menu from closing
                onSelectSection(`seotool-${tool}`);
              }}>
                {tool}
              </div>
            ))}
        </div>
      </div>
      <style jsx>{`
        .sidebar {
          width: 200px;
          border-right: 1px solid gray;
          padding: 1rem;
        }
        .menu-item:hover {
          cursor: pointer;
          color: purple;
          transform: scale(1.05);
          transition: transform 0.3s, color 0.3s;
        }
        .tool-item:hover {
          color: orange;
          transform: scale(1.1);
          transition: transform 0.2s, color 0.2s;
        }
        .sub-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease-in-out;
          margin-left: 20px;
        }
        .sub-menu.expanded {
          max-height: 150px;
        }
      `}</style>
    </div>
  );
}

export default Sidebar;
