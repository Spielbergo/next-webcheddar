import { useState } from 'react';

export default function GradientGenerator() {
  const [gradientType, setGradientType] = useState('linear');
  const [colors, setColors] = useState([{color: '#FF5733', stop: 0}, {color: '#33FF57', stop: 100}]);
  const [angle, setAngle] = useState(45);

  const addColorStop = () => {
    if (colors.length < 5) {
      setColors([...colors, {color: '#FFFFFF', stop: 100}]);
    }
  };

  const updateColorStop = (index, field, value) => {
    let updatedColors = [...colors];
    updatedColors[index][field] = value;
    setColors(updatedColors);
  };

  const removeColorStop = (index) => {
    if (colors.length > 2) {
      setColors(colors.filter((_, i) => i !== index));
    }
  };

  const gradientStyle = gradientType === 'linear'
    ? { background: `linear-gradient(${angle}deg, ${colors.map(c => `${c.color} ${c.stop}%`).join(', ')})` }
    : { background: `radial-gradient(circle, ${colors.map(c => `${c.color} ${c.stop}%`).join(', ')})` };

  const copyToClipboard = (cssCode) => {
    navigator.clipboard.writeText(cssCode).then(function() {
      alert("Copied to clipboard!");
    }, function(err) {
      alert('Error in copying CSS code: ', err);
    });
  }

  return (
    <div className="container">
      <div className="selectors">
        <label>
          Gradient Type:
          <select value={gradientType} onChange={(e) => setGradientType(e.target.value)}>
            <option value="linear">Linear</option>
            <option value="radial">Radial</option>
          </select>
        </label>
        {gradientType === 'linear' && (
          <label>
            Angle:
            <input type="number" value={angle} onChange={(e) => setAngle(e.target.value)} min="0" max="360" />
          </label>
        )}
        {colors.map((colorStop, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <label>
              Color:
              <input type="color" value={colorStop.color} onChange={(e) => updateColorStop(index, 'color', e.target.value)} />
            </label>
            <label>
              Stop (%):
              <input type="number" value={colorStop.stop} onChange={(e) => updateColorStop(index, 'stop', e.target.value)} min="0" max="100" />
            </label>
            <button onClick={() => removeColorStop(index)}>Remove</button>
          </div>
        ))}
        {colors.length < 5 && <button onClick={addColorStop}>Add Color Stop</button>}
      </div>
      <div className="preview" style={gradientStyle}></div>
      <button onClick={() => copyToClipboard(gradientStyle.background)}>Copy CSS Code</button>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }
        .selectors {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 20px;
        }
        .preview {
          width: 300px;
          height: 150px;
          border: 1px solid #ccc;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}
