import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import './styles/App.css';
import { SignIn } from 'components/SignIn/SignIn';
import { SignUp } from './components/SignUp/SignUp';
import { ContactBook } from 'components/ContactBook/ContactBook';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="contacts" element={<ContactBook />} />
      </Route>
    </Routes>
  );
}
