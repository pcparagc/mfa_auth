import { isArray } from 'util';

const fs = require('fs');

const storagePath = './storage';
const usersPath = `${storagePath}/users.json`;

const initialUsers = {
  admin: {
    username: 'admin',
    password: 'admin',
  },
  parag: {
    username: 'parag',
    password: 'DaemonDark',
  },
  avani: {
    username: 'avani',
    password: 'PrettyPink',
  },
  sulaxmi: {
    username: 'sulaxmi',
    password: 'Suu#001',
  },
};

export function initStorage() {
  if (!fs.existsSync(storagePath)) fs.mkdirSync(storagePath);
  if (!fs.existsSync(usersPath)) setUsers(initialUsers);
}

export function getUser(username) {
  return getUsers()[username];
}

export function setUser(user) {
  const users = getUsers();
  users[user.username] = user;
  setUsers(users);
}

function getUsers() {
  let users;
  if (fs.existsSync(usersPath)) {
    users = JSON.parse(fs.readFileSync(usersPath).toString());
  }
  return users || {};
}

function setUsers(users) {
  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
}
