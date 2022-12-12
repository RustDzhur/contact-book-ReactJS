import { Routes, Route } from 'react-router-dom';
import { CreateContact } from 'components/CreateContact';
import { Header } from './components/Header';
import { SearchContact } from 'components/SearchContact';
import './styles/App.css';
import { SignIn } from 'components/SignIn/SignIn';
import { SignUp } from './components/SignUp/SignUp';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="create" element={<CreateContact />} />
        <Route path="search" element={<SearchContact />} />
      </Route>
    </Routes>
  );
}
