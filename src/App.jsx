import "./styles.css";
import Axios from "axios";
import { useState } from "react";

export default function App() {
  const [generateExcuse, setGenerateExcuse] = useState("");

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
        setGenerateExcuse(res.data[0].excuse);
      }
    );
  };

  return (
    <div className="App">
      <h3>generate excuse</h3>
      <button onClick={() => fetchExcuse("party")}>party</button>
      <button onClick={() => fetchExcuse("office")}>office</button>
      <button onClick={() => fetchExcuse("family")}>family</button>
      <p>{generateExcuse}</p>
    </div>
  );
}
