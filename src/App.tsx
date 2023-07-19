import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Chart from "./routes/Chart";
import { ConfigProvider, theme, Card } from "antd";
import { useState } from "react";
export default function App() {
  const defaultColor = window.matchMedia("(prefers-color-scheme:dark)").matches
    ? "dark"
    : "light";
  const currentColor = () => {
    const current = localStorage.getItem("color");
    return current || defaultColor;
  };
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode]: any = useState(
    currentColor() == "dark" ? true : false
  );
  const handleClick = () => {
    localStorage.setItem("color", currentColor() == "dark" ? "light" : "dark");
    const defailtTheme = localStorage.getItem("color");
    setIsDarkMode(defailtTheme == "light" ? false : true);
  };
  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <Card style={{ border: "none", height: '107vh' }}>
        <i
          onClick={handleClick}
          style={{
            color: isDarkMode == true ? "gold" : "blue",
            fontSize: 30,
            cursor: "pointer",
          }}
          className={`fa-solid fa-${isDarkMode == true ? "sun" : "moon"}`}
        ></i>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
        </Routes>
      </Card>
    </ConfigProvider>
  );
}
