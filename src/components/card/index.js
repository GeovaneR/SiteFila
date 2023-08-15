import './style.css'
import { Cliente } from '../../utils/client';

export function Card(){

  const data = [
    { nome: "Pinto", tempodeespera: 20 },
    { nome: "Grande", tempodeespera: 12 },
    { nome: "Grosso", tempodeespera: 3 }
  ];

  return (
    <div className='title'>
      <h2>Lista de Espera</h2>
      <table className="time-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tempo de Espera</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.nome}</td>
              <td>{entry.tempodeespera}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};