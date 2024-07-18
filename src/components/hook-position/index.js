import { usePointerPosition } from './usePointerPosition.js';
import { useDelayedValue } from './useDelayedValue.js';
import './style.css'

export default function Canvas() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 300);
//   const pos3 = useDelayedValue(pos2, 100);
//   const pos4 = useDelayedValue(pos3, 100);
//   const pos5 = useDelayedValue(pos4, 100);
  return (
    <div className="position1-container">
      <Dot key="1" position={pos1} opacity={.5} />
      <Dot key="2" position={pos2} opacity={.5} />
      {/* <Dot key="3" position={pos3} opacity={0.6} />
      <Dot key="4" position={pos4} opacity={0.4} />
      <Dot key="5" position={pos5} opacity={0.2} />  */}
    </div>
  );
}

function Dot({ position, opacity }) {
  return (
        <div style={{
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        opacity,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        width: '10px',
        height: '10px',
        left: '-16px',
        top: '-16px'
        }} />
  );
}
