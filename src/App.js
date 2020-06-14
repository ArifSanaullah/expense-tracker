import React, { useReducer } from "react";
import "./App.css";
import Balance from "./components/Balance/";
import Summary from "./components/Summary/";
import TrxContext from "./contexts/Transaction";
import trxReducer from "./reducers/Transaction";
import Transaction from "./components/Transaction";

const initialState = {
  transaction: {
    trxType: "",
    trxName: "",
    trxAmount: "",
  },
  transactions: [
    { trxType: "income", trxName: "Test income 1", trxAmount: 3545 },
    { trxType: "expense", trxName: "Test expense 1", trxAmount: 485 },
    { trxType: "income", trxName: "Test income 2", trxAmount: 45 },
  ],
};

function App() {
  const [state, dispatch] = useReducer(trxReducer, initialState);
  return (
    <TrxContext.Provider value={{ state, dispatch }}>
        <div className="container">
          <Transaction />
          <Balance />
          <Summary />
        </div>
    </TrxContext.Provider>
  );
}

export default App;
