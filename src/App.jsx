import { CreateContact } from 'components/CreateContact';
import { SearchContact } from 'components/SearchContact';
import './styles/App.css';

export function App() {
  return (
    <div className="containerAppStyle">
      <CreateContact />
      <SearchContact />
    </div>
  );
}
