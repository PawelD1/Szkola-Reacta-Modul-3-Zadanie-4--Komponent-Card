import React from "react";


import './App.css';
import Card from'./components/Card'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Card
        firstLetter="J"
        title="Pizza with Salami? Great idea!"
        date={(new Date()).toLocaleDateString()}
        intro= "The delicious pizza with salami and other ingredients. Try do it yourself!"
        content="This pizza is topped with authentic Italian salami, peppers, and Parmesan cheese for your favorite pizza night. ... I don't know if it is traditional but before the meals appetizers were served – often it was cheese, salami, and crackers – hard and soft cheeses and different flavors of salami."
        />
      </div>
    </div>
  );
}

export default App;

