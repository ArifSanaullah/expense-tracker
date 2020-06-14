import React, { useContext } from "react";
import trxContext from "../../contexts/Transaction";

function Summary() {
  const { state } = useContext(trxContext);
  const { transactions } = state;

  const getUniqueTrxsSum = (transactions, trxType) => {
    return transactions
      .filter((trx) => trx.trxType === trxType)
      .reduce((a, b) => a + b.trxAmount, 0);
  };
  const totalIncome = getUniqueTrxsSum(transactions, "income");
  const totalExpenses = getUniqueTrxsSum(transactions, "expense");

  return transactions ? (
    <div className="summary-container">
      <div className="current">
        <h1>Current Account: {totalIncome - totalExpenses} </h1>
      </div>
      <div className="income">
        <h2>Total Income</h2>
        <h1>{totalIncome}</h1>
      </div>
      <div className="expense">
        <h2>Total Expense</h2>
        <h1>{totalExpenses}</h1>
      </div>
      <div className="transactions-container">
        <ul className="transactions">
          {transactions.map((trx, index) => (
            <li
              key={index}
              className={`transaction transaction-${trx.trxType}`}
            >
              <h2>{trx.trxName}</h2>
              <h1>{trx.trxAmount}</h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : null;
}

export default Summary;
