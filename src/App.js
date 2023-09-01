import { useState } from "react";
import Clock from "./Clock";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import { currencies } from "./currencies";
import "./style.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

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
    <ThemeProvider theme={theme}>
      <Header/>
      <Clock/>
      <Form 
      result={result}
      calculateResult={calculateResult}
      />
    </ThemeProvider>
  );
}

export default App;