import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const [mode , setMode] = useState("light");
  const [alert , setAlert] = useState(null)
  const [darkcolor , setDarkColor] = useState(null)
  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const color1 = ()=> {
    if(mode === "light"){
      showAlert("Please enable dark mode first")
    }
    else{
      document.body.style.backgroundColor = "rgb(80, 90, 90)"
      document.body.style.color = "white"
      setDarkColor("rgb(80, 90, 90)")
    }
    
  }
  const color2 = ()=> {
    if(mode === "light"){
      showAlert("Please enable dark mode first")
    }
    else{
      document.body.style.backgroundColor = "rgb(63, 9, 77)"
      document.body.style.color = "white"
      setDarkColor("rgb(63, 9, 77)")
    }
  }
  const color3 = ()=> {
    if(mode === "light"){
      showAlert("Please enable dark mode first")
    }
    else{
      document.body.style.backgroundColor = "rgb(59, 40, 18)"
      document.body.style.color = "white"
      setDarkColor("rgb(59, 40, 18)")
    }
    
  }
  const modeButton = () =>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#2b272c"
      document.body.style.color = "white" 
      setDarkColor("#2b272c")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode ={mode} modeButton = {modeButton} bgColor={{color1:color1,color2:color2,color3:color3}}/>
    <Alert alert={alert}/>
      <Routes>
        <Route path="/" element={<div className="container"><Textform mode ={mode} darkcolor={darkcolor} showAlert={showAlert}/></div>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;