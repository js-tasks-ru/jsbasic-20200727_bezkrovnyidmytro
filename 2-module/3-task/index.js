let calculator = {
  a: 0,
  b: 0,
  read: function() {
    let a = prompt('Please enter first number (integer): ');
    let b = prompt('Please enter second number (integer): ');

    this.a = Number(a);
    this.b = Number(b);

    return true;
  },
  sum: function() {
    return this.a + this.b;
  },
  mul: function() {
    return this.a * this.b;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
