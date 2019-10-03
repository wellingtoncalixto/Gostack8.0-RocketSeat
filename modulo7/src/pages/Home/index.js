import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import * as ActionCart from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/formated';
import { ProductList } from './styles';
import api from '../../services/api';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      formatPrice: formatPrice(product.price),
    }));
    this.setState({ products: data });
  }

  handleAddProduct = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  render() {
    const { products } = this.state;
    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.formatPrice}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#fff" /> 3
              </div>

              <span>Adicionar ao carrino</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(ActionCart, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Home);
