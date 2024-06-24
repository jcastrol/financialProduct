import React from 'react';
import { render } from '@testing-library/react-native';
import ProductDetailSkeleton from '../../../src/components/molecules/ProductDetailSkeleton'; // Ajusta la ruta según tu estructura de archivos

describe('ProductDetailSkeleton Component', () => {
  it('renders correctly', () => {
    const { getAllByTestId } = render(<ProductDetailSkeleton />);

    // Verificar la cantidad de elementos Skeleton
    expect(getAllByTestId('skeleton-view').length).toBe(12); // 1 + 1 + 2*2 + 1 + 1 + 2*2 = 12 Skeleton elements

    // Verificar la cantidad de elementos Gap
    expect(getAllByTestId('gap').length).toBe(2); // 2 Gap elements
  });
});