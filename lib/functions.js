function lessThan2000(invoices) {
  return invoices.filter((invoice) => invoice.value >= 2000);
}

module.exports = { lessThan2000 };
