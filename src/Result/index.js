import { CurrencyResult } from "./styled";

export const Result = ({ result }) => (
    <CurrencyResult>
        {result !== undefined && (
            <>
            {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
            {" "}
            <strong>
                {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
            </strong>
            </>

        )}
    </CurrencyResult>
);

export default Result;