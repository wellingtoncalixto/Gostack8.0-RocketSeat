import React from 'react';
import { connect } from 'react-redux';
import {
  MdDelete,
  MdRemoveCircleOutline,
  MdAddCircleOutline,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

function Cart({ cart }) {
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
          {cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.formatPrice}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#191920" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
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
          ))}
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

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
