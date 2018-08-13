var john = {
    name: 'John', toString: function () {
        return `My name is ${this.name}!`
    }
};

console.log(`${john}`);// 'My name is John!';