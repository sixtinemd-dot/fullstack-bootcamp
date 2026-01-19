import bcrypt from "bcrypt";

// example fake DB
const users = [];

export const registerUser = async (email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { id: users.length + 1, email, password: hashedPassword };
  users.push(user);
  return user;
};

export const getUserByEmail = async (email) => {
  return users.find(u => u.email === email);
};

export const getUsers = async () => {
  return users;
};
