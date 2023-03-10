import { useEffect, useState } from "react";
import ErrorHandler from "@/components/ErrorHandler/ErrorHandler";
import { types, themes } from "@/components/ErrorHandler/config";

export default function HomeComp() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({
    message: "",
    themes: themes.light,
    types: types.error,
  });
  const showMessage = (text, theme, type) => {
    text && setMessage({ message: text, themes: theme, types: type });
    setShow(true);
  };
  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => setShow(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [show]);

  return (
    <div>
      <ErrorHandler show={show} {...message} />
      <br></br>
      HOME
      <br></br>
      <button
        className="btn"
        onClick={() =>
          showMessage("Server is down", themes.light, types.warning)
        }
      >
        Show/Hide
      </button>
    </div>
  );
}
