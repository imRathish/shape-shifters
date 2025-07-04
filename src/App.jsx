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
  const [shapes,] = useState(initialShapes);

  return (
    <div className="app">
      <Quadrant position="topLeft" shapes={shapes}/>
      <Quadrant position="topRight" shapes={shapes}/>
      <Quadrant position="bottomLeft" shapes={shapes}/>
      <Quadrant position="bottomRight" shapes={shapes}/>
    </div>
  );
};

export default App;