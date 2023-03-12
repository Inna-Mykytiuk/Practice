import axios from 'axios';

//'https://dummyjson.com/users'
//беремо URL
axios.defaults.baseURL = 'https://dummyjson.com/users/';

//отримуємо юзерів
export async function getAllUsers() {
  //деструктуризуємо об'єкт так щоб була лише інфа про юзера
  const { data } = await axios();
  // console.log(data);
  return data;
}

//функція для отримання юзера за id
export async function getUserById(id) {
  const { data } = await axios(`${id}`);
  // console.log(data);
  return data;
}
