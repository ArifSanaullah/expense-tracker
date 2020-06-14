export default (transactions, trxType) => {
  return transactions
    .filter((trx) => trx.trxType === trxType)
    .reduce((a, b) => a + b.trxAmount, 0);
};
