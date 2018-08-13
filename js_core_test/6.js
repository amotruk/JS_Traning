function Calculator() {
return {
    add: function (a, b) {
        return a + b;
    },
    fibonacci: function (a) {
        let sum = 0;
        for (let i = 1; i <= a; i++) {
            sum += i;
        }
        return sum;
    }
}
}

var calculator = Calculator();

console.log(calculator.add(5,5));// 10
console.log(calculator.fibonacci(10));// 55