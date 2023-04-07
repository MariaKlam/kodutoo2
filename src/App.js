import React from "react";
import "./App.css";
import Card from "./Components/Card";

import pariisPilt from "./pildid/pariis.jpg";
import londonPilt from "./pildid/london.jpg";
import newyorkPilt from "./pildid/newyork.jpg";

function App() {
  const linn1 = {
    nimi: '"Summer in Paris"',
    autor: "Depositphotos",
  };
  const linn2 = {
    nimi: '"Spring in London"',
    autor: "Shutterstock",
  };

  const linn3 = {
    nimi: '"Busy New York"',
    autor: "Depositphotos",
  };

  return (
    <div className="background">
      <div className="card-conteiner">
        <Card linnaNimi={linn1.nimi} autor={linn1.autor} pilt={pariisPilt} />
        <Card linnaNimi={linn2.nimi} autor={linn2.autor} pilt={londonPilt} />
        <Card linnaNimi={linn3.nimi} autor={linn3.autor} pilt={newyorkPilt} />
      </div>
    </div>
  );
}

export default App;
