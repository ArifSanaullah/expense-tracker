import React from "react";

const context = React.createContext({
  transaction: {
    trxType: "",
    trxName: "",
    trxAmount: "",
  },
  transactions: [],
});

export default context;
