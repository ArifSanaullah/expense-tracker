import React, { useContext } from "react";
import trxContext from "../../../contexts/Transaction";
import { SET_TRX_AMOUNT, ADD_TRX } from "../../../actionTypes/";

function TrxAmount() {
  const {
    state: {
      transaction: { trxAmount, trxType },
    },
    dispatch,
  } = useContext(trxContext);

  return (
    <div>
      <input
        type="text"
        value={trxAmount || ""}
        placeholder="Amount in numbers"
        className="trxInput trxAmount"
        onChange={(e) => {
          const amount = parseInt(e.target.value);
          dispatch({
            type: SET_TRX_AMOUNT,
            payload: { trxAmount: amount },
          });
        }}
      />

      <button
        className="addtrx-btn"
        onClick={() => {
          dispatch({
            payload: { trxAmount },
          });
          trxAmount && dispatch({ type: ADD_TRX });
        }}
      >
        {trxType === "income" ? "Add income" : "Add Expense"}
      </button>
    </div>
  );
}

export default TrxAmount;
