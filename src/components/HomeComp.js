import { useEffect, useState } from "react";
import ErrorHandler from "@/components/ErrorHandler/ErrorHandler";
import { types, themes } from "@/components/ErrorHandler/config";

export default function HomeComp() {
  //ERROR HANDLER START
  const [show, setShow] = useState(false);
  const [messageProps, setMessageProps] = useState({});
  const showMessage = (text, theme, type) => {
    setMessageProps({ message: text, themes: theme, types: type });
    setShow(true);
  };
  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => setShow(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [show]);
  //ERROR HANDLER END

  return (
    <div>
      <ErrorHandler show={show} {...messageProps} />
      <br></br>
      HOME
      <br></br>
      <button
        className="btn"
        onClick={() =>
          showMessage(
            "There was an issue with the server",
            themes.light,
            types.warning
          )
        }
      >
        Show/Hide 1
      </button>
      <br></br>
      <button
        className="btn"
        onClick={() =>
          showMessage(
            "There is no issue with the server",
            themes.light,
            types.error
          )
        }
      >
        Show/Hide 2
      </button>
      <br></br>
      <button className="btn" onClick={() => showMessage()}>
        Show/Hide 3
      </button>
    </div>
  );
}
