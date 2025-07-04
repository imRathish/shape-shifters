import './Shape.css';

const Shape = ({ id, type }) => {
  return (
    <div
      className={`shape ${type}`}
    ></div>
  );
};

export default Shape;