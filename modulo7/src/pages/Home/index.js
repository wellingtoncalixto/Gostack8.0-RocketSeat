import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-vibe-crew-masculino/26/411-3605-026/411-3605-026_zoom1.jpg"
          alt=""
        />
        <strong>Tenis</strong>
        <span>R$ 120,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrino</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-vibe-crew-masculino/26/411-3605-026/411-3605-026_zoom1.jpg"
          alt=""
        />
        <strong>Tenis</strong>
        <span>R$ 120,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrino</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-vibe-crew-masculino/26/411-3605-026/411-3605-026_zoom1.jpg"
          alt=""
        />
        <strong>Tenis</strong>
        <span>R$ 120,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrino</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-vibe-crew-masculino/26/411-3605-026/411-3605-026_zoom1.jpg"
          alt=""
        />
        <strong>Tenis</strong>
        <span>R$ 120,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrino</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-vibe-crew-masculino/26/411-3605-026/411-3605-026_zoom1.jpg"
          alt=""
        />
        <strong>Tenis</strong>
        <span>R$ 120,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrino</span>
        </button>
      </li>
    </ProductList>
  );
}
