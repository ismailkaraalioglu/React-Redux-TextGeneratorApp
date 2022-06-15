// REDUX
import { useSelector } from "react-redux";
import Error404 from "./Error404";

function Content() {
  const items = useSelector((state) => state.textgenerator.text);
  const error = useSelector((state) => state.textgenerator.error);

  return (
    <div className="content">
      {error && <Error404 error={error} />}
      {items && !error && <p>{items}</p>}
    </div>
  );
}

export default Content;
