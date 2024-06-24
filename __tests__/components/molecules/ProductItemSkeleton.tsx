import React from 'react';
import { render } from '@testing-library/react-native';
import ProductItemSkeleton from '../../../src/components/molecules/ProductItemSkeleton'; // Ajusta la ruta según tu estructura de archivos

describe('ProductItemSkeleton Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<ProductItemSkeleton />);
    
    expect(getByTestId('skeleton-view')).toBeTruthy();
  });
});