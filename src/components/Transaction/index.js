import React, { useContext } from "react";
import Income from "./Income";
import Expense from "./Expense";
import trxContext from "../../contexts/Transaction";
import { SET_TRX_TYPE, SET_TRX_NAME } from "../../actionTypes";

function Transaction() {
  const {
    state: {
      transaction: { trxName, trxType },
    },
    dispatch,
  } = useContext(trxContext);

  return (
    <div className="make-a-transaction">
      <h1 className="heading">Make a Transaction</h1>
      <select
        name="trxType"
        id="trxType"
        className="trxType trxInput"
        defaultValue=""
        onChange={(e) => {
          dispatch({
            type: SET_TRX_TYPE,
            payload: { trxType: e.target.value },
          });
        }}
      >
        <option value="" disabled>
          Select Transaction type
        </option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      {trxType && (
        <input
          type="text"
          placeholder="Transaction Name"
          className="trxInput"
          value={trxName || ""}
          onChange={(e) => {
            dispatch({
              type: SET_TRX_NAME,
              payload: { trxName: e.target.value },
            });
          }}
        />
      )}
      {trxType && trxName && trxType === "income" && <Income />}
      {trxType && trxName && trxType === "expense" && <Expense />}
    </div>
  );
}

export default Transaction;
