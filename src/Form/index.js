import { useState } from "react";
import { currencies } from "../currencies";
import "./style.css";
import Result from "../Result";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={onSubmit}>
        <fieldset className="form__fieldset">
          <legend className="form__legend">Kalkulator:</legend>
          <p>
            <label>
              <span className="form__labelText">Kwota w PLN*:</span>
              <input
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                placeholder="Wpisz kwotę"
                className="form__field"
                type="number"
                step="0.01"
                required
              />
            </label>
          </p>
          <p>
            <label>
              <span className="form__labelText">Wymieniam na* :</span>
              <select
                className="form__field"
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
              >
                {currencies.map((currency) => (
                  <option key={currency.short} value={currency.short}>
                    {currency.name}
                  </option>
                ))}
              </select>
            </label>
          </p>
          <p>
            <button className="form__button ">Przelicz</button>
          </p>
          <Result result={result} />
        </fieldset>
        <p className="form__information">
          Informacje o kursie walut zostały pobrane z głównej strony NBP. Kurs
          walut pochodzi z dnia 20.03.2022.
        </p>
      </form>
    </div>
  );
};

export default Form;