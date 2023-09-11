import { useState } from "react";
import {
  FormContainer,
  LabelText,
  Information,
  Legend,
  Button,
  Fieldset,
  FieldCurrency,
  FieldSum,
  Loading,
  Failure,
} from "./styled";
import Result from "../Result";
import { useRatesData } from "./useRatesData";

export const Form = () => {
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <FormContainer>
      {ratesData.state === "loading" ? (
        <Loading>
          Poczekaj chwilę ! Strona pobiera aktualny kurs walut z Europejskiego
          Banku Centralnego ! 💰💸💱
        </Loading>
      ) : ratesData.state === "error" ? (
        <Failure>
          Coś poszło nie tak ... Sprawdź, czy masz połączenie z internetem.
          Jeśli tak to problem leży po naszej stronie ! Wróć do nas później 😉
        </Failure>
      ) : (
        <></>
      )}
      <form onSubmit={onSubmit}>
        <Fieldset>
          <Legend>Kalkulator:</Legend>
          <p>
            <label>
              <LabelText>Kwota w PLN*:</LabelText>
              <FieldSum
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                placeholder="Wpisz kwotę"
                type="number"
                step="0.01"
                required
              />
            </label>
          </p>
          <p>
            <label>
              <LabelText>Wymieniam na* :</LabelText>
              <FieldCurrency
                as="select"
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
              >
                {!!ratesData.rates &&
                  Object.keys(ratesData.rates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
              </FieldCurrency>
            </label>
          </p>
          <p>
            <Button>Przelicz</Button>
          </p>
          <Result result={result} />
        </Fieldset>
        <Information>
          Strona pobiera aktualny kurs walut z Europejskiego Banku Centralnego.
        </Information>
      </form>
    </FormContainer>
  );
};

export default Form;
