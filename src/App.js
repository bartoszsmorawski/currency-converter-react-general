import { useState } from "react";
import Clock from "./Clock";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import { currencies } from "./currencies";
import "./style.css";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
    .find(({ short }) => short === currency)
    .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };


  return (
    <div>
      <Header/>
      <Clock/>
      <Form 
      result={result}
      calculateResult={calculateResult}
      />
    </div>
  );
}

export default App;