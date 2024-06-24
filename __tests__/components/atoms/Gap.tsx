import React from 'react';
import { render,  } from '@testing-library/react-native';
import Gap from '../../../src/components/atoms/Gap';


describe('Gap component', () => {
  it('renders with correct height', () => {
    const height = 20;
    const { getByTestId } = render(<Gap height={height} />);
    const gapView = getByTestId('gap');

    expect(gapView).toHaveStyle({
      height: height,
    });
  });
});