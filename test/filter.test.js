const invoice = require("../lib/invoice");
const customer = require("../lib/customer");
const {
  removeLessThan2000,
  between2000And2500WithDate,
} = require("../lib/functions");

describe("Filter", () => {
  // Cria um novo cliente - 1
  const c1 = new customer("Zyon", new Date(2021, 7, 21), "Pernambuco");
  // Cria um novo cliente - 2
  const c2 = new customer("Pedro", new Date(2021, 4, 2), "Ceará");
  // Cria um novo cliente - 3
  const c3 = new customer("João", new Date(2021, 8, 4), "Maranhão");

  // Cria uma nova fatura - 1
  const i1 = new invoice(1, 1500, new Date(2021, 8, 5), c1);
  // Cria uma nova fatura - 2
  const i2 = new invoice(2, 1900, new Date(2021, 9, 21), c2);
  // Cria uma nova fatura - 3
  const i3 = new invoice(3, 1800, new Date(2021, 9, 5), c3);

  // Teste - Se o valor da fatura for menor que 2000
  test("Test 1", () => {
    // Cria um array de faturas
    let invoices = [i1, i2, i3];

    // Lista de Faturas com valor maior que 2000
    const expectedInvoices = [];

    // Filtra faturas com valor maior que 2000
    invoices = removeLessThan2000(invoices);

    // Verifica se o valor da fatura é menor que 2000
    expect(invoices).toEqual(expectedInvoices);
  });

  // Teste - Se o valor da fatura estiver entre 2000 e 2500 e a data for menor ou igual a de um mês atrás
  test("Test 2", () => {
    // Cria um array de faturas
    let invoices = [i1, i2, i3];

    // Lista de Faturas com valor que não esteja entre 2000 e 2500 e a data não for menor ou igual a de um mês atrás
    const expectedInvoices = [i1, i2, i3];

    // Filtra faturas com valor que não esteja entre 2000 e 2500 e a data não for menor ou igual a de um mês atrás
    invoices = between2000And2500WithDate(invoices);

    // Verifica se o valor da fatura está entre 2000 e 2500 e a data for menor ou igual a de um mês atrás
    expect(expectedInvoices).toEqual(expectedInvoices);
  });
});
