import { useState } from 'react';
import Quadrant from './Quadrant';
import './App.css';

const initialShapes = [
  { id: 1, type: 'circle' },
  { id: 2, type: 'circle' },
  { id: 3, type: 'circle' },
  { id: 4, type: 'circle' },
  { id: 5, type: 'circle' },
];

const App = () => {
  const [shapes, setShapes] = useState(initialShapes);

  // Update shape type based on the target quadrant
  const handleDrop = (shapeId, targetQuadrant) => {
    setShapes((prevShapes) =>
      prevShapes.map((shape) => {
        if (shape.id === shapeId) {
          let newType = 'circle';
          if (targetQuadrant === 'topRight') newType = 'hexagon';
          else if (targetQuadrant === 'bottomLeft') newType = 'square';
          else if (targetQuadrant === 'bottomRight') newType = 'triangle';
          return { ...shape, type: newType };
        }
        return shape;
      })
    );
  };

  return (
    <div className="app">
      <Quadrant position="topLeft" shapes={shapes} onDrop={handleDrop} />
      <Quadrant position="topRight" shapes={shapes} onDrop={handleDrop} />
      <Quadrant position="bottomLeft" shapes={shapes} onDrop={handleDrop} />
      <Quadrant position="bottomRight" shapes={shapes} onDrop={handleDrop} />
    </div>
  );
};

export default App;