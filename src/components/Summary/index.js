import React, { useContext } from "react";
import trxContext from "../../contexts/Transaction";
import getUniqueTrxsSum from "../../utils/getUniqueTrxsSum";

function Summary() {
  const {
    state: { transactions },
  } = useContext(trxContext);

  const totalIncome = getUniqueTrxsSum(transactions, "income");
  const totalExpenses = getUniqueTrxsSum(transactions, "expense");

  return transactions ? (
    <div className="summary">
      <div className="stats" >
        <div className="income">
          <h3>Total Income</h3>
          <h1>{totalIncome}</h1>
        </div>
        <div className="expense">
          <h3>Total Expense</h3>
          <h1>{totalExpenses}</h1>
        </div>
      </div>
      <div className="transactions-container">
        <ul className="transactions">
          {transactions.map((trx, index) => (
            <li
              key={index}
              className={`transaction transaction-${trx.trxType}`}
            >
              <h3>{trx.trxName}</h3>
              <h1>{trx.trxAmount}</h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : null;
}

export default Summary;
