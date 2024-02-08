import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#f8f9fa";
      document.body.style.color = "black";
      showAlert("Enabled Light Mode", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#495057";
      document.body.style.color = "white";
      showAlert("Enabled Dark Mode", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          {/*  use exact for the exact matching of the url otherwise if you have urls /users and /users/home then it will open only /users not /users/home */}
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Try Textutils - Word Counter, Character Counter, Remove Extra Spaces"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
