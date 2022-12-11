import { Routes, Route } from 'react-router-dom';
import { CreateContact } from 'components/CreateContact';
import { Header } from './components/Header';
import { SearchContact } from 'components/SearchContact';
import './styles/App.css';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="create" element={<CreateContact />} />
          <Route path="search" element={<SearchContact />} />
        </Route>
      </Routes>

      <div className="containerAppStyle"></div>
    </>
  );
}
