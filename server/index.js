const express = require('express');
const cors = require('cors')


const app = express();
app.use(cors());

const users = [
  { id: 1, name: 'John', group: 'Руководство' },
  { id: 2, name: 'Jane', group: 'Бухгалтерия' },
  { id: 3, name: 'Bob', group: 'Отдел кадров' },
  { id: 4, name: 'Alice', group: 'Отдел кадров' },
  { id: 4, name: 'Alice2', }, 
];

const groups = [
  { id: 1, name: 'Руководство' },
  { id: 2, name: 'Бухгалтерия' },
  { id: 3, name: 'Отдел кадров' },
  { id: 4, name: 'Другие' },
  // ...
  // Добавьте данные о группах в массив `groups`.
];

// Обработчик запроса на получение списка всех пользователей
app.get('/users', (req, res) => {
  res.json(users);
});

// Обработчик запроса на получение списка групп
app.get('/groups', (req, res) => {
  res.json(groups);
});

// Обработчик запроса на получение списка пользователей в определенной группе
app.get('/groups/:groupId/users', (req, res) => {
  const groupId = parseInt(req.params.groupId);
  const filteredUsers = users.filter(user => user.groupId === groupId);
  res.json(filteredUsers);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});