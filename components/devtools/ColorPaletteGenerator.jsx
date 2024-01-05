import { useState, useEffect, useRef } from 'react';
import { CirclePicker, ChromePicker } from 'react-color';

export default function ColorPalette() {
  const [selectedColor, setSelectedColor] = useState('#FFFFFF');
  const [inputHex, setInputHex] = useState('');
  const [colors, setColors] = useState([]);
  const [suggestedPalettes, setSuggestedPalettes] = useState([]);
  const canvasRef = useRef(null);
  const modes = ['analogic', 'complement', 'quad'];

  useEffect(() => {
    if (selectedColor) {
      fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor.slice(1)}&mode=monochrome`)
        .then(response => response.json())
        .then(data => {
          setColors(data.colors.map(c => c.hex.value));
        })
        .catch(err => {
          console.error("Error fetching color scheme:", err);
        });

      Promise.all(modes.map(mode => 
        fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor.slice(1)}&mode=${mode}`)
          .then(response => {
            if (!response.ok) { 
              console.error(`Error with mode ${mode} for color ${selectedColor}:`, response.statusText);
              return null;
            }
            return response.json();
          })
          .then(data => ({ mode, data }))
      ))
      .then(allData => {
        const palettes = allData.map(({ mode, data }) => {
          if (!data) return { mode, colors: [] };
          if (data && Array.isArray(data.colors)) {
            return {
              mode,
              colors: data.colors.map(c => c && c.hex ? c.hex.value : null).filter(Boolean)
            };
          } else {
            console.error("Unexpected data structure:", data);
            return { mode, colors: [] };
          }
        });
        setSuggestedPalettes(palettes);
      })
      .catch(err => {
        console.error("Error fetching suggested color schemes:", err.message);
      });
    }
  }, [selectedColor]);

  const handleHexInputChange = (e) => {
    const value = e.target.value;
    setInputHex(value);
    if (/^#[0-9A-F]{6}$/i.test(value)) {
      setSelectedColor(value);
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(function() {
      alert("Copied to clipboard!");
    }, function(err) {
      alert('Error in copying text: ', err);
    });
  }

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  }

  const downloadSVG = (paletteColors) => {
    const boxWidth = 100;
    const boxHeight = 100;
    const svgContent = `
      <svg width="${boxWidth * paletteColors.length}" height="${boxHeight}" xmlns="http://www.w3.org/2000/svg">
        ${paletteColors.map((color, index) => `
          <rect x="${boxWidth * index}" y="0" width="${boxWidth}" height="${boxHeight}" fill="${color}" />
        `).join('')}
      </svg>
    `;

    const suggestedPalette = suggestedPalettes.find(p => p.colors[0] === paletteColors[0]);
    const filename = suggestedPalette ? `palette-${suggestedPalette.mode}.svg` : 'palette.svg';

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  const downloadPNG = (paletteColors) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    paletteColors.forEach((color, index) => {
      ctx.fillStyle = color;
      ctx.fillRect(index * 100, 0, 100, 100);
    });
    canvas.toBlob((blob) => {
      const url = window.URL.createObjectURL(blob);

      const suggestedPalette = suggestedPalettes.find(p => p.colors[0] === paletteColors[0]);
      const filename = suggestedPalette ? `palette-${suggestedPalette.mode}.png` : 'palette.png';

      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  // const selectSuggestedPalette = (paletteColors) => {
  //   setSelectedColor(paletteColors[0]);
  //   setColors(paletteColors);
  // }
  return (
    <div className="container">
        {/* Color Input Section */}
        <div className="color-input">
            <ChromePicker color={selectedColor} onChangeComplete={handleColorChange} />
            <CirclePicker color={selectedColor} onChangeComplete={handleColorChange} />
            <div className="color-box" style={{ backgroundColor: selectedColor }}></div>

            <label>
                Or Enter Hex Code:
                <input 
                    type="text" 
                    value={inputHex}
                    onChange={handleHexInputChange} 
                    placeholder="#FFFFFF"
                />
            </label>
        </div>

        {/* Main Palette */}
        <div className="palette">
            {colors.map((color, index) => (
                <div key={index} className="colorBox" style={{ backgroundColor: color }}>
                    <span onClick={() => copyToClipboard(color)}>{color}</span>
                    <button onClick={() => copyToClipboard(color)}>Copy</button>
                </div>
            ))}
        </div>
        <button onClick={() => downloadSVG(colors)}>Download SVG</button>
        <button onClick={() => downloadPNG(colors)}>Download PNG</button>

        {/* Suggested Palettes */}
        <div className="suggested-palettes-section">
            <h3>Suggested Palettes:</h3>
            <div className="suggested-palettes">
                {suggestedPalettes.map(({ mode, colors }, idx) => (
                    <div key={idx} className="palette-container">
                        <div className="palette-label">{mode}</div>
                        <div className="suggested-palette">
                            {colors.map((color, index) => (
                                <div key={index} className="colorBox" style={{ backgroundColor: color }}>
                                    <span onClick={() => copyToClipboard(color)}>{color}</span>
                                    <button onClick={() => copyToClipboard(color)}>Copy</button>
                                </div>
                            ))}
                        </div>
                        <div className="palette-actions">
                            <button onClick={() => downloadSVG(colors)}>Download SVG</button>
                            <button onClick={() => downloadPNG(colors)}>Download PNG</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        <canvas ref={canvasRef} width={colors.length * 100} height={100} style={{ display: 'none' }}></canvas>

        {/* Styles */}
        <style jsx>{`
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
                padding: 20px;
            }
            .color-input {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
            }
            .palette {
                display: flex;
                gap: 10px;
                margin-top: 20px;
            }
            .colorBox {
                position: relative;
                width: 80px;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
            }
            .colorBox span, .colorBox button {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            .colorBox button {
                margin-top: 25px;
            }
            .colorBox span {
                cursor: pointer;
                text-decoration: underline;
            }
            .colorBox span:hover {
                text-decoration: none;
            }
            .suggested-palettes-section {
                margin-top: 30px;
                width: 100%;
            }
            .suggested-palettes {
                display: flex;
                flex-wrap: wrap;
                gap: 15px;
                justify-content: center;
            }
            .palette-container {
                border: 1px solid #ddd;
                padding: 10px;
                transition: transform 0.2s;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .palette-container:hover {
                transform: scale(1.05);
            }
            .palette-label {
                font-weight: bold;
                margin-bottom: 10px;
            }
            .suggested-palette {
                display: flex;
                gap: 10px;
            }
            .palette-actions {
                display: flex;
                gap: 10px;
                margin-top: 10px;
            }
            .color-box {
              width: 500px;
              height: 500px;
            }
        `}</style>
    </div>
);
}