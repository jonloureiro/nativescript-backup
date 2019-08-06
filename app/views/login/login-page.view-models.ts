import { user, login, register } from '../../view-models/user';



const singIn = () => {
  const email = user.get('email');
  const password = user.get('password');
  console.log(email);
  console.log(password);

  login(email, password)
    .then((sucess) => {
      console.log(sucess);
    });
}

const singUp = () => {
  const name = user.get('name');
  const email = user.get('email');
  const password = user.get('password');

  register(name, email, password)
    .then((sucess) => {
      console.log(sucess);
    });
}

export { singIn, singUp, user };
