import {
  SET_TRX_AMOUNT,
  SET_TRX_NAME,
  SET_TRX_TYPE,
  ADD_TRX,
} from "../actionTypes";

const incomeReducer = (state, action) => {
  switch (action.type) {
    case SET_TRX_NAME:
      return {
        ...state,
        transaction: { ...state.transaction, ...action.payload },
      };

    case SET_TRX_TYPE:
      return {
        ...state,
        transaction: { ...state.transaction, ...action.payload },
      };

    case SET_TRX_AMOUNT:
      return {
        ...state,
        transaction: { ...state.transaction, ...action.payload },
      };

    case ADD_TRX:
      return {
        ...state,
        transactions: [...state.transactions, state.transaction],
        transaction: { trxAmount: "", trxName: "", trxType: "" },
      };

    default:
      return state;
  }
};

export default incomeReducer;
