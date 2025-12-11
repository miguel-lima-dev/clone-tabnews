const calculadora = require("../../models/calculadora.js");

test("2+2=4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("2+3=5", () => {
  const resultado = calculadora.somar(3, 2);
  expect(resultado).toBe(5);
});

test("2+0.5=2.5", () => {
  const resultado = calculadora.somar(0.5, 2);
  expect(resultado).toBe(2.5);
});

test("2+banana=Erro", () => {
  const resultado = calculadora.somar(2, "banana");
  expect(resultado).toBe("Erro");
});

test("banana+2=Erro", () => {
  const resultado = calculadora.somar("banana", 2);
  expect(resultado).toBe("Erro");
});
