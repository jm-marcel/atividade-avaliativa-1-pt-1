// Remove a(s) fatura(s) que contém valor menor que 2000
function removeLessThan2000(invoices) {
  return invoices.filter((invoice) => invoice.value >= 2000);
}

// Remove a(s) fatura(s) que contém valor entre que 2000 e 2500 e data menor ou igual a um mês atrás
function between2000And2500WithDate(invoices) {
  return invoices.filter(
    (invoice) =>
      !(invoice.value >= 2000 && invoice.value <= 2500) ||
      !(new Date().getMonth() - invoice.date.getMonth() <= 1)
  );
}

function between2500And3000WithDate(invoices) {
  console.log(invoices);
  return invoices.filter(
    (invoice) =>
      !(invoice.value >= 2500 && invoice.value <= 3000) ||
      !(new Date().getMonth() - invoice.customer.inclusionDate.getMonth() <= 2)
  );
}

// Retorno das funções
module.exports = {
  removeLessThan2000,
  between2000And2500WithDate,
  between2500And3000WithDate,
};
