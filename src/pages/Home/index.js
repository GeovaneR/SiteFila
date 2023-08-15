import './style.css';
import { home } from '../../mocks/Home';

export function Home() {
  return (
    <h1>{home.hello}</h1>
  );
}
