import React from 'react';
import { render } from '@testing-library/react-native';
import ProductDetail from '../../../src/components/molecules/ProductDetail'; // Ajusta la ruta según tu estructura de archivos
import { Product } from '../../../src/core/models/Product';

const mockProduct: Product = {
  id: '123',
  name: 'Test Product',
  description: 'This is a test product',
  logo: 'https://example.com/logo.png',
  date_release: '01/01/2023',
  date_revision: '01/01/2024',
};

describe('ProductDetail Component', () => {
  it('renders correctly with given product data', () => {
    const { getByText, getByLabelText } = render(<ProductDetail data={mockProduct} />);

    expect(getByText('ID: 123')).toBeTruthy();
    expect(getByText('Información extra')).toBeTruthy();
    expect(getByText('Nombre')).toBeTruthy();
    expect(getByText('Test Product')).toBeTruthy();
    expect(getByText('Descripción')).toBeTruthy();
    expect(getByText('This is a test product')).toBeTruthy();
    expect(getByText('Logo')).toBeTruthy();
    expect(getByLabelText('Product logo')).toHaveProp('source', { uri: 'https://example.com/logo.png' });
    expect(getByText('Fecha de Liberación')).toBeTruthy();
    expect(getByText('01/01/2023')).toBeTruthy();
    expect(getByText('Fecha de Revisión')).toBeTruthy();
    expect(getByText('01/01/2024')).toBeTruthy();
  });
});