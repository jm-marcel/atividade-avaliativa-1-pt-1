// Remove a(s) fatura(s) que contém valor menor que 2000
function removeLessThan2000(invoices) {
  return invoices.filter((invoice) => invoice.value >= 2000);
}

// Retorno das funções
module.exports = { removeLessThan2000 };
