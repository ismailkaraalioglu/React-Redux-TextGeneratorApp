// REACT HOOK
import { useState, useEffect, useRef, useMemo } from "react";

// REDUX
import { fetchTextGenerator } from "../redux/textgenerator/services";
import { useDispatch } from "react-redux";

function Form() {
  const [number, setNumber] = useState(4);
  const [select, setSelect] = useState("text");
  const didMountRef = useRef(false);

  let type = useMemo(() => {
    return { n: number, s: select };
  }, [number, select]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (didMountRef.current) {
      dispatch(fetchTextGenerator(type));
    } else {
      didMountRef.current = true;
    }
  }, [dispatch, number, select, type]);

  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor="">Paragraphs</label>
        <div className="number">
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="">Include HTML</label>
        <div className="select">
          <select
            className="select-control"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="text">No</option>
            <option value="html">Yes</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default Form;
