import React, { useReducer } from "react";
import "./App.css";
import Balance from "./components/Balance/";
import Summary from "./components/Summary/";
import IncomeContext from "./contexts/Transaction";
import incomeReducer from "./reducers/Income";
import Transaction from "./components/Transaction";

const initialState = {
  transaction: {
    trxType: "",
    trxName: "",
    trxAmount: "",
  },
  transactions: [
    { trxType: "income", trxName: "Test income 1", trxAmount: 3545 },
    { trxType: "income", trxName: "Test income 2", trxAmount: 45 },
    { trxType: "expense", trxName: "Test expense 1", trxAmount: 485 },
  ],
};

function App() {
  const [state, dispatch] = useReducer(incomeReducer, initialState);
  return (
    <IncomeContext.Provider value={{ state, dispatch }}>
      <div>
        <Balance />
        <Transaction />
        <Summary />
      </div>
    </IncomeContext.Provider>
  );
}

export default App;
