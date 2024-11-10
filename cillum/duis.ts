const person = {
  name: 'John',
  age: 30,
  address: 'New York'
};

const result = omit(person, ['age', 'address']);
console.log(result); // Output: { name: 'John' }
