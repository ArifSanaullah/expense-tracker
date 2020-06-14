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
    <div>
      Transaction
      <select
        name="trxType"
        id="trxType"
        onChange={(e) => {
          dispatch({
            type: SET_TRX_TYPE,
            payload: { trxType: e.target.value },
          });
        }}
        defaultValue=""
      >
        <option value="" disabled>
          Select
        </option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      {trxType && (
        <input
          type="text"
          value={trxName || ""}
          onChange={(e) => {
            dispatch({
              type: SET_TRX_NAME,
              payload: { trxName: e.target.value },
            });
          }}
          placeholder="Transaction Name"
        />
      )}
      {trxType && trxType === "income" && <Income />}
      {trxType && trxType === "expense" && <Expense />}
    </div>
  );
}

export default Transaction;
