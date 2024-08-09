const users = [
  { name: "Ваня", 
    age: 28, 
  isAdmin: false },
  { name: "Саша", 
    age: 25, 
  isAdmin: true },
  { name: "Настя", 
    age: 20, isAdmin: 
    false },
  { name: "Лёша", 
    age: 19, 
  isAdmin: false },
  { name: "Стас", 
    age: 32, 
    isAdmin: true }
];

let user = 0;

for (let i = 0; i < users.length; i++) {
  if (!users[i].isAdmin) {
    NumberOfAdminst++; }
    else { continue;
      
    }
}

console.log(`Всего`, user ,`простых пользователей`)














