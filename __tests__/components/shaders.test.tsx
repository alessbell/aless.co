import * as React from 'react';
import { render } from '../utils';
import Shaders from '../../src/components/shaders';

const shaders = Object.values(Shaders).map((S, idx) => <S key={idx} />);

jest.mock('gl-react');
describe('Shaders test', () => {
  // eslint-disable-next-line jest/expect-expect
  test('renders', () => {
    shaders.forEach((_, i) => render(shaders[i]));
  });
});
