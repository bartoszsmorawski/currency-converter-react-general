import { useState } from "react";
import { currencies } from "../currencies";
import { FormContainer, LabelText, Information, Legend, Button, Fieldset, FieldCurrency, FieldSum, } from "./styled";
import Result from "../Result";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <FormContainer>
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
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
              >
                {currencies.map((currency) => (
                  <option key={currency.short} value={currency.short}>
                    {currency.name}
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
          Informacje o kursie walut zostały pobrane z głównej strony NBP. Kurs
          walut pochodzi z dnia 20.03.2022.
        </Information>
      </form>
    </FormContainer>
  );
};

export default Form;