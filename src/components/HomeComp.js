import { useEffect, useState } from "react";
import ErrorHandler from "@/components/ErrorHandler/ErrorHandler";
import {
  types,
  themes,
  defaultSettings,
} from "@/components/ErrorHandler/config";

export default function HomeComp() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({
    message: "",
    themes: defaultSettings.themes,
    types: defaultSettings.types,
  });
  const showMessage = (
    text,
    theme = defaultSettings.themes,
    type = defaultSettings.types
  ) => {
    setMessage({ message: text, themes: theme, types: type });
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
      <button className="btn" onClick={() => showMessage()}>
        Show/Hide
      </button>
    </div>
  );
}
