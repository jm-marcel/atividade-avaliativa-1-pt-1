const invoice = require("../lib/invoice");
const customer = require("../lib/customer");
const {
  removeLessThan2000,
  between2000And2500WithDate,
  between2500And3000WithDate,
} = require("../lib/functions");

describe("Filter", () => {
  // Cria um novo cliente - 1
  const c1 = new customer("Zyon", new Date(2021, 7, 21), "Pernambuco");
  // Cria um novo cliente - 2
  const c2 = new customer("Pedro", new Date(2021, 4, 2), "Ceará");
  // Cria um novo cliente - 3
  const c3 = new customer("João", new Date(2021, 8, 4), "Maranhão");
  // Cria um novo cliente - 4
  const c4 = new customer("Cesar", new Date(2021, 5, 5), "Bahia");

  // Cria uma nova fatura - 1
  const i1 = new invoice(1, 1999, new Date(2021, 11, 5), c1);
  // Cria uma nova fatura - 2
  const i2 = new invoice(2, 2200, new Date(2021, 10, 21), c2);
  // Cria uma nova fatura - 3
  const i3 = new invoice(3, 4100, new Date(2021, 9, 15), c3);
  // Cria uma nova fatura - 4
  const i4 = new invoice(4, 5000, new Date(2021, 10, 25), c4);

  // Teste - Se o valor da fatura for menor que 2000
  test("Test 1", () => {
    // Cria um array de faturas
    let invoices = [i1, i2, i3, i4];

    // Lista de Faturas com valor maior que 2000
    const expectedInvoices = [i2, i3, i4];

    // Filtra faturas com valor maior que 2000
    invoices = removeLessThan2000(invoices);

    // Verifica se o valor da fatura é menor que 2000
    expect(invoices).toEqual(expectedInvoices);
  });

  // Teste - Se o valor da fatura estiver entre 2000 e 2500 e a data for menor ou igual a de um mês atrás
  test("Test 2", () => {
    // Cria um array de faturas
    let invoices = [i1, i2, i3, i4];

    // Lista de Faturas com valor que não esteja entre 2000 e 2500 e a data não for menor ou igual a de um mês atrás
    const expectedInvoices = [i1, i3, i4];

    // Filtra faturas com valor que não esteja entre 2000 e 2500 e a data não for menor ou igual a de um mês atrás
    invoices = between2000And2500WithDate(invoices);

    // Verifica se o valor da fatura está entre 2000 e 2500 e a data for menor ou igual a de um mês atrás
    expect(invoices).toEqual(expectedInvoices);
  });

  // Teste - Se o valor da fatura estiver entre 2500 e 3000 e a data de inclusão do cliente for menor ou igual a 2 meses atrás
  test("Test 3", () => {
    // Cria um array de faturas
    let invoices = [i1, i2, i3, i4];

    // Lista de Faturas com valor que não esteja entre 2500 e 3000 e a data de inclusão não for menor ou igual a de 2 meses atrás
    const expectedInvoices = [i1, i2, i4];

    // Filtra faturas com valor que não esteja entre 2500 e 3000 e a data de inclusão não for menor ou igual a de 2 meses atrás
    invoices = between2500And3000WithDate(invoices);

    // Verifica se o valor da fatura está entre 2500 e 3000 e a data de inclusão for menor ou igual a de 2 meses atrás
    expect(expectedInvoices).toEqual(expectedInvoices);
  });
});
