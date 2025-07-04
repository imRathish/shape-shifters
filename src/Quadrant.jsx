import Shape from './Shape';
import { useDrop } from 'react-dnd';
import './Quadrant.css';

// A quadrant represents a simple filter that always 
// displays only a specific list of shape types based on it's own position

const Quadrant = ({ position, shapes, onDrop }) => {

  // Enable drop feature for Quadrant
  // Highlight the quadrant while shape is being dragged over it  
  // update the shapes list on drop
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'shape',
    drop: (item) => onDrop(item.id, position),
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  }));

  // Filtering shapes based on position and shape type
  const filteredShapes = shapes.filter((shape) => {
          if (position === 'topLeft') return shape.type === 'circle';
          if (position === 'topRight') return shape.type === 'hexagon';
          if (position === 'bottomLeft') return shape.type === 'square';
          if (position === 'bottomRight') return shape.type === 'triangle';
          return false;
        });

  return (
    <div ref={drop} className={`quadrant ${isOver ? 'highlight' : ''}`}>
      {filteredShapes.map((shape) => (
        <Shape key={shape.id} id={shape.id} type={shape.type} />
      ))}
    </div>
  );
};

export default Quadrant;