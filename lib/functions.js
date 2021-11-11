function removeLessThan2000(invoices) {
  return invoices.filter((invoice) => invoice.value >= 2000);
}

module.exports = { removeLessThan2000 };
