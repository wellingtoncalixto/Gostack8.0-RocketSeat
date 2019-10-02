import React from 'react';
import {
  MdDelete,
  MdRemoveCircleOutline,
  MdAddCircleOutline,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>QTD</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-vibe-crew-masculino/26/411-3605-026/411-3605-026_zoom1.jpg"
                alt=""
              />
            </td>
            <td>
              <strong>Tenis</strong>
              <span>R$100</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#191920" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#191920" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$100,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#191920" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">FInalizer Pedido</button>

        <Total>
          <span>
            Total: <strong>R$100.00</strong>
          </span>
        </Total>
      </footer>
    </Container>
  );
}
