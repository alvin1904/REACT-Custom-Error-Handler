`I made it for me, but you can have it too`

#### 1. IMPORT THE CSS FILE IN \_app.js like this

```javascript
import "@/components/ErrorHandler/ErrorHandler.css";
```

#### 2. COPY THE ERRORHANDLER COMPONENT FOLDER ENTIRELY TO NEW PROJECT

[Download from here](https://drive.google.com/drive/folders/104WDwaRZFRqx0GWIaFdS9OeS0ddZObkj?usp=sharing) & rename the folder to ErrorHandler and place it at: 

```
@/components/ErrorHandler
```

#### 3. SAMPLE SNIPPET

```javascript
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
```

#### 4. SAMPLE PLACING

```javascript
<ErrorHandler show={show} {...messageProps} />
```

#### 5. SAMPLE FN CALLS

```javascript
  onClick={() =>
    showMessage("Server is down", themes.light, types.warning)
  }
```

```javascript
        onClick={() =>
          showMessage(
            "Check your email for more details",
            themes.light,
            types.info
          )
        }
```

```javascript
onClick={() => showMessage()}
```
