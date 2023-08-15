import './style.css';
import { menu } from '../../mocks/Menu';

export function Home() {
  return (
    <ul>
      {menu.map((item) => (
        <li>
          <br/>
          {item.name}
          <br/>
          {item.prepTime}
          <br/>
          R${item.price}
          <br/>
        </li>
      ))}
    </ul>
  );
}
