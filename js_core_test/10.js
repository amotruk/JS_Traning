var userJohn = {name: 'John', age: 30};

//var userMike = userJohn; //same object
var userMike =  Object.assign({}, userJohn);

userMike.name = 'Mike';

console.log(userMike.name);
console.log(userJohn.name);
