const invoice = require("../lib/invoice");
const customer = require("../lib/customer");
const { removeLessThan2000 } = require("../lib/functions");

describe("Filter", () => {
  // Se o valor da fatura for menor que 2000
  test("Se o valor da fatura for menor que 2000", () => {
    // Cria um novo cliente - 1
    const c1 = new customer("Zyon", new Date(2000, 1, 1), "Pernambuco");
    // Cria um novo cliente - 2
    const c2 = new customer("Pedro", new Date(2000, 2, 2), "Ceará");
    // Cria um novo cliente - 3
    const c3 = new customer("João", new Date(2000, 3, 3), "Maranhão");

    // Cria uma nova fatura - 1
    const i1 = new invoice(1, 10000, new Date(2000, 1, 1), c1);
    // Cria uma nova fatura - 2
    const i2 = new invoice(2, 2000, new Date(2000, 2, 2), c2);
    // Cria uma nova fatura - 3
    const i3 = new invoice(3, 500, new Date(2000, 3, 3), c3);

    // Cria um array de faturas
    let invoices = [i1, i2, i3];

    // Lista de Faturas com valor maior que 2000 (Falha Proposital)
    const expectedInvoices = [i1, i3];

    // Filtra faturas com valor maior que 2000
    invoices = removeLessThan2000(invoices);

    // Verifica se o valor da fatura é menor que 2000
    expect(invoices).toEqual(expectedInvoices);
  });
});
