function outputCarWithDefault(object) {
    console.log(`Make: ${object.make}, wheels: ${object.wheels || '4'}`)
}


outputCarWithDefault({make: 'Ford'});// Make: Ford, wheels: 4
outputCarWithDefault({make: 'Ford', wheels: 6});// Make: Ford, wheels: 6