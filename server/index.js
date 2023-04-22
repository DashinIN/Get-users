const express = require('express');
const cors = require('cors')


const app = express();
app.use(cors());

const generateUsers = () => {
const names = ['Alex', 'Andrew', 'Anton', 'Nikolay', 'Kirill', 'Galina', 'Kate', 'Alena', 'Ivan', 'Dan', 'Max', 'Cristine', 'Sergey', 'Yuri', 'Elza', 'Ilya', 'Grirory', 'Gleb', 'Takhir', 'Tatyana', 'Nataly', 'Valentine', 'Egor', 'Valentin', 'Kseniya', 'Artem'];
const surnames = ['Smith', 'Johnson', 'Brown', 'Taylor', 'Anderson', 'Wilson', 'Moore', 'Walker', 'Jackson', 'White', 'Harris', 'Martin', 'Lee', 'Lewis', 'Allen', 'Young', 'King', 'Wright', 'Hall', 'Scott', 'Green', 'Baker', 'Adams', 'Nelson', 'Carter'];
const groups = ['Все', 'Руководство', 'Бухгалтерия', 'Отдел кадров', 'Разработка'];

function generateRandomName() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
  return `${randomName} ${randomSurname}`;
}

function generateRandomGroup() {
  return groups[Math.floor(Math.random() * groups.length)];
}

const result = [];

for (let i = 1; i <= 300; i++) {
  result.push({ id: i, name: generateRandomName(), group: generateRandomGroup() });
}
return result
}

const users = generateUsers()

const groups = [
  { id: 0, name: 'Все' },
  { id: 1, name: 'Руководство' },
  { id: 2, name: 'Бухгалтерия' },
  { id: 3, name: 'Отдел кадров' },
  { id: 4, name: 'Разработка' },
];


app.get('/groups', (req, res) => {
  res.json(groups);
});


app.get('/groups/:groupId/users', (req, res) => {
  const groupId = parseInt(req.params.groupId);
  const sortOrder = req.query.sort;
  
  const group = groups.find(group => group.id === groupId);

  
  if(sortOrder!=="all") {
    if(sortOrder==="normal") {

      if (groupId !== 0) {
        const filteredUsers = users.filter(user => user.group === group.name).sort((a, b) => a.name.localeCompare(b.name));
        res.json(filteredUsers);
      
        } else {
          res.json(users.sort((a, b) => a.name.localeCompare(b.name)));
        }
        
    }
    if(sortOrder==="reverse") {

      if (groupId !== 0) {
        const filteredUsers = users.filter(user => user.group === group.name).sort((b, a) => a.name.localeCompare(b.name));
        res.json(filteredUsers);
      
        } else {
          res.json(users.sort((b, a) => a.name.localeCompare(b.name)));
        }

    }

  }
  

  if (groupId !== 0) {
  const filteredUsers = users.filter(user => user.group === group.name);
  res.json(filteredUsers);

  } else {
    res.json(users);
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});