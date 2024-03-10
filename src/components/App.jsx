import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts';

export const App = () => {
  return (
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
