Object.prototype.setName =  function (value) {
    this.name = value;
};

const a = {};

a.setName('John');

alert(a.name);
