import React, { useContext } from "react";
import trxContext from "../../contexts/Transaction";
import getUniqueTrxsSum from "../../utils/getUniqueTrxsSum";

function Balance() {
  const {
    state: { transactions },
  } = useContext(trxContext);

  const totalIncome = getUniqueTrxsSum(transactions, "income");
  const totalExpenses = getUniqueTrxsSum(transactions, "expense");

  return (
    <div className="balance">
      <div className="quote">
        <q>
          The person who doesn't know where his next dollar is coming from
          usually doesn't know where his last dollar went.
        </q>
      </div>
      <div className="current">
        <h3>Current Balance</h3>
        <h1>{totalIncome - totalExpenses}</h1>
      </div>
    </div>
  );
}

export default Balance;
