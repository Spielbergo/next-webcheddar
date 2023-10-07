import { useState } from 'react';

function ColorPaletteGenerator() {
  const [colors, setColors] = useState([]);

  const addColor = (color) => {
    if (colors.length < 5 && !colors.includes(color)) {
      setColors(prevColors => [...prevColors, color]);
    }
  }

  const removeColor = (color) => {
    setColors(prevColors => prevColors.filter(c => c !== color));
  }

  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

  const generateRandomPalette = () => {
    let randomColors = [];
    for (let i = 0; i < 5; i++) {
      randomColors.push(generateRandomColor());
    }
    setColors(randomColors);
  }

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color).then(function() {
      alert("Copied to clipboard!");
    }, function(err) {
      alert('Error in copying color code: ', err);
    });
  }

  return (
    <div className="container">
      <input type="color" onChange={(e) => addColor(e.target.value)} />
      <button onClick={generateRandomPalette}>Generate Random Palette</button>
      <div className="palette">
        {colors.map((color, index) => (
          <div key={index} className="colorBox" style={{ backgroundColor: color }}>
            <span onClick={() => copyToClipboard(color)}>{color}</span>
            <button onClick={() => removeColor(color)}>Remove</button>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }
        .palette {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }
        .colorBox {
          width: 100px;
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          position: relative;
        }
        .colorBox span {
          cursor: pointer;
        }
        .colorBox span:hover {
          opacity: 0.7;
        }
        .colorBox button {
          position: absolute;
          bottom: 5px;
          right: 5px;
          background-color: rgba(255, 255, 255, 0.6);
          border: none;
        }
      `}</style>
    </div>
  );
}

export default ColorPaletteGenerator;
