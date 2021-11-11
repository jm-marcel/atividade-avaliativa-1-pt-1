module.exports = class Invoice {
  constructor(id, value, date, customer) {
    this.id = id;
    this.value = value;
    this.date = date;
    this.customer = customer;
  }
};
