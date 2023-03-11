export const themes = {
  dark: "dark",
  light: "light",
};
export const types = {
  error: "error",
  success: "success",
  warning: "warning",
  info: "info",
};
export const defaultSettings = {
  show: false,
  themes: "dark",
  types: "error",
  message: "",
};

// IMPORT THE CSS FILE IN _app.js
// import "@/components/ErrorHandler/ErrorHandler.css";

// COPY THE ERROR HANDLER FOLDER ENTIRELY TO NEW PROJECT

// SAMPLE SNIPPET
/*--------------
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
--------------*/

// SAMPLE PLACING
/*--------------
  <ErrorHandler show={show} {...message} />
--------------*/

// SAMPLE CALLING
/*--------------
  onClick={() =>
    showMessage("Server is down", themes.light, types.warning)
  }
--------------*/
