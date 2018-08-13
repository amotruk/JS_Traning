function greet(name) {
    let greetings = ['Hi', 'Hello', 'Aloha', 'Ahoy'];
    let i = 0;
    return function () {
        i = i < 4 ? i : 0;
        console.log(`${greetings[i++]}, ${name}`)
    }
}


var greetJohn = greet('John');
greetJohn();//'Hi, John'
greetJohn();// 'Hello, John'
greetJohn();// 'Aloha, John'
greetJohn();// 'Ahoy, John'
greetJohn();// 'Hi, John'
greetJohn();// 'Hello, John'