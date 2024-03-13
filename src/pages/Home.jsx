import { useSelector } from 'react-redux';
import { getUserName } from '../redux/selectors';

export const Home = () => {
  const name = useSelector(getUserName);

  const checkUser = () => {
    if (name) {
      return `Hello ${name}, your contact base is already waiting for you.`;
    } else {
      return "Hello user, to use the private contacts base, please log in or create an account if you don't have one yet.";
    }
  };

  return (
    <main>
      <h1>{checkUser()}</h1>
    </main>
  );
};
