// Remove a(s) fatura(s) que não contém valor menor que 2000
function removeLessThan2000(invoices) {
  return invoices.filter((invoice) => invoice.value >= 2000);
}

// Remove a(s) fatura(s) que não contém valor entre que 2000 e 2500 e data não for menor ou igual a um mês atrás
function between2000And2500WithDate(invoices) {
  return invoices.filter(
    (invoice) =>
      !(invoice.value >= 2000 && invoice.value <= 2500) ||
      !(new Date().getMonth() - invoice.date.getMonth() <= 1)
  );
}

// Remove a(s) fatura(s) que não contém valor entre que 2500 e 3000 e data não for menor ou igual a dois meses atrás
function between2500And3000WithDate(invoices) {
  return invoices.filter(
    (invoice) =>
      !(invoice.value >= 2500 && invoice.value <= 3000) ||
      !(new Date().getMonth() - invoice.customer.inclusionDate.getMonth() <= 2)
  );
}

// Remove a(s) fatura(s) que não contém valores maiores que 4000 e o cliente não for de algum estado do sul do Brasil
function removeGreaterThan4000(invoices) {
  // Estados No Sul Do Brasil
  const southStates = ["Paraná", "Santa Catarina", "Rio Grande do Sul"];
  return invoices.filter(
    (invoice) =>
      !(invoice.value > 4000) &&
      !(southStates.includes(invoice.customer.state))
  );
}

// Retorno das funções
module.exports = {
  removeLessThan2000,
  between2000And2500WithDate,
  between2500And3000WithDate,
  removeGreaterThan4000
};
