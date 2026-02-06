import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import './App.css';
import Header from "./Common/Header";

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000/api/v1/products' )
      const data = await res.json()
      setData(data.data)
      console.log(data.data)
    }
    fetchData()
  }, []) 
  return (
    <div className="App">
        <Header></Header>
        <Outlet context={[
          data,
          setData
        ]}></Outlet>
    </div>
  );
}

export default App;
