// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link,
//   Switch,
// } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/Pages/SignUp/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <SignUp />
    </>
  );
}

export default App;
