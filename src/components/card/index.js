import './style.css'

export function Card({ title, content, price, prepTime }) {
  return (
    <div className='title'>
      <table className="time-table">
        <thead>
          <tr>
            <th>Número do pedido</th>
            <th>Itens</th>
            <th>Valor Total</th>
            <th>Tempo de espera</th>
          </tr>
        </thead>
        <tbody>
          <td>{title}</td>
          <td>{content}</td>
          <td>{price}</td>
          <td>{prepTime}</td>
        </tbody>
      </table>
    </div>
  );
};