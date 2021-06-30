import { useState } from 'react';
import '../styles/switch.scss';

const Switch = () => {
  const [isPhoto, setIsPhoto] = useState(true);
  const [isUrgent, setIsUrgent] = useState(false);

  return (
    <>
      <label className="toggle-control">
        <p className="label">فقط عکس دار</p>
        <input type="checkbox" checked={isPhoto} onChange={() => setIsPhoto(!isPhoto)} />
        <span className="control"></span>
      </label>
      <label className="toggle-control">
        <div>
          <p className="label">فقط فوری ها</p>
          <input type="checkbox" checked={isUrgent} onChange={() => setIsUrgent(!isUrgent)} />
          <span className="control"></span>
        </div>
      </label>
    </>
  );
};

export default Switch;
