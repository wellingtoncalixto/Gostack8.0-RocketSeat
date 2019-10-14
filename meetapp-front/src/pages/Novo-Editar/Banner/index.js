import React from 'react';

import { Container } from './styles';
import camera from '~/assets/camera.svg';

export default function Banner() {
  return (
    <Container>
      <label htmlFor="avatar">
        <img src={camera} alt="" />
        <input type="file" id="avatar" accept="image/*" />
      </label>
    </Container>
  );
}
