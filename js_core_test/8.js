var john = {
    name: 'John',
    greet(greeting){
        let context = this;
        let func = function() {
            console.log(`${greeting}, ${this.name}`)
        };
        return function (){
            func.apply(context, arguments);
        }
    }};
var greetJohn = john.greet('Aloha');
greetJohn();// 'Aloha, John';