import './style.css';
import { Card } from '../../components/card';
import { Order } from '../../utils/order';
import { Product } from '../../utils/product';
import { pedidos } from '../../mocks/Orders';
import { menu } from '../../mocks/Menu';
import { useState, useEffect } from 'react';

export function Home() {
  const [tempoEspera, setTempoEspera] = useState(0);

  useEffect(() => {
    let totalTempoEspera = 0;

    pedidos.forEach(pedido => {
      const orderItems = pedido.map(item => {
        const menuItem = menu.find(menuItem => menuItem.name === item.name);
        return new Product(menuItem.name, menuItem.price, menuItem.prepTime);
      });

      const order = new Order(0, orderItems);
      totalTempoEspera += order.getPrepTime();
    });

    setTempoEspera(totalTempoEspera);
  }, []);

  return (
    <>
      <h1>O tempo de espera atual é de {tempoEspera} minutos</h1>
      <br />
      <ul>
        {pedidos.map((pedido, index) => {
          const orderItems = pedido.map(item => {
            const menuItem = menu.find(menuItem => menuItem.name === item.name);
            return new Product(menuItem.name, menuItem.price, menuItem.prepTime);
          });

          const order = new Order(index + 1, orderItems);

          const cardTitle = `${index + 1}`;
          const cardContent = orderItems.map(product => (
            <div key={product.getName()}>
              <h3>{product.getName()}</h3>
            </div>
          ));
          const cardPrice = `R$ ${order.getPrice().toFixed(2)}`;
          const cardPrepTime = `${order.getPrepTime()} minutos`;

          return (
            <li key={index}>
              <Card
                title={cardTitle}
                content={cardContent}
                price={cardPrice}
                prepTime={cardPrepTime}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
