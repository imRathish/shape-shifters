import { useDrag } from 'react-dnd';
import './Shape.css';

const Shape = ({ id, type }) => {
    
  // Enable drag feature for shapes and fade out the shape while being dragged  
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'shape',
    item: { id },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));

  return (
    <div
      ref={drag}
      className={`shape ${type}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    ></div>
  );
};

export default Shape;