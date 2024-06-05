
const usersSeed = [
  {name: 'John', age: 45},
  {name: 'Wade', age: 75},
  {name: 'Bob', age: 58},
  {name: 'Alice', age: 18},
  {name: 'Julian', age: 65},
  {name: 'Yuri', age: 36},
  {name: 'Garry', age: 78},
  {name: 'Ivan', age: 20},
  {name: 'Peter', age: 41},
  {name: 'Harry', age: 32},
  {name: 'Ron', age: 56},
  {name: 'Brandon', age: 30},
  {name: 'Max', age: 27},
  {name: 'Emily', age: 28},
]
const sql = `INSERT INTO users (name, age) VALUES (?, ?)`;
const seedUsersTable = (db) => {
  usersSeed.forEach(user => {
    db.run(sql, [user.name, user.age], (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  });
};

export default seedUsersTable;