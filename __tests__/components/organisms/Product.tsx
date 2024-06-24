import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProductContainer from '../../../src/components/organisms/Product'; // Ajusta la ruta según tu estructura de archivos
import { Product } from '../../../src/core/models/Product';

describe('ProductContainer Component', () => {
  const mockHandleUpdate = jest.fn();
  const mockHandleDelete = jest.fn();

  const productData: Product = {
    id: '1',
    name: 'Test Product',
    description: 'This is a test product',
    logo: 'https://example.com/logo.png',
    date_release: '2022-01-01',
    date_revision: '2022-12-01',
  };

  it('renders loading state correctly', () => {
    const { getByTestId } = render(
      <ProductContainer
        data={undefined}
        isLoading={true}
        isError={false}
        handleDelete={mockHandleDelete}
        handleUpdate={mockHandleUpdate}
      />
    );

    // Verificar que se muestra el esqueleto de carga
    expect(getByTestId('skeleton-product-detail')).toBeTruthy();
  });

  it('renders error state correctly', () => {
    const { queryByText } = render(
      <ProductContainer
        data={undefined}
        isLoading={false}
        isError={true}
        handleDelete={mockHandleDelete}
        handleUpdate={mockHandleUpdate}
      />
    );

    // Verificar que se muestra el mensaje de error
    expect(queryByText('Hubo un problema ,intenta otra vez')).toBeTruthy();
  });

  it('renders product data correctly', () => {
    const { getByText, getByLabelText } = render(
      <ProductContainer
        data={productData}
        isLoading={false}
        isError={false}
        handleDelete={mockHandleDelete}
        handleUpdate={mockHandleUpdate}
      />
    );

    // Verificar que los datos del producto se muestran correctamente
    expect(getByText('Test Product')).toBeTruthy();
    expect(getByText('This is a test product')).toBeTruthy();
    expect(getByLabelText('Product logo')).toBeTruthy();
    expect(getByText('2022-01-01')).toBeTruthy();
    expect(getByText('2022-12-01')).toBeTruthy();
  });

  it('calls handleUpdate when Edit button is pressed', () => {
    const { getByText } = render(
      <ProductContainer
        data={productData}
        isLoading={false}
        isError={false}
        handleDelete={mockHandleDelete}
        handleUpdate={mockHandleUpdate}
      />
    );

    const editButton = getByText('Editar');
    fireEvent.press(editButton);

    // Verificar que la función handleUpdate se llama cuando se presiona el botón de editar
    expect(mockHandleUpdate).toHaveBeenCalled();
  });

  it('calls handleDelete when Delete button is pressed', () => {
    const { getByText } = render(
      <ProductContainer
        data={productData}
        isLoading={false}
        isError={false}
        handleDelete={mockHandleDelete}
        handleUpdate={mockHandleUpdate}
      />
    );

    const deleteButton = getByText('Eliminar');
    fireEvent.press(deleteButton);

    // Verificar que la función handleDelete se llama cuando se presiona el botón de eliminar
    expect(mockHandleDelete).toHaveBeenCalled();
  });
});