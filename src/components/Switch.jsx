import { useContext } from 'react';
import '../styles/switch.scss';
import {AdsContext} from "../ListProvider";

const Switch = () => {
const {isPhoto, setIsPhoto, isUrgent, setIsUrgent} = useContext(AdsContext);

  return (
    <>
      <label className="toggle-control">
        <p className="label">فقط عکس دار</p>
        <input type="checkbox" checked={isPhoto} onChange={() => setIsPhoto(!isPhoto)} value={isPhoto} />
        <span className="control"></span>
      </label>
      <label className="toggle-control">
        <div>
          <p className="label">فقط فوری ها</p>
          <input type="checkbox" checked={isUrgent} onChange={() => setIsUrgent(!isUrgent)} value={isUrgent} />
          <span className="control"></span>
        </div>
      </label>
    </>
  );
};

export default Switch;
